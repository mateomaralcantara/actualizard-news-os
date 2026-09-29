import fs from "node:fs";
import path from "node:path";

import type {
  Article
} from "@/lib/types";

import type {
  LiveStory,
  LiveCluster,
  DiscoveryRun,
  EditorialDraft
} from "./types";

import {
  getLocalDatabase
} from "@/lib/localdb/database";


let legacyMigrationChecked =
  false;


function parseJson<T>(
  value: unknown,
  fallback: T
): T {

  if (
    typeof value !== "string"
  ) {

    return fallback;
  }

  try {

    return JSON.parse(
      value
    ) as T;

  } catch {

    return fallback;
  }
}


function readLegacyArray<T>(
  filename: string
): T[] {

  const file =
    path.join(
      process.cwd(),
      "data",
      "runtime",
      filename
    );

  if (
    !fs.existsSync(file)
  ) {

    return [];
  }

  try {

    const value =
      JSON.parse(
        fs.readFileSync(
          file,
          "utf8"
        )
      );

    return Array.isArray(value)
      ? value
      : [];

  } catch {

    return [];
  }
}


function upsertSourceFromStory(
  story: LiveStory
) {

  const database =
    getLocalDatabase();

  database
    .prepare(`
      INSERT INTO sources (
        id,
        name,
        category,
        official,
        trust_score,
        enabled,
        updated_at
      )
      VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        1,
        CURRENT_TIMESTAMP
      )

      ON CONFLICT(id)
      DO UPDATE SET

        name =
          excluded.name,

        category =
          excluded.category,

        official =
          excluded.official,

        trust_score =
          excluded.trust_score,

        updated_at =
          CURRENT_TIMESTAMP
    `)
    .run(
      story.sourceId,
      story.sourceName,
      story.category,
      story.officialSource
        ? 1
        : 0,
      story.sourceTrust
    );
}


function upsertStoryInternal(
  story: LiveStory
) {

  const database =
    getLocalDatabase();

  upsertSourceFromStory(
    story
  );

  database
    .prepare(`
      INSERT INTO raw_stories (
        id,
        source_id,
        source_name,
        source_trust,
        official_source,
        category,
        url,
        canonical_url,
        title,
        summary,
        body,
        author,
        image_url,
        video_url,
        published_at,
        discovered_at,
        title_hash,
        body_hash,
        extraction_method,
        payload_json,
        updated_at
      )

      VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        CURRENT_TIMESTAMP
      )

      ON CONFLICT(id)
      DO UPDATE SET

        source_id =
          excluded.source_id,

        source_name =
          excluded.source_name,

        source_trust =
          excluded.source_trust,

        official_source =
          excluded.official_source,

        category =
          excluded.category,

        url =
          excluded.url,

        canonical_url =
          excluded.canonical_url,

        title =
          excluded.title,

        summary =
          excluded.summary,

        body =
          excluded.body,

        author =
          excluded.author,

        image_url =
          excluded.image_url,

        video_url =
          excluded.video_url,

        published_at =
          excluded.published_at,

        discovered_at =
          excluded.discovered_at,

        title_hash =
          excluded.title_hash,

        body_hash =
          excluded.body_hash,

        extraction_method =
          excluded.extraction_method,

        payload_json =
          excluded.payload_json,

        updated_at =
          CURRENT_TIMESTAMP
    `)
    .run(
      story.id,
      story.sourceId,
      story.sourceName,
      story.sourceTrust,
      story.officialSource
        ? 1
        : 0,
      story.category,
      story.url,
      story.canonicalUrl,
      story.title,
      story.summary || null,
      story.body || null,
      story.author || null,
      story.image || null,
      story.video || null,
      story.publishedAt || null,
      story.discoveredAt,
      story.titleHash,
      story.bodyHash,
      story.extractionMethod,
      JSON.stringify(
        story
      )
    );
}


