import { json } from '@sveltejs/kit';

let articles: any[] = [];

export async function GET({ params }) {
  const article = articles.find(a => a.id === +params.id);
  if (!article) return json({ error: 'Not found' }, { status: 404 });
  return json(article);
}
