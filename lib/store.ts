import {
  articles as seedArticles,
  sources
} from "@/data/seed";

import type {
  Article,
  RawStory,
  StoryCluster
} from "@/lib/types";

import {
  loadPublishedArticlesSync
} from "@/lib/discovery/repository";

const runtimeArticles =
  loadPublishedArticlesSync();

const initialArticles: Article[] = [
  ...runtimeArticles,

  ...seedArticles.filter(
    seed =>
      !runtimeArticles.some(
        live =>
          live.id === seed.id ||
          live.slug === seed.slug
      )
  )
];

const globalStore =
  globalThis as unknown as {
    __actualizard?: {
      articles: Article[];
      rawStories: RawStory[];
      clusters: StoryCluster[];
    };
  };

export const store =
  globalStore.__actualizard ?? {
    articles:
      structuredClone(
        initialArticles
      ),

    rawStories: [],

    clusters: []
  };

if (
  !globalStore.__actualizard
) {

  globalStore.__actualizard =
    store;
}

export {
  sources
};