function upsertClusterInternal(
  cluster: LiveCluster
) {

  const database =
    getLocalDatabase();

  database
    .prepare(`
      INSERT INTO story_clusters (
        id,
        title,
        category,
        confidence,
        official_confirmation,
        source_count,
        facts_json,
        payload_json,
        created_at,
        updated_at
      )

      VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      )

      ON CONFLICT(id)
      DO UPDATE SET

        title =
          excluded.title,

        category =
          excluded.category,

        confidence =
          excluded.confidence,

        official_confirmation =
          excluded.official_confirmation,

        source_count =
          excluded.source_count,

        facts_json =
          excluded.facts_json,

        payload_json =
          excluded.payload_json,

        updated_at =
          excluded.updated_at
    `)
    .run(
      cluster.id,
      cluster.title,
      cluster.category,
      cluster.confidence,
      cluster.officialConfirmation
        ? 1
        : 0,
      cluster.sourceCount,
      JSON.stringify(
        cluster.facts
      ),
      JSON.stringify(
        cluster
      ),
      cluster.createdAt,
      cluster.updatedAt
    );


  database
    .prepare(`
      DELETE FROM cluster_members
      WHERE cluster_id = ?
    `)
    .run(
      cluster.id
    );


  const insertMember =
    database.prepare(`
      INSERT OR IGNORE
      INTO cluster_members (
        cluster_id,
        story_id
      )
      VALUES (
        ?,
        ?
      )
    `);


  for (
    const storyId
    of cluster.storyIds
  ) {

    /*
     * Puede existir un cluster
     * procedente de un legacy JSON
     * cuyo story ya no este en DB.
     */

    const exists =
      database
        .prepare(`
          SELECT id
          FROM raw_stories
          WHERE id = ?
        `)
        .get(
          storyId
        );

    if (exists) {

      insertMember.run(
        cluster.id,
        storyId
      );
    }
  }


  database
    .prepare(`
      DELETE FROM facts
      WHERE cluster_id = ?
    `)
    .run(
      cluster.id
    );


  const insertFact =
    database.prepare(`
      INSERT INTO facts (
        cluster_id,
        fact_type,
        fact_value
      )
      VALUES (
        ?,
        ?,
        ?
      )
    `);


  const factGroups:
    Array<
      [
        string,
        string[]
      ]
    > = [
      [
        "percentage",
        cluster.facts
          .percentages
      ],
      [
        "money",
        cluster.facts
          .money
      ],
      [
        "date",
        cluster.facts
          .dates
      ],
      [
        "number",
        cluster.facts
          .numbers
      ],
      [
        "entity",
        cluster.facts
          .entities
      ]
    ];


  for (
    const [
      type,
      values
    ]
    of factGroups
  ) {

    for (
      const value
      of values
    ) {

      insertFact.run(
        cluster.id,
        type,
        value
      );
    }
  }
}


function upsertRunInternal(
  run: DiscoveryRun
) {

  const database =
    getLocalDatabase();

  database
    .prepare(`
      INSERT INTO discovery_runs (
        id,
        started_at,
        completed_at,
        sources_checked,
        candidates_found,
        stories_added,
        duplicates_rejected,
        cluster_count,
        errors_json,
        payload_json
      )

      VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      )

      ON CONFLICT(id)
      DO UPDATE SET

        completed_at =
          excluded.completed_at,

        sources_checked =
          excluded.sources_checked,

        candidates_found =
          excluded.candidates_found,

        stories_added =
          excluded.stories_added,

        duplicates_rejected =
          excluded.duplicates_rejected,

        cluster_count =
          excluded.cluster_count,

        errors_json =
          excluded.errors_json,

        payload_json =
          excluded.payload_json
    `)
    .run(
      run.id,
      run.startedAt,
      run.completedAt || null,
      run.sourcesChecked,
      run.candidatesFound,
      run.storiesAdded,
      run.duplicatesRejected,
      run.clusterCount,
      JSON.stringify(
        run.errors
      ),
      JSON.stringify(
        run
      )
    );
}


