import { store } from "./store";

export function runScheduler(now = new Date()) {
  const published: string[] = [];
  for (const article of store.articles) {
    if (
      article.status === "scheduled" &&
      article.scheduledFor &&
      new Date(article.scheduledFor).getTime() <= now.getTime()
    ) {
      article.status = "published";
      article.publishedAt = now.toISOString();
      article.updatedAt = now.toISOString();
      published.push(article.id);
    }
  }
  return { published, checked: store.articles.length };
}
