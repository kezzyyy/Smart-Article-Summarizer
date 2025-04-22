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

<div class="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
  <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
    <h2 class="text-3xl font-extrabold text-gray-900 mb-6">New Article</h2>

    <div class="mb-4">
      <label class="block text-sm font-medium text-gray-700 mb-1">Title</label>
      <input
        bind:value={title}
        placeholder="Enter the title"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700 mb-1">Content</label>
      <textarea
        bind:value={content}
        placeholder="Write your article content here..."
        rows="8"
        class="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>

    <button
      on:click={save}
      class="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
    >
      Save Article
    </button>
  </div>
</div>