function upsertDraftInternal(
  draft: EditorialDraft
) {

  const database =
    getLocalDatabase();

  database
    .prepare(`
      INSERT INTO editorial_drafts (
        id,
        cluster_id,
        title,
        generated_by,
        confidence,
        payload_json,
        created_at,
        updated_at
      )

      VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        CURRENT_TIMESTAMP
      )

      ON CONFLICT(cluster_id)
      DO UPDATE SET

        id =
          excluded.id,

        title =
          excluded.title,

        generated_by =
          excluded.generated_by,

        confidence =
          excluded.confidence,

        payload_json =
          excluded.payload_json,

        created_at =
          excluded.created_at,

        updated_at =
          CURRENT_TIMESTAMP
    `)
    .run(
      draft.id,
      draft.clusterId,
      draft.title,
      draft.generatedBy,
      draft.confidence,
      JSON.stringify(
        draft
      ),
      draft.createdAt
    );
}


function upsertArticleInternal(
  article: Article
) {

  const database =
    getLocalDatabase();


  /*
   * Evitar conflicto de slug
   * perteneciente a un id viejo.
   */

  database
    .prepare(`
      DELETE FROM articles
      WHERE slug = ?
      AND id <> ?
    `)
    .run(
      article.slug,
      article.id
    );


  database
    .prepare(`
      INSERT INTO articles (
        id,
        slug,
        title,
        category,
        author,
        hero_image_url,
        status,
        confidence,
        source_count,
        published_at,
        created_at,
        updated_at,
        payload_json
      )

      VALUES (
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?,
        ?
      )

      ON CONFLICT(id)
      DO UPDATE SET

        slug =
          excluded.slug,

        title =
          excluded.title,

        category =
          excluded.category,

        author =
          excluded.author,

        hero_image_url =
          excluded.hero_image_url,

        status =
          excluded.status,

        confidence =
          excluded.confidence,

        source_count =
          excluded.source_count,

        published_at =
          excluded.published_at,

        updated_at =
          excluded.updated_at,

        payload_json =
          excluded.payload_json
    `)
    .run(
      article.id,
      article.slug,
      article.title,
      article.category,
      article.author,
      article.heroImage || null,
      article.status,
      article.confidence,
      article.sourceCount,
      article.publishedAt || null,
      article.createdAt,
      article.updatedAt,
      JSON.stringify(
        article
      )
    );


  /*
   * FTS local.
   */

  try {

    database
      .prepare(`
        DELETE FROM article_search
        WHERE article_id = ?
      `)
      .run(
        article.id
      );


    const content =
      article.blocks
        .map(
          block => {

            if (
              block.type ===
              "paragraph"
            ) {

              return block.text;
            }

            if (
              block.type ===
              "bullets"
            ) {

              return block.items
                .join(" ");
            }

            return "";
          }
        )
        .join(" ");


    database
      .prepare(`
        INSERT INTO article_search (
          article_id,
          title,
          dek,
          content,
          tags
        )
        VALUES (
          ?,
          ?,
          ?,
          ?,
          ?
        )
      `)
      .run(
        article.id,
        article.title,
        article.dek || "",
        content,
        article.tags.join(" ")
      );

  } catch {

    /*
     * FTS opcional.
     */
  }
}


