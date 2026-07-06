<script lang="ts">
	import SpecialInterestPage from '$lib/components/stories/SpecialInterestPage.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.hub.title} — Stories — Games of War</title>
	<meta
		name="description"
		content="In-depth articles on wartime games and wargames — playing pieces, hidden setup, dexterity games, wargame innovations, and collector highlights."
	/>
</svelte:head>

<SpecialInterestPage hub={data.hub} />
