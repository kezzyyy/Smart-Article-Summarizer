<script lang="ts">
  export let article = { title: '', content: '' };
  export let onSubmit: (data: typeof article) => void;
</script>

<form on:submit|preventDefault={() => onSubmit(article)} class="space-y-4">
  <input bind:value={article.title} placeholder="Title" class="input input-bordered w-full" />
  <textarea bind:value={article.content} placeholder="Content" class="textarea textarea-bordered w-full" rows="6"></textarea>
  <button class="btn btn-primary">Save</button>
</form>
