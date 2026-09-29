import "server-only";

import fs from "node:fs";
import path from "node:path";

import {
  DatabaseSync
} from "node:sqlite";


const globalDatabase =
  globalThis as unknown as {
    __actualizardSqlite?:
      DatabaseSync;

    __actualizardSqliteInitialized?:
      boolean;
  };


export function getActualizardDatabasePath() {

  const configured =
    process.env
      .ACTUALIZARD_DB_PATH ||
    "data/actualizard.sqlite";

  if (
    path.isAbsolute(
      configured
    )
  ) {
    return configured;
  }

  return path.join(
    process.cwd(),
    configured
  );
}


function initializeSchema(
  database: DatabaseSync
) {

  database.exec(`
    PRAGMA foreign_keys = ON;
    PRAGMA journal_mode = WAL;
    PRAGMA synchronous = NORMAL;
    PRAGMA busy_timeout = 5000;

    CREATE TABLE IF NOT EXISTS schema_meta (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS sources (
      id TEXT PRIMARY KEY,

      name TEXT NOT NULL,

      domain TEXT,

      category TEXT NOT NULL
        DEFAULT 'Actualidad',

      official INTEGER NOT NULL
        DEFAULT 0,

      trust_score INTEGER NOT NULL
        DEFAULT 70,

      enabled INTEGER NOT NULL
        DEFAULT 1,

      created_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

      updated_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP
    );


    CREATE TABLE IF NOT EXISTS discovery_runs (
      id TEXT PRIMARY KEY,

      started_at TEXT NOT NULL,

      completed_at TEXT,

      sources_checked INTEGER NOT NULL
        DEFAULT 0,

      candidates_found INTEGER NOT NULL
        DEFAULT 0,

      stories_added INTEGER NOT NULL
        DEFAULT 0,

      duplicates_rejected INTEGER NOT NULL
        DEFAULT 0,

      cluster_count INTEGER NOT NULL
        DEFAULT 0,

      errors_json TEXT NOT NULL
        DEFAULT '[]',

      payload_json TEXT NOT NULL,

      created_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP
    );


    CREATE TABLE IF NOT EXISTS raw_stories (
      id TEXT PRIMARY KEY,

      source_id TEXT NOT NULL,

      source_name TEXT NOT NULL,

      source_trust INTEGER NOT NULL
        DEFAULT 70,

      official_source INTEGER NOT NULL
        DEFAULT 0,

      category TEXT NOT NULL
        DEFAULT 'Actualidad',

      url TEXT NOT NULL,

      canonical_url TEXT NOT NULL
        UNIQUE,

      title TEXT NOT NULL,

      summary TEXT,

      body TEXT,

      author TEXT,

      image_url TEXT,

      video_url TEXT,

      published_at TEXT,

      discovered_at TEXT NOT NULL,

      title_hash TEXT,

      body_hash TEXT,

      extraction_method TEXT,

      payload_json TEXT NOT NULL,

      created_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

      updated_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP
    );


    CREATE INDEX IF NOT EXISTS
      idx_raw_stories_source
    ON raw_stories(source_id);


    CREATE INDEX IF NOT EXISTS
      idx_raw_stories_category
    ON raw_stories(category);


    CREATE INDEX IF NOT EXISTS
      idx_raw_stories_discovered
    ON raw_stories(discovered_at DESC);


    CREATE INDEX IF NOT EXISTS
      idx_raw_stories_title_hash
    ON raw_stories(title_hash);


    CREATE INDEX IF NOT EXISTS
      idx_raw_stories_body_hash
    ON raw_stories(body_hash);


    CREATE TABLE IF NOT EXISTS story_clusters (
      id TEXT PRIMARY KEY,

      title TEXT NOT NULL,

      category TEXT NOT NULL
        DEFAULT 'Actualidad',

      confidence INTEGER NOT NULL
        DEFAULT 0,

      official_confirmation INTEGER NOT NULL
        DEFAULT 0,

      source_count INTEGER NOT NULL
        DEFAULT 0,

      facts_json TEXT NOT NULL
        DEFAULT '{}',

      payload_json TEXT NOT NULL,

      created_at TEXT NOT NULL,

      updated_at TEXT NOT NULL
    );


    CREATE INDEX IF NOT EXISTS
      idx_clusters_updated
    ON story_clusters(updated_at DESC);


    CREATE INDEX IF NOT EXISTS
      idx_clusters_confidence
    ON story_clusters(confidence DESC);


    CREATE INDEX IF NOT EXISTS
      idx_clusters_category
    ON story_clusters(category);


    CREATE TABLE IF NOT EXISTS cluster_members (
      cluster_id TEXT NOT NULL,

      story_id TEXT NOT NULL,

      similarity REAL,

      created_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

      PRIMARY KEY (
        cluster_id,
        story_id
      ),

      FOREIGN KEY (
        cluster_id
      )
      REFERENCES story_clusters(id)
      ON DELETE CASCADE,

      FOREIGN KEY (
        story_id
      )
      REFERENCES raw_stories(id)
      ON DELETE CASCADE
    );


    CREATE TABLE IF NOT EXISTS facts (
      id INTEGER PRIMARY KEY
        AUTOINCREMENT,

      cluster_id TEXT NOT NULL,

      fact_type TEXT NOT NULL,

      fact_value TEXT NOT NULL,

      created_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

      FOREIGN KEY (
        cluster_id
      )
      REFERENCES story_clusters(id)
      ON DELETE CASCADE
    );


    CREATE INDEX IF NOT EXISTS
      idx_facts_cluster
    ON facts(cluster_id);


    CREATE TABLE IF NOT EXISTS editorial_drafts (
      id TEXT PRIMARY KEY,

      cluster_id TEXT NOT NULL
        UNIQUE,

      title TEXT NOT NULL,

      generated_by TEXT NOT NULL,

      confidence INTEGER NOT NULL
        DEFAULT 0,

      payload_json TEXT NOT NULL,

      created_at TEXT NOT NULL,

      updated_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP
    );


    CREATE TABLE IF NOT EXISTS articles (
      id TEXT PRIMARY KEY,

      slug TEXT NOT NULL
        UNIQUE,

      title TEXT NOT NULL,

      category TEXT NOT NULL
        DEFAULT 'Actualidad',

      author TEXT,

      hero_image_url TEXT,

      status TEXT NOT NULL
        DEFAULT 'draft',

      confidence INTEGER NOT NULL
        DEFAULT 0,

      source_count INTEGER NOT NULL
        DEFAULT 0,

      published_at TEXT,

      created_at TEXT NOT NULL,

      updated_at TEXT NOT NULL,

      payload_json TEXT NOT NULL
    );


    CREATE INDEX IF NOT EXISTS
      idx_articles_status
    ON articles(status);


    CREATE INDEX IF NOT EXISTS
      idx_articles_category
    ON articles(category);


    CREATE INDEX IF NOT EXISTS
      idx_articles_published
    ON articles(published_at DESC);


    CREATE TABLE IF NOT EXISTS article_sources (
      article_id TEXT NOT NULL,

      story_id TEXT NOT NULL,

      created_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

      PRIMARY KEY (
        article_id,
        story_id
      )
    );


    CREATE TABLE IF NOT EXISTS media_assets (
      id INTEGER PRIMARY KEY
        AUTOINCREMENT,

      article_id TEXT,

      story_id TEXT,

      media_type TEXT NOT NULL,

      url TEXT NOT NULL,

      source_name TEXT,

      attribution TEXT,

      approved INTEGER NOT NULL
        DEFAULT 0,

      created_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP
    );


    CREATE TABLE IF NOT EXISTS publication_queue (
      id INTEGER PRIMARY KEY
        AUTOINCREMENT,

      article_id TEXT NOT NULL,

      scheduled_for TEXT,

      status TEXT NOT NULL
        DEFAULT 'pending',

      attempts INTEGER NOT NULL
        DEFAULT 0,

      last_error TEXT,

      created_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP,

      updated_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP
    );


    CREATE TABLE IF NOT EXISTS scrape_logs (
      id INTEGER PRIMARY KEY
        AUTOINCREMENT,

      level TEXT NOT NULL
        DEFAULT 'info',

      source_id TEXT,

      run_id TEXT,

      event TEXT NOT NULL,

      url TEXT,

      message TEXT,

      payload_json TEXT,

      created_at TEXT NOT NULL
        DEFAULT CURRENT_TIMESTAMP
    );


    CREATE INDEX IF NOT EXISTS
      idx_scrape_logs_created
    ON scrape_logs(created_at DESC);
  `);


  /*
   * Full Text Search.
   * Si la compilacion SQLite incluye FTS5,
   * tendremos buscador periodistico local.
   */

  try {

    database.exec(`
      CREATE VIRTUAL TABLE IF NOT EXISTS
        article_search
      USING fts5(
        article_id UNINDEXED,
        title,
        dek,
        content,
        tags,
        tokenize='unicode61 remove_diacritics 2'
      );
    `);

  } catch {

    /*
     * FTS5 no es obligatorio para
     * que Actualizard funcione.
     */
  }


  database
    .prepare(`
      INSERT INTO schema_meta (
        key,
        value
      )
      VALUES (
        'schema_version',
        '1'
      )
      ON CONFLICT(key)
      DO UPDATE SET
        value = excluded.value
    `)
    .run();
}


export function getLocalDatabase() {

  if (
    globalDatabase
      .__actualizardSqlite
  ) {

    return globalDatabase
      .__actualizardSqlite;
  }


  const databasePath =
    getActualizardDatabasePath();


  fs.mkdirSync(
    path.dirname(
      databasePath
    ),
    {
      recursive: true
    }
  );


  const database =
    new DatabaseSync(
      databasePath,
      {
        timeout: 5000
      }
    );


  initializeSchema(
    database
  );


  globalDatabase
    .__actualizardSqlite =
    database;


  globalDatabase
    .__actualizardSqliteInitialized =
    true;


  return database;
}


export function localDatabaseExists() {

  return fs.existsSync(
    getActualizardDatabasePath()
  );
}