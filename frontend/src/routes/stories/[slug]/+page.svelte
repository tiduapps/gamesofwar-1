<script lang="ts">
	import StoryArticle from '$lib/components/stories/StoryArticle.svelte';
	import type { StoryContent } from '$lib/data/stories';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.story.title} — Stories — Games of War</title>
	<meta
		name="description"
		content="Read “{data.story.title}” and explore the wartime games linked to this chapter of history."
	/>
</svelte:head>

<StoryArticle
	content={data.content as StoryContent}
	parentStory={data.parentStory}
	chapters={data.chapters}
	prevStory={data.prevStory}
	nextStory={data.nextStory}
/>
