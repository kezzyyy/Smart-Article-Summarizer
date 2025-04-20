import { json } from '@sveltejs/kit';

let articles: any[] = [];
let idCounter = 1;

export async function GET() {
  return json(articles);
}

export async function POST({ request }) {
  const data = await request.json();
  const newArticle = { id: idCounter++, ...data };
  articles.push(newArticle);
  return json(newArticle, { status: 201 });
}
