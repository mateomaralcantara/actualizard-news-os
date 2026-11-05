import {
  articles as seedArticles,
  sources
} from "@/data/seed";

import { currentNewsArticles } from "@/data/current-news";

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

  ...currentNewsArticles.filter(
    current =>
      !runtimeArticles.some(
        live =>
          live.id === current.id ||
          live.slug === current.slug
      )
  ),

  ...seedArticles.filter(
    seed =>
      !runtimeArticles.some(
        live =>
          live.id === seed.id ||
          live.slug === seed.slug
      ) &&
      !currentNewsArticles.some(
        current =>
          current.id === seed.id ||
          current.slug === seed.slug
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
