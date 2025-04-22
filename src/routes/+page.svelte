<script lang="ts">
  import { onMount } from 'svelte';
  import { fetchArticles } from '$lib/api/articles';
  import '../app.css';
  import SummaryCard from '$lib/components/SummaryCard.svelte';

  let articles = [];

  onMount(async () => {
    articles = await fetchArticles();
  });
</script>

<!-- Main Layout -->
<div class="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">

  <!-- Navbar -->
  <nav class="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-3xl font-extrabold text-blue-700 tracking-wide">📘 Smart Summarizer</h1>
      <a
        href="/article/new"
        class="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:from-blue-600 hover:to-purple-600 shadow-md hover:scale-105 transition-all duration-300"
      >
        + New Article
      </a>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="flex-grow py-16 px-6 sm:px-10 lg:px-16">
    <div class="max-w-7xl mx-auto space-y-12">

      <!-- Heading -->
      <div class="text-center space-y-4">
        <h2 class="text-4xl sm:text-5xl font-extrabold text-gray-800 leading-tight">Manage Your Summaries</h2>
        <p class="text-gray-600 text-lg">Save, organize, and read your summarized articles at any time.</p>
      </div>

      <!-- Articles Grid -->
      {#if articles.length > 0}
        <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {#each articles as article}
            <div class="bg-white/80 backdrop-blur-md border border-gray-200 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300">
              <SummaryCard {article} />
            </div>
          {/each}
        </div>
      {:else}
        <div class="flex flex-col items-center mt-20">
          <img src="/no-data.svg" alt="No Articles" class="w-64 mb-6 opacity-70"/>
          <p class="text-center text-gray-500 text-xl">No articles yet. Let's create your first one!</p>
        </div>
      {/if}

    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-white/70 backdrop-blur-md text-center py-6 text-sm text-gray-600 border-t mt-12">
    &copy; {new Date().getFullYear()} Smart Summarizer. Built with ❤️, creativity, and lots of coffee.
  </footer>

</div>
