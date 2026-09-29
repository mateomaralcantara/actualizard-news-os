import type {
  LiveStory,
  LiveCluster
} from "./types";

import {
  jaccardSimilarity
} from "./similarity";

import {
  extractFacts
} from "./facts";

import {
  textHash
} from "./normalize";

function newestTimestamp(
  stories: LiveStory[]
) {

  return Math.max(
    ...stories.map(
      story => {

        const date =
          story.publishedAt ||
          story.discoveredAt;

        const time =
          new Date(date).getTime();

        return Number.isFinite(time)
          ? time
          : 0;
      }
    )
  );
}

function confidenceScore(
  stories: LiveStory[]
) {

  const uniqueSources =
    new Set(
      stories.map(
        story =>
          story.sourceId
      )
    );

  const averageTrust =
    stories.reduce(
      (total, story) =>
        total +
        story.sourceTrust,
      0
    ) /
    Math.max(
      stories.length,
      1
    );

  const sourceScore =
    Math.min(
      25,
      uniqueSources.size * 6
    );

  const trustScore =
    Math.min(
      25,
      averageTrust * 0.25
    );

  const officialScore =
    stories.some(
      story =>
        story.officialSource
    )
      ? 15
      : 0;

  const newest =
    newestTimestamp(stories);

  const ageHours =
    newest
      ? (
          Date.now() -
          newest
        ) /
        3600000
      : 999;

  let freshness = 3;

  if (ageHours <= 6) {
    freshness = 15;
  } else if (ageHours <= 24) {
    freshness = 12;
  } else if (ageHours <= 72) {
    freshness = 9;
  } else if (ageHours <= 168) {
    freshness = 6;
  }

  let agreement = 10;

  if (stories.length > 1) {

    let total = 0;
    let comparisons = 0;

    for (
      let i = 0;
      i < stories.length;
      i++
    ) {

      for (
        let j = i + 1;
        j < stories.length;
        j++
      ) {

        total +=
          jaccardSimilarity(
            stories[i].title,
            stories[j].title
          );

        comparisons++;
      }
    }

    if (comparisons) {

      agreement =
        Math.min(
          20,
          8 +
          (
            total /
            comparisons
          ) * 14
        );
    }
  }

  return Math.min(
    100,
    Math.round(
      sourceScore +
      trustScore +
      officialScore +
      freshness +
      agreement
    )
  );
}

export function clusterStories(
  stories: LiveStory[]
) {

  const working: Array<{
    title: string;
    stories: LiveStory[];
    createdAt: string;
  }> = [];

  const sorted =
    [...stories]
      .sort(
        (a, b) =>
          new Date(
            b.publishedAt ||
            b.discoveredAt
          ).getTime() -
          new Date(
            a.publishedAt ||
            a.discoveredAt
          ).getTime()
      );

  for (const story of sorted) {

    let bestIndex = -1;
    let bestScore = 0;

    for (
      let index = 0;
      index < working.length;
      index++
    ) {

      const candidate =
        working[index];

      const similarity =
        jaccardSimilarity(
          story.title,
          candidate.title
        );

      if (
        similarity > bestScore
      ) {

        bestScore =
          similarity;

        bestIndex =
          index;
      }
    }

    if (
      bestIndex >= 0 &&
      bestScore >= 0.42
    ) {

      working[
        bestIndex
      ].stories.push(story);

    } else {

      working.push({
        title:
          story.title,

        stories: [
          story
        ],

        createdAt:
          story.discoveredAt
      });
    }
  }

  const clusters:
    LiveCluster[] =
    working.map(
      item => {

        const uniqueSources =
          Array.from(
            new Set(
              item.stories.map(
                story =>
                  story.sourceId
              )
            )
          );

        const sourceNames =
          Array.from(
            new Set(
              item.stories.map(
                story =>
                  story.sourceName
              )
            )
          );

        const categories =
          item.stories.map(
            story =>
              story.category
          );

        const category =
          categories
            .sort(
              (
                a,
                b
              ) =>
                categories.filter(
                  value =>
                    value === b
                ).length -
                categories.filter(
                  value =>
                    value === a
                ).length
            )[0] ||
          "Actualidad";

        const clusterId =
          `cluster-${
            textHash(
              item.title
            ).slice(
              0,
              16
            )
          }`;

        return {

          id:
            clusterId,

          title:
            item.title,

          storyIds:
            item.stories.map(
              story =>
                story.id
            ),

          sourceIds:
            uniqueSources,

          sourceNames,

          sourceCount:
            uniqueSources.length,

          confidence:
            confidenceScore(
              item.stories
            ),

          category,

          officialConfirmation:
            item.stories.some(
              story =>
                story.officialSource
            ),

          facts:
            extractFacts(
              item.stories
            ),

          createdAt:
            item.createdAt,

          updatedAt:
            new Date().toISOString()
        };
      }
    );

  return clusters.sort(
    (a, b) => {

      if (
        b.sourceCount !==
        a.sourceCount
      ) {

        return (
          b.sourceCount -
          a.sourceCount
        );
      }

      return (
        b.confidence -
        a.confidence
      );
    }
  );
}
