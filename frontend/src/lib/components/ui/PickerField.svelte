<script lang="ts">
	export type PickerOption = { value: string; label: string };

	let {
		name,
		label,
		value = $bindable(''),
		options,
		placeholder = 'All',
		id = '',
		searchable = false,
		compact = false,
		onselect
	}: {
		name: string;
		label: string;
		value?: string;
		options: PickerOption[];
		placeholder?: string;
		id?: string;
		searchable?: boolean;
		compact?: boolean;
		onselect?: (value: string) => void;
	} = $props();

	let open = $state(false);
	let search = $state('');
	let root: HTMLDivElement | undefined = $state();
	let searchInput: HTMLInputElement | undefined = $state();

	const selectedLabel = $derived(
		value ? (options.find((option) => option.value === value)?.label ?? value) : placeholder
	);

	const filteredOptions = $derived(
		searchable && search.trim()
			? options.filter((option) =>
					option.label.toLowerCase().includes(search.trim().toLowerCase())
				)
			: options
	);

	function toggle() {
		open = !open;
		if (open && searchable) {
			search = '';
			queueMicrotask(() => searchInput?.focus());
		}
	}

	function select(next: string) {
		value = next;
		open = false;
		search = '';
		onselect?.(next);
	}

	function onWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && open) {
			open = false;
			search = '';
		}
	}

	$effect(() => {
		if (!open || typeof document === 'undefined') return;

		function onPointerDown(event: PointerEvent) {
			if (!root?.contains(event.target as Node)) {
				open = false;
				search = '';
			}
		}

		document.addEventListener('pointerdown', onPointerDown, true);
		return () => document.removeEventListener('pointerdown', onPointerDown, true);
	});
</script>

<svelte:window onkeydown={onWindowKeydown} />

<div class="picker" class:compact class:open bind:this={root}>
	{#if !compact}
		<label class="picker-label" for={id || `${name}-trigger`}>{label}</label>
	{/if}

	<input type="hidden" {name} {value} />

	<button
		id={id || `${name}-trigger`}
		type="button"
		class="picker-trigger"
		aria-haspopup="listbox"
		aria-expanded={open}
		aria-label={compact ? `${label}: ${selectedLabel}` : undefined}
		onclick={toggle}
	>
		{#if compact}
			<span class="picker-compact-label">{label}</span>
		{/if}
		<span class="picker-value" class:is-placeholder={!value}>{selectedLabel}</span>
		<svg class="picker-chevron" width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
			<path
				d="M1.4.4 6 5l4.6-4.6L12 2.4 6 8.4 0 2.4z"
				fill="currentColor"
			/>
		</svg>
	</button>

	{#if open}
		<div class="picker-menu" role="listbox" aria-label={label}>
			{#if searchable}
				<div class="picker-search">
					<input
						bind:this={searchInput}
						type="search"
						placeholder="Search…"
						bind:value={search}
						onclick={(event) => event.stopPropagation()}
					/>
				</div>
			{/if}

			<div class="picker-options">
				<button
					type="button"
					class="picker-option"
					class:selected={!value}
					role="option"
					aria-selected={!value}
					onclick={() => select('')}
				>
					<span>{placeholder}</span>
					{#if !value}
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
							<path
								d="M5 12l5 5L20 7"
								stroke="currentColor"
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					{/if}
				</button>

				{#each filteredOptions as option (option.value)}
					<button
						type="button"
						class="picker-option"
						class:selected={value === option.value}
						role="option"
						aria-selected={value === option.value}
						onclick={() => select(option.value)}
					>
						<span>{option.label}</span>
						{#if value === option.value}
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d="M5 12l5 5L20 7"
									stroke="currentColor"
									stroke-width="2.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						{/if}
					</button>
				{/each}

				{#if searchable && search.trim() && filteredOptions.length === 0}
					<p class="picker-empty">No matches</p>
				{/if}
			</div>
		</div>
	{/if}
</div>

<style>
	.picker {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		min-width: 0;
	}

	.picker-label {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.picker-trigger {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		width: 100%;
		min-height: 2.5rem;
		padding: 0.55rem 0.75rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg-elevated);
		font: inherit;
		font-size: 0.9375rem;
		font-weight: 500;
		color: var(--color-text);
		text-align: left;
		cursor: pointer;
		transition:
			border-color var(--transition-fast),
			box-shadow var(--transition-fast);
	}

	.picker-trigger:hover {
		border-color: var(--color-primary-light);
	}

	.picker.open .picker-trigger {
		border-color: var(--color-primary);
		box-shadow: 0 0 0 3px rgba(85, 139, 110, 0.18);
	}

	.picker-value {
		flex: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.picker-value.is-placeholder {
		color: var(--color-text-muted);
	}

	.picker-chevron {
		flex-shrink: 0;
		color: var(--color-text-muted);
		transition: transform var(--transition-fast);
	}

	.picker.open .picker-chevron {
		transform: rotate(180deg);
	}

	.picker.compact .picker-trigger {
		min-height: 2.65rem;
		padding: 0.5rem 0.85rem;
	}

	.picker-compact-label {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-muted);
		flex-shrink: 0;
	}

	.picker-menu {
		position: absolute;
		top: calc(100% + 0.35rem);
		left: 0;
		right: 0;
		z-index: 50;
		display: flex;
		flex-direction: column;
		background: var(--color-bg-elevated);
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-lg);
		overflow: hidden;
		animation: picker-in 0.15s ease-out;
	}

	.picker.compact .picker-menu {
		min-width: 14rem;
		right: auto;
	}

	@keyframes picker-in {
		from {
			opacity: 0;
			transform: translateY(-4px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.picker-search {
		padding: 0.5rem;
		border-bottom: 1px solid var(--color-border);
	}

	.picker-search input {
		width: 100%;
		font: inherit;
		font-size: 0.875rem;
		padding: 0.5rem 0.65rem;
		border: 1px solid var(--color-border-strong);
		border-radius: var(--radius-sm);
		background: var(--color-bg);
		color: var(--color-text);
	}

	.picker-search input:focus {
		outline: none;
		border-color: var(--color-primary-light);
		box-shadow: 0 0 0 2px rgba(85, 139, 110, 0.15);
	}

	.picker-options {
		max-height: 16rem;
		overflow-y: auto;
		padding: 0.35rem;
	}

	.picker-option {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		width: 100%;
		padding: 0.6rem 0.65rem;
		border: 0;
		border-radius: var(--radius-sm);
		background: transparent;
		font: inherit;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text);
		text-align: left;
		cursor: pointer;
		transition: background var(--transition-fast);
	}

	.picker-option span {
		flex: 1;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.picker-option:hover {
		background: var(--color-bg-muted);
	}

	.picker-option.selected {
		background: var(--color-bg-muted);
		color: var(--color-primary-dark);
		font-weight: 600;
	}

	.picker-option svg {
		flex-shrink: 0;
		color: var(--color-primary);
	}

	.picker-empty {
		margin: 0;
		padding: 0.75rem;
		font-size: 0.8125rem;
		color: var(--color-text-muted);
		text-align: center;
	}
</style>