function ensureLegacyMigration() {

  if (
    legacyMigrationChecked
  ) {
    return;
  }

  legacyMigrationChecked =
    true;


  const database =
    getLocalDatabase();


  const migrated =
    database
      .prepare(`
        SELECT value
        FROM schema_meta
        WHERE key =
          'legacy_json_migrated'
      `)
      .get() as
      | {
          value?: string;
        }
      | undefined;


  if (
    migrated?.value === "1"
  ) {

    return;
  }


  const stories =
    readLegacyArray<LiveStory>(
      "stories.json"
    );

  const clusters =
    readLegacyArray<LiveCluster>(
      "clusters.json"
    );

  const runs =
    readLegacyArray<DiscoveryRun>(
      "runs.json"
    );

  const drafts =
    readLegacyArray<EditorialDraft>(
      "drafts.json"
    );

  const articles =
    readLegacyArray<Article>(
      "published.json"
    );


  database.exec(
    "BEGIN IMMEDIATE"
  );


  try {

    for (
      const story
      of stories
    ) {

      upsertStoryInternal(
        story
      );
    }


    for (
      const cluster
      of clusters
    ) {

      upsertClusterInternal(
        cluster
      );
    }


    for (
      const run
      of runs
    ) {

      upsertRunInternal(
        run
      );
    }


    for (
      const draft
      of drafts
    ) {

      upsertDraftInternal(
        draft
      );
    }


    for (
      const article
      of articles
    ) {

      upsertArticleInternal(
        article
      );
    }


    database
      .prepare(`
        INSERT INTO schema_meta (
          key,
          value
        )
        VALUES (
          'legacy_json_migrated',
          '1'
        )

        ON CONFLICT(key)
        DO UPDATE SET
          value = '1'
      `)
      .run();


    database.exec(
      "COMMIT"
    );

  } catch (error) {

    database.exec(
      "ROLLBACK"
    );

    throw error;
  }
}


export function loadStoriesSync() {

  ensureLegacyMigration();

  const database =
    getLocalDatabase();

  const rows =
    database
      .prepare(`
        SELECT payload_json
        FROM raw_stories
        ORDER BY discovered_at DESC
        LIMIT 5000
      `)
      .all() as Array<{
        payload_json: string;
      }>;


  return rows
    .map(
      row =>
        parseJson<
          LiveStory | null
        >(
          row.payload_json,
          null
        )
    )
    .filter(
      (
        item
      ): item is LiveStory =>
        item !== null
    );
}


export function saveStoriesSync(
  stories: LiveStory[]
) {

  ensureLegacyMigration();

  const database =
    getLocalDatabase();

  database.exec(
    "BEGIN IMMEDIATE"
  );

  try {

    for (
      const story
      of stories
    ) {

      upsertStoryInternal(
        story
      );
    }

    database.exec(
      "COMMIT"
    );

  } catch (error) {

    database.exec(
      "ROLLBACK"
    );

    throw error;
  }
}


export function loadClustersSync() {

  ensureLegacyMigration();

  const database =
    getLocalDatabase();

  const rows =
    database
      .prepare(`
        SELECT payload_json
        FROM story_clusters
        ORDER BY updated_at DESC
        LIMIT 5000
      `)
      .all() as Array<{
        payload_json: string;
      }>;


  return rows
    .map(
      row =>
        parseJson<
          LiveCluster | null
        >(
          row.payload_json,
          null
        )
    )
    .filter(
      (
        item
      ): item is LiveCluster =>
        item !== null
    );
}


export function saveClustersSync(
  clusters: LiveCluster[]
) {

  ensureLegacyMigration();

  const database =
    getLocalDatabase();

  database.exec(
    "BEGIN IMMEDIATE"
  );

  try {

    for (
      const cluster
      of clusters
    ) {

      upsertClusterInternal(
        cluster
      );
    }

    database.exec(
      "COMMIT"
    );

  } catch (error) {

    database.exec(
      "ROLLBACK"
    );

    throw error;
  }
}


export function loadRunsSync() {

  ensureLegacyMigration();

  const database =
    getLocalDatabase();

  const rows =
    database
      .prepare(`
        SELECT payload_json
        FROM discovery_runs
        ORDER BY started_at DESC
        LIMIT 100
      `)
      .all() as Array<{
        payload_json: string;
      }>;


  return rows
    .map(
      row =>
        parseJson<
          DiscoveryRun | null
        >(
          row.payload_json,
          null
        )
    )
    .filter(
      (
        item
      ): item is DiscoveryRun =>
        item !== null
    );
}


