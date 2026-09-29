import type {
  Article,
  ContentBlock
} from "@/lib/types";

import {
  loadClustersSync,
  loadStoriesSync,
  savePublishedArticleSync
} from "@/lib/discovery/repository";

import {
  slugify
} from "@/lib/discovery/normalize";

import {
  createEditorialDraft,
  getDraftForCluster
} from "./draft";

export async function publishCluster(
  clusterId: string
) {

  const clusters =
    loadClustersSync();

  const cluster =
    clusters.find(
      item =>
        item.id === clusterId
    );

  if (!cluster) {

    throw new Error(
      "Cluster no encontrado."
    );
  }

  const minimum =
    Number(
      process.env
        .ACTUALIZARD_MIN_PUBLISH_SCORE ||
      75
    );

  if (
    cluster.confidence <
    minimum
  ) {

    throw new Error(
      `Confianza ${cluster.confidence}. El mínimo configurado es ${minimum}.`
    );
  }

  let draft =
    getDraftForCluster(
      clusterId
    );

  if (!draft) {

    draft =
      await createEditorialDraft(
        clusterId
      );
  }

  const stories =
    loadStoriesSync()
      .filter(
        story =>
          cluster.storyIds.includes(
            story.id
          )
      );

  const heroImage =
    stories.find(
      story =>
        Boolean(story.image)
    )?.image ||
    "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1600&q=80";

  const blocks:
    ContentBlock[] = [];

  for (
    const paragraph
    of draft.paragraphs
  ) {

    blocks.push({
      type: "paragraph",
      text: paragraph
    });
  }

  if (
    draft.bullets.length
  ) {

    blocks.push({
      type: "bullets",
      items:
        draft.bullets
    });
  }

  const firstVideo =
    stories.find(
      story =>
        Boolean(story.video)
    )?.video;

  if (
    firstVideo &&
    firstVideo.includes(
      "youtube"
    )
  ) {

    blocks.push({
      type: "video",
      url: firstVideo,
      caption:
        "Video relacionado con la historia."
    });
  }

  blocks.push({
    type: "paragraph",

    text:
      `Fuentes consultadas: ${
        draft.sources
          .map(
            source =>
              source.name
          )
          .join(", ")
      }.`
  });

  const now =
    new Date().toISOString();

  const article:
    Article = {

    id:
      `live-${cluster.id}`,

    slug:
      `${slugify(
        draft.title
      )}-${
        cluster.id.slice(-6)
      }`,

    title:
      draft.title,

    dek:
      draft.dek,

    category:
      cluster.category,

    author:
      "Redacción Actualizard",

    heroImage,

    status:
      "published",

    confidence:
      cluster.confidence,

    sourceCount:
      cluster.sourceCount,

    createdAt:
      now,

    updatedAt:
      now,

    publishedAt:
      now,

    blocks,

    tags:
      draft.tags
  };

  savePublishedArticleSync(
    article
  );

  return article;
}
