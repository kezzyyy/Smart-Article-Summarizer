<script lang="ts">
  export let article: { id: number, title: string, summary?: string };
</script>

<div class="card bg-base-100 shadow-md p-4">
  <h3 class="text-lg font-bold mb-1">{article.title}</h3>
  {#if article.summary}
    <p class="text-sm mt-2">{article.summary}</p>
  {:else}
    <p class="text-sm italic text-gray-500">No summary available.</p>
  {/if}
  <a href={`/article/${article.id}`} class="btn btn-sm btn-secondary mt-4">View</a>
</div>
