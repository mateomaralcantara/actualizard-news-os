export type ArticleStatus =
  | "draft"
  | "researching"
  | "writing"
  | "fact_check"
  | "review"
  | "scheduled"
  | "published"
  | "archived";

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; url: string; caption?: string }
  | { type: "video"; url: string; caption?: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "bullets"; items: string[] }
  | {
      type: "sources";
      items: Array<{
        name: string;
        url: string;
      }>;
    };

export interface SourceRecord {
  id: string;
  name: string;
  domain: string;
  url: string;
  type: "rss" | "html" | "api";
  country?: string;
  language?: string;
  trustScore: number;
}

export interface RawStory {
  id: string;
  sourceId: string;
  sourceName: string;
  url: string;
  title: string;
  summary: string;
  text: string;
  image?: string;
  publishedAt?: string;
  discoveredAt: string;
}

export interface StoryCluster {
  id: string;
  fingerprint: string;
  title: string;
  storyIds: string[];
  sourceCount: number;
  confidence: number;
  createdAt: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  dek: string;
  category: string;
  author: string;
  heroImage: string;
  heroCaption?: string;
  status: ArticleStatus;
  confidence: number;
  sourceCount: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  scheduledFor?: string;
  blocks: ContentBlock[];
  tags: string[];
}
