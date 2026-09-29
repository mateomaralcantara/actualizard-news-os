create extension if not exists pgcrypto;
create extension if not exists vector;

create table if not exists sources (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  url text not null,
  domain text not null,
  type text not null check (type in ('rss','html','api')),
  country text,
  language text default 'es',
  trust_score int default 70,
  active boolean default true,
  created_at timestamptz default now()
);

create table if not exists raw_stories (
  id uuid primary key default gen_random_uuid(),
  source_id uuid references sources(id) on delete set null,
  url text unique not null,
  title text not null,
  summary text,
  body text,
  image_url text,
  published_at timestamptz,
  discovered_at timestamptz default now(),
  embedding vector(1536)
);

create table if not exists story_clusters (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  confidence numeric default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists cluster_stories (
  cluster_id uuid references story_clusters(id) on delete cascade,
  story_id uuid references raw_stories(id) on delete cascade,
  primary key (cluster_id, story_id)
);

create table if not exists articles (
  id uuid primary key default gen_random_uuid(),
  cluster_id uuid references story_clusters(id) on delete set null,
  slug text unique not null,
  title text not null,
  dek text,
  category text,
  author text,
  status text default 'draft',
  confidence numeric default 0,
  hero_image text,
  blocks jsonb default '[]'::jsonb,
  scheduled_for timestamptz,
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists video_jobs (
  id uuid primary key default gen_random_uuid(),
  article_id uuid references articles(id) on delete cascade,
  format text not null,
  status text default 'queued',
  script text,
  output_url text,
  created_at timestamptz default now()
);
