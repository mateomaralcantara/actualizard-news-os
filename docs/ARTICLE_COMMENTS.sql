-- ACTUALIZARD: Comentarios por noticia con respuestas.
-- Guardados en Supabase; nunca en el SQLite temporal de Vercel.
-- Si la tabla no existe, aplica este archivo al proyecto Supabase exclusivo de Actualizard.
create extension if not exists pgcrypto;

create table if not exists public.article_comments (
  id uuid primary key default gen_random_uuid(),
  article_slug text not null check (char_length(article_slug) between 1 and 240),
  parent_id uuid,
  author_name text not null check (char_length(btrim(author_name)) between 2 and 60),
  content text not null check (char_length(btrim(content)) between 5 and 1500),
  ip_hash text not null check (ip_hash ~ '^[0-9a-f]{64}$'),
  status text not null default 'approved'
    check (status in ('approved', 'hidden')),
  created_at timestamptz not null default now(),
  unique (id, article_slug),
  constraint article_comment_parent_same_article
    foreign key (parent_id, article_slug)
    references public.article_comments(id, article_slug)
    on delete cascade
);

create index if not exists idx_article_comments_slug_created
  on public.article_comments (article_slug, created_at desc);
create index if not exists idx_article_comments_ip_created
  on public.article_comments (ip_hash, created_at desc);
create index if not exists idx_article_comments_parent
  on public.article_comments (parent_id);

-- Solo el servidor de Actualizard usa la clave secreta. El navegador
-- no tiene permiso directo para leer/modificar comentarios.
alter table public.article_comments enable row level security;
revoke all on table public.article_comments from public, anon, authenticated;
grant select, insert, update, delete on table public.article_comments to service_role;
-- Sin policies públicas; la única entrada es la API que valida el artículo,
-- aplica límites y devuelve únicamente comentarios aprobados.
