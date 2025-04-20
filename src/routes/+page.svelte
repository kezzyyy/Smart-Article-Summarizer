<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchArticles } from '$lib/api/articles';
  import SummaryCard from '$lib/components/SummaryCard.svelte';

  let articles = [];

  onMount(async () => {
    articles = await fetchArticles();
  });
</script>

<h1 class="text-2xl font-bold mb-4">Articles</h1>
<a href="/article/new" class="btn btn-primary mb-4">+ New Article</a>

<div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {#each articles as article}
    <SummaryCard {article} />
  {/each}
</div>
