begin;

-- ===================================================================
-- EXTENSIONS
-- ===================================================================

create extension if not exists pgcrypto;

create extension if not exists vector
with schema extensions;


-- ===================================================================
-- UPDATED_AT
-- ===================================================================

create or replace function public.actualizard_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;


-- ===================================================================
-- SOURCES
-- ===================================================================

create table if not exists public.sources (
  id uuid primary key default gen_random_uuid(),

  external_id text not null unique,

  name text not null,
  domain text not null,

  homepage_url text not null,
  feed_url text,

  country text not null default 'DO',
  language text not null default 'es',

  category text not null default 'Actualidad',

  source_type text not null default 'html'
    check (
      source_type in (
        'rss',
        'html',
        'api',
        'firecrawl',
        'browser'
      )
    ),

  official boolean not null default false,

  trust_score smallint not null default 70
    check (
      trust_score >= 0
      and trust_score <= 100
    ),

  enabled boolean not null default true,

  crawl_interval_seconds integer not null default 300
    check (
      crawl_interval_seconds >= 60
    ),

  last_checked_at timestamptz,
  last_success_at timestamptz,

  failure_count integer not null default 0,

  robots_allowed boolean,
  robots_checked_at timestamptz,

  config jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


create index if not exists idx_sources_enabled
on public.sources(enabled);

create index if not exists idx_sources_category
on public.sources(category);


-- ===================================================================
-- SCRAPE RUNS
-- ===================================================================

create table if not exists public.scrape_runs (
  id uuid primary key default gen_random_uuid(),

  external_id text unique,

  status text not null default 'running'
    check (
      status in (
        'running',
        'completed',
        'partial',
        'failed'
      )
    ),

  started_at timestamptz not null default now(),
  completed_at timestamptz,

  sources_checked integer not null default 0,
  candidates_found integer not null default 0,
  stories_added integer not null default 0,
  duplicates_rejected integer not null default 0,
  cluster_count integer not null default 0,

  errors jsonb not null default '[]'::jsonb,

  created_at timestamptz not null default now()
);


create index if not exists idx_scrape_runs_started
on public.scrape_runs(started_at desc);


-- ===================================================================
-- RAW STORIES
-- ===================================================================

create table if not exists public.raw_stories (
  id uuid primary key default gen_random_uuid(),

  external_id text unique,

  source_id uuid not null
    references public.sources(id)
    on delete cascade,

  url text not null,

  canonical_url text not null unique,

  title text not null,

  summary text,

  body text,

  author text,

  hero_image_url text,
  video_url text,

  published_at timestamptz,
  discovered_at timestamptz not null default now(),

  title_hash text,
  content_hash text,

  extraction_method text
    check (
      extraction_method in (
        'rss',
        'direct',
        'firecrawl',
        'api',
        'browser'
      )
    ),

  language text not null default 'es',

  category text not null default 'Actualidad',

  metadata jsonb not null default '{}'::jsonb,

  embedding extensions.vector(1536),

  status text not null default 'scraped'
    check (
      status in (
        'discovered',
        'scraped',
        'clustered',
        'rejected',
        'archived'
      )
    ),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


create unique index if not exists uq_raw_stories_content_hash
on public.raw_stories(content_hash)
where content_hash is not null;


create index if not exists idx_raw_stories_source
on public.raw_stories(source_id);


create index if not exists idx_raw_stories_published
on public.raw_stories(published_at desc);


create index if not exists idx_raw_stories_discovered
on public.raw_stories(discovered_at desc);


create index if not exists idx_raw_stories_category
on public.raw_stories(category);


create index if not exists idx_raw_stories_embedding_hnsw
on public.raw_stories
using hnsw (
  embedding vector_cosine_ops
);


-- ===================================================================
-- STORY CLUSTERS
-- ===================================================================

create table if not exists public.story_clusters (
  id uuid primary key default gen_random_uuid(),

  external_id text not null unique,

  title text not null,

  category text not null default 'Actualidad',

  confidence integer not null default 0
    check (
      confidence >= 0
      and confidence <= 100
    ),

  official_confirmation boolean not null default false,

  source_count integer not null default 0,

  facts jsonb not null default '{}'::jsonb,

  status text not null default 'active'
    check (
      status in (
        'active',
        'review',
        'approved',
        'published',
        'archived'
      )
    ),

  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


create index if not exists idx_clusters_status
on public.story_clusters(status);

create index if not exists idx_clusters_category
on public.story_clusters(category);

create index if not exists idx_clusters_confidence
on public.story_clusters(confidence desc);


-- ===================================================================
-- CLUSTER MEMBERS
-- ===================================================================

create table if not exists public.cluster_members (
  cluster_id uuid not null
    references public.story_clusters(id)
    on delete cascade,

  raw_story_id uuid not null
    references public.raw_stories(id)
    on delete cascade,

  similarity double precision,

  created_at timestamptz not null default now(),

  primary key (
    cluster_id,
    raw_story_id
  )
);


create index if not exists idx_cluster_members_story
on public.cluster_members(raw_story_id);


-- ===================================================================
-- FACTS
-- ===================================================================

create table if not exists public.facts (
  id uuid primary key default gen_random_uuid(),

  cluster_id uuid not null
    references public.story_clusters(id)
    on delete cascade,

  source_story_id uuid
    references public.raw_stories(id)
    on delete set null,

  subject text,

  predicate text,

  value_text text,

  value_number numeric,

  unit text,

  confidence integer
    check (
      confidence is null
      or (
        confidence >= 0
        and confidence <= 100
      )
    ),

  status text not null default 'observed'
    check (
      status in (
        'observed',
        'confirmed',
        'contradicted',
        'rejected'
      )
    ),

  metadata jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now()
);


create index if not exists idx_facts_cluster
on public.facts(cluster_id);


-- ===================================================================
-- EDITORIAL DRAFTS
-- ===================================================================

create table if not exists public.editorial_drafts (
  id uuid primary key default gen_random_uuid(),

  cluster_id uuid not null
    references public.story_clusters(id)
    on delete cascade,

  version integer not null default 1,

  title text not null,

  dek text,

  paragraphs jsonb not null default '[]'::jsonb,

  bullets jsonb not null default '[]'::jsonb,

  tags text[] not null default '{}'::text[],

  generated_by text not null default 'fallback'
    check (
      generated_by in (
        'ai',
        'fallback',
        'human'
      )
    ),

  status text not null default 'draft'
    check (
      status in (
        'draft',
        'review',
        'approved',
        'rejected'
      )
    ),

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),

  unique (
    cluster_id,
    version
  )
);


-- ===================================================================
-- ARTICLES
-- ===================================================================

create table if not exists public.articles (
  id uuid primary key default gen_random_uuid(),

  external_id text unique,

  cluster_id uuid
    references public.story_clusters(id)
    on delete set null,

  slug text not null unique,

  title text not null,

  dek text,

  category text not null default 'Actualidad',

  author text not null default 'Redacción Actualizard',

  hero_image_url text,

  status text not null default 'draft'
    check (
      status in (
        'draft',
        'review',
        'approved',
        'scheduled',
        'published',
        'updated',
        'archived',
        'rejected'
      )
    ),

  confidence integer not null default 0
    check (
      confidence >= 0
      and confidence <= 100
    ),

  source_count integer not null default 0,

  blocks jsonb not null default '[]'::jsonb,

  tags text[] not null default '{}'::text[],

  seo_title text,
  seo_description text,

  scheduled_at timestamptz,
  published_at timestamptz,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


create index if not exists idx_articles_status
on public.articles(status);

create index if not exists idx_articles_category
on public.articles(category);

create index if not exists idx_articles_published
on public.articles(published_at desc);


-- ===================================================================
-- ARTICLE SOURCES
-- ===================================================================

create table if not exists public.article_sources (
  article_id uuid not null
    references public.articles(id)
    on delete cascade,

  raw_story_id uuid not null
    references public.raw_stories(id)
    on delete cascade,

  used_for_fact boolean not null default true,

  created_at timestamptz not null default now(),

  primary key (
    article_id,
    raw_story_id
  )
);


-- ===================================================================
-- MEDIA ASSETS
-- ===================================================================

create table if not exists public.media_assets (
  id uuid primary key default gen_random_uuid(),

  article_id uuid
    references public.articles(id)
    on delete cascade,

  raw_story_id uuid
    references public.raw_stories(id)
    on delete set null,

  media_type text not null
    check (
      media_type in (
        'image',
        'video',
        'audio',
        'embed',
        'gallery'
      )
    ),

  remote_url text,

  storage_url text,

  source_url text,
  source_name text,

  license text,
  attribution text,

  width integer,
  height integer,

  approved boolean not null default false,

  metadata jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now()
);


-- ===================================================================
-- PUBLICATION QUEUE
-- ===================================================================

create table if not exists public.publication_queue (
  id uuid primary key default gen_random_uuid(),

  article_id uuid not null
    references public.articles(id)
    on delete cascade,

  channel text not null default 'web',

  scheduled_for timestamptz not null,

  status text not null default 'pending'
    check (
      status in (
        'pending',
        'processing',
        'published',
        'failed',
        'cancelled'
      )
    ),

  attempts integer not null default 0,

  last_error text,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);


create index if not exists idx_publication_queue_schedule
on public.publication_queue(
  status,
  scheduled_for
);


-- ===================================================================
-- SCRAPE LOGS
-- ===================================================================

create table if not exists public.scrape_logs (
  id bigint generated always as identity primary key,

  source_id uuid
    references public.sources(id)
    on delete set null,

  run_id uuid
    references public.scrape_runs(id)
    on delete set null,

  level text not null default 'info',

  event text not null,

  url text,

  http_status integer,

  message text,

  metadata jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now()
);


create index if not exists idx_scrape_logs_created
on public.scrape_logs(created_at desc);


-- ===================================================================
-- UPDATED AT TRIGGERS
-- ===================================================================

drop trigger if exists trg_sources_updated_at
on public.sources;

create trigger trg_sources_updated_at
before update
on public.sources
for each row
execute function public.actualizard_set_updated_at();


drop trigger if exists trg_raw_stories_updated_at
on public.raw_stories;

create trigger trg_raw_stories_updated_at
before update
on public.raw_stories
for each row
execute function public.actualizard_set_updated_at();


drop trigger if exists trg_clusters_updated_at
on public.story_clusters;

create trigger trg_clusters_updated_at
before update
on public.story_clusters
for each row
execute function public.actualizard_set_updated_at();


drop trigger if exists trg_drafts_updated_at
on public.editorial_drafts;

create trigger trg_drafts_updated_at
before update
on public.editorial_drafts
for each row
execute function public.actualizard_set_updated_at();


drop trigger if exists trg_articles_updated_at
on public.articles;

create trigger trg_articles_updated_at
before update
on public.articles
for each row
execute function public.actualizard_set_updated_at();


drop trigger if exists trg_queue_updated_at
on public.publication_queue;

create trigger trg_queue_updated_at
before update
on public.publication_queue
for each row
execute function public.actualizard_set_updated_at();


-- ===================================================================
-- VECTOR SEARCH
-- ===================================================================

create or replace function public.match_raw_stories(
  query_embedding extensions.vector(1536),
  match_threshold double precision default 0.78,
  match_count integer default 20
)
returns table (
  id uuid,
  external_id text,
  title text,
  canonical_url text,
  similarity double precision
)
language sql
stable
as $$
  select
    rs.id,
    rs.external_id,
    rs.title,
    rs.canonical_url,
    1 - (
      rs.embedding <=> query_embedding
    ) as similarity
  from public.raw_stories rs
  where
    rs.embedding is not null
    and
    1 - (
      rs.embedding <=> query_embedding
    ) >= match_threshold
  order by
    rs.embedding <=> query_embedding
  limit match_count;
$$;


-- ===================================================================
-- RLS
-- ===================================================================

alter table public.sources enable row level security;
alter table public.scrape_runs enable row level security;
alter table public.raw_stories enable row level security;
alter table public.story_clusters enable row level security;
alter table public.cluster_members enable row level security;
alter table public.facts enable row level security;
alter table public.editorial_drafts enable row level security;
alter table public.articles enable row level security;
alter table public.article_sources enable row level security;
alter table public.media_assets enable row level security;
alter table public.publication_queue enable row level security;
alter table public.scrape_logs enable row level security;


-- No permitir acceso directo anon/authenticated.
-- Actualizard accede mediante el backend con Secret Key.

revoke all
on table
  public.sources,
  public.scrape_runs,
  public.raw_stories,
  public.story_clusters,
  public.cluster_members,
  public.facts,
  public.editorial_drafts,
  public.articles,
  public.article_sources,
  public.media_assets,
  public.publication_queue,
  public.scrape_logs
from anon, authenticated;


-- ===================================================================
-- SOURCE SEED
-- ===================================================================

insert into public.sources (
  external_id,
  name,
  domain,
  homepage_url,
  country,
  language,
  category,
  source_type,
  official,
  trust_score,
  enabled,
  crawl_interval_seconds
)
values

(
  'presidencia-rd',
  'Presidencia de la República Dominicana',
  'presidencia.gob.do',
  'https://presidencia.gob.do/noticias',
  'DO',
  'es',
  'RD',
  'html',
  true,
  98,
  true,
  180
),

(
  'banco-central-rd',
  'Banco Central de la República Dominicana',
  'bancentral.gov.do',
  'https://www.bancentral.gov.do/',
  'DO',
  'es',
  'Geoeconomía',
  'html',
  true,
  98,
  true,
  300
),

(
  'aduanas-rd',
  'Dirección General de Aduanas',
  'aduanas.gob.do',
  'https://www.aduanas.gob.do/noticias/',
  'DO',
  'es',
  'Geoeconomía',
  'html',
  true,
  97,
  true,
  300
),

(
  'noticias-sin',
  'Noticias SIN',
  'noticiassin.com',
  'https://noticiassin.com/seccion/ultima-hora/',
  'DO',
  'es',
  'Última hora',
  'html',
  false,
  86,
  true,
  180
),

(
  'listin-diario',
  'Listín Diario',
  'listindiario.com',
  'https://listindiario.com/',
  'DO',
  'es',
  'Última hora',
  'html',
  false,
  86,
  true,
  300
),

(
  'diario-libre',
  'Diario Libre',
  'diariolibre.com',
  'https://www.diariolibre.com/',
  'DO',
  'es',
  'Última hora',
  'html',
  false,
  86,
  true,
  300
)

on conflict (external_id)
do update set

  name =
    excluded.name,

  domain =
    excluded.domain,

  homepage_url =
    excluded.homepage_url,

  category =
    excluded.category,

  source_type =
    excluded.source_type,

  official =
    excluded.official,

  trust_score =
    excluded.trust_score,

  enabled =
    excluded.enabled,

  crawl_interval_seconds =
    excluded.crawl_interval_seconds;


commit;
