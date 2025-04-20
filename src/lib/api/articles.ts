export async function fetchArticles() {
  const res = await fetch('/api/articles');
  return await res.json();
}

export async function summarizeArticle(id: number) {
  const res = await fetch(`/api/articles/${id}/summarize`, { method: 'POST' });
  return await res.json();
}
