import type { Article } from "@/lib/types";

export type DiscoverySourceKind = "rss" | "html";

export interface DiscoverySource {
  id: string;
  name: string;
  domain: string;
  url: string;

  kind: DiscoverySourceKind;

  country: string;
  language: string;
  category: string;

  official: boolean;

  trustScore: number;

  enabled: boolean;

  maxItems: number;

  delayMs?: number;
}

export interface DiscoveredLink {
  sourceId: string;
  sourceName: string;

  url: string;

  title: string;

  summary?: string;

  publishedAt?: string;

  discoveredAt: string;
}

export type ExtractionMethod =
  | "direct"
  | "rss"
  | "firecrawl";

export interface LiveStory {
  id: string;

  sourceId: string;
  sourceName: string;

  sourceTrust: number;
  officialSource: boolean;

  category: string;

  url: string;
  canonicalUrl: string;

  title: string;
  summary: string;
  body: string;

  author?: string;

  image?: string;
  video?: string;

  publishedAt?: string;

  discoveredAt: string;

  titleHash: string;
  bodyHash: string;

  extractionMethod: ExtractionMethod;
}

export interface ExtractedFacts {
  percentages: string[];
  money: string[];
  dates: string[];
  numbers: string[];
  entities: string[];
}

export interface LiveCluster {
  id: string;

  title: string;

  storyIds: string[];

  sourceIds: string[];

  sourceNames: string[];

  sourceCount: number;

  confidence: number;

  category: string;

  officialConfirmation: boolean;

  facts: ExtractedFacts;

  createdAt: string;
  updatedAt: string;
}

export interface DiscoveryRun {
  id: string;

  startedAt: string;
  completedAt: string;

  sourcesChecked: number;
  candidatesFound: number;
  storiesAdded: number;
  duplicatesRejected: number;

  clusterCount: number;

  errors: string[];
}

export interface EditorialDraft {
  id: string;

  clusterId: string;

  title: string;
  dek: string;

  paragraphs: string[];

  bullets: string[];

  tags: string[];

  sources: Array<{
    name: string;
    url: string;
  }>;

  confidence: number;

  generatedBy: "ai" | "fallback";

  createdAt: string;
}

export interface DiscoveryState {
  stories: LiveStory[];
  clusters: LiveCluster[];
  runs: DiscoveryRun[];
  drafts: EditorialDraft[];
  published: Article[];
}
