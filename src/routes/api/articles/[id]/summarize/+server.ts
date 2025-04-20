import { json } from '@sveltejs/kit';

let articles: any[] = [];

export async function POST({ params }) {
  const id = +params.id;
  const article = articles.find(a => a.id === id);

  if (!article) {
    return json({ error: 'Article not found' }, { status: 404 });
  }

  // Mock summarization logic
  article.summary = article.content.split('.').slice(0, 2).join('.') + '.';
  return json(article);
}