export function saveRunsSync(
  runs: DiscoveryRun[]
) {

  ensureLegacyMigration();

  const database =
    getLocalDatabase();

  database.exec(
    "BEGIN IMMEDIATE"
  );

  try {

    for (
      const run
      of runs.slice(
        0,
        100
      )
    ) {

      upsertRunInternal(
        run
      );
    }

    database.exec(
      "COMMIT"
    );

  } catch (error) {

    database.exec(
      "ROLLBACK"
    );

    throw error;
  }
}


export function appendRunSync(
  run: DiscoveryRun
) {

  ensureLegacyMigration();

  upsertRunInternal(
    run
  );
}


export function loadDraftsSync() {

  ensureLegacyMigration();

  const database =
    getLocalDatabase();

  const rows =
    database
      .prepare(`
        SELECT payload_json
        FROM editorial_drafts
        ORDER BY created_at DESC
        LIMIT 250
      `)
      .all() as Array<{
        payload_json: string;
      }>;


  return rows
    .map(
      row =>
        parseJson<
          EditorialDraft | null
        >(
          row.payload_json,
          null
        )
    )
    .filter(
      (
        item
      ): item is EditorialDraft =>
        item !== null
    );
}


export function saveDraftSync(
  draft: EditorialDraft
) {

  ensureLegacyMigration();

  upsertDraftInternal(
    draft
  );
}


export function findDraftByClusterSync(
  clusterId: string
) {

  ensureLegacyMigration();

  const database =
    getLocalDatabase();

  const row =
    database
      .prepare(`
        SELECT payload_json
        FROM editorial_drafts
        WHERE cluster_id = ?
        LIMIT 1
      `)
      .get(
        clusterId
      ) as
      | {
          payload_json: string;
        }
      | undefined;


  if (!row) {

    return undefined;
  }


  return parseJson<
    EditorialDraft | undefined
  >(
    row.payload_json,
    undefined
  );
}


export function loadPublishedArticlesSync() {

  ensureLegacyMigration();

  const database =
    getLocalDatabase();

  const rows =
    database
      .prepare(`
        SELECT payload_json
        FROM articles
        WHERE status = 'published'
        ORDER BY
          COALESCE(
            published_at,
            created_at
          ) DESC
      `)
      .all() as Array<{
        payload_json: string;
      }>;


  return rows
    .map(
      row =>
        parseJson<
          Article | null
        >(
          row.payload_json,
          null
        )
    )
    .filter(
      (
        item
      ): item is Article =>
        item !== null
    );
}


export function savePublishedArticleSync(
  article: Article
) {

  ensureLegacyMigration();

  upsertArticleInternal(
    article
  );
}


export function getLocalDatabaseCountsSync() {

  ensureLegacyMigration();

  const database =
    getLocalDatabase();


  function count(
    table:
      | "sources"
      | "raw_stories"
      | "story_clusters"
      | "facts"
      | "editorial_drafts"
      | "articles"
      | "discovery_runs"
      | "scrape_logs"
  ) {

    const row =
      database
        .prepare(
          `SELECT COUNT(*) AS total FROM ${table}`
        )
        .get() as {
          total:
            number |
            bigint;
        };

    return Number(
      row.total
    );
  }


  return {

    sources:
      count(
        "sources"
      ),

    stories:
      count(
        "raw_stories"
      ),

    clusters:
      count(
        "story_clusters"
      ),

    facts:
      count(
        "facts"
      ),

    drafts:
      count(
        "editorial_drafts"
      ),

    articles:
      count(
        "articles"
      ),

    runs:
      count(
        "discovery_runs"
      ),

    logs:
      count(
        "scrape_logs"
      )
  };
}