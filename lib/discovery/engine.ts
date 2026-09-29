import {
  getEnabledDiscoverySources
} from "./source-registry";

import {
  discoverSource
} from "./discover";

import {
  extractStory
} from "./extract";

import {
  isDuplicateStory
} from "./similarity";

import {
  clusterStories
} from "./cluster";

import {
  getRobotsDelayMs
} from "./robots";

import {
  loadStoriesSync,
  saveStoriesSync,
  saveClustersSync,
  appendRunSync
} from "./repository";

import type {
  DiscoveryRun
} from "./types";

function sleep(
  ms: number
) {

  return new Promise(
    resolve =>
      setTimeout(
        resolve,
        ms
      )
  );
}

export async function runDiscoveryEngine() {

  const startedAt =
    new Date().toISOString();

  const run: DiscoveryRun = {

    id:
      `run-${Date.now()}`,

    startedAt,

    completedAt: "",

    sourcesChecked: 0,

    candidatesFound: 0,

    storiesAdded: 0,

    duplicatesRejected: 0,

    clusterCount: 0,

    errors: []
  };

  let stories =
    loadStoriesSync();

  const knownUrls =
    new Set(
      stories.flatMap(
        story => [
          story.url,
          story.canonicalUrl
        ]
      )
    );

  const sources =
    getEnabledDiscoverySources();

  const globalLimit =
    Math.max(
      1,
      Number(
        process.env
          .DISCOVERY_MAX_TOTAL ||
        24
      )
    );

  let processed = 0;

  for (const source of sources) {

    if (
      processed >= globalLimit
    ) {

      break;
    }

    run.sourcesChecked++;

    try {

      const candidates =
        await discoverSource(
          source
        );

      run.candidatesFound +=
        candidates.length;

      const perSource =
        Math.min(
          source.maxItems,

          Math.max(
            1,
            Number(
              process.env
                .DISCOVERY_MAX_PER_SOURCE ||
              source.maxItems
            )
          )
        );

      let acceptedForSource = 0;

      for (
        const candidate
        of candidates
      ) {

        if (
          processed >= globalLimit ||
          acceptedForSource >= perSource
        ) {

          break;
        }

        if (
          knownUrls.has(
            candidate.url
          )
        ) {

          run.duplicatesRejected++;

          continue;
        }

        try {

          const story =
            await extractStory(
              source,
              candidate
            );

          processed++;

          if (!story) {
            continue;
          }

          if (
            isDuplicateStory(
              story,
              stories
            )
          ) {

            run.duplicatesRejected++;

            knownUrls.add(
              story.url
            );

            knownUrls.add(
              story.canonicalUrl
            );

            continue;
          }

          stories.push(story);

          knownUrls.add(
            story.url
          );

          knownUrls.add(
            story.canonicalUrl
          );

          run.storiesAdded++;

          acceptedForSource++;

          const robotsDelay =
            await getRobotsDelayMs(
              story.url
            );

          const delay =
            Math.max(
              source.delayMs ||
              300,

              robotsDelay
            );

          if (delay > 0) {

            await sleep(
              Math.min(
                delay,
                5000
              )
            );
          }

        } catch (error) {

          run.errors.push(
            `${
              source.name
            } / ${
              candidate.url
            }: ${
              error instanceof Error
                ? error.message
                : String(error)
            }`
          );
        }
      }

    } catch (error) {

      run.errors.push(
        `${
          source.name
        }: ${
          error instanceof Error
            ? error.message
            : String(error)
        }`
      );
    }
  }

  /*
   * Mantener el dataset local razonable.
   */

  stories =
    stories
      .sort(
        (a, b) =>
          new Date(
            b.discoveredAt
          ).getTime() -
          new Date(
            a.discoveredAt
          ).getTime()
      )
      .slice(
        0,
        5000
      );

  saveStoriesSync(
    stories
  );

  const clusters =
    clusterStories(
      stories
    );

  saveClustersSync(
    clusters
  );

  run.clusterCount =
    clusters.length;

  run.completedAt =
    new Date().toISOString();

  appendRunSync(run);

  return {
    run,
    stories:
      stories.length,

    clusters:
      clusters.length,

    firecrawlConfigured:
      Boolean(
        process.env
          .FIRECRAWL_API_KEY
      ),

    aiConfigured:
      Boolean(
        process.env
          .OPENAI_API_KEY
      )
  };
}
