<script lang="ts">
  import { goto } from '$app/navigation';
  let title = '';
  let content = '';

  const save = async () => {
    await fetch('/api/articles', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' }
    });
    goto('/');
  };
</script>

<h2 class="text-xl font-semibold mb-2">New Article</h2>
<input bind:value={title} placeholder="Title" class="input input-bordered w-full mb-2" />
<textarea bind:value={content} placeholder="Content" class="textarea textarea-bordered w-full mb-2" rows="8"></textarea>
<button class="btn btn-success" on:click={save}>Save Article</button>
