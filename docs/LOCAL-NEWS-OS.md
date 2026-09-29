# ACTUALIZARD LOCAL NEWS OS

Actualizard trabaja completamente con una base de datos SQLite local.

## FLUJO

Internet
↓
Discovery Engine
↓
Scraping HTTP + Cheerio
↓
Normalizacion
↓
SQLite
↓
Deduplicacion
↓
Story Clustering
↓
Fact Matrix
↓
Editorial Draft
↓
Revision
↓
Articles
↓
Actualizard

## BASE DE DATOS

data/actualizard.sqlite

## ARCHIVOS AUXILIARES SQLITE

data/actualizard.sqlite-wal
data/actualizard.sqlite-shm

Son archivos normales del modo WAL de SQLite.

## MOTOR

Node.js node:sqlite

No necesita:

- Supabase
- PostgreSQL
- MySQL
- Docker
- Redis
- Firecrawl

## IA

Actualmente la generacion editorial utiliza el fallback local cuando no existe OPENAI_API_KEY.

Una siguiente fase puede conectar Ollama para IA 100% local.

## TABLAS

schema_meta
sources
discovery_runs
raw_stories
story_clusters
cluster_members
facts
editorial_drafts
articles
article_sources
media_assets
publication_queue
scrape_logs

## MIGRACION

En el primer acceso a Repository:

data/runtime/stories.json
data/runtime/clusters.json
data/runtime/runs.json
data/runtime/drafts.json
data/runtime/published.json

son importados automaticamente a SQLite.

Despues SQLite pasa a ser la fuente de verdad.

## STATUS

http://localhost:3000/api/database/status

## DISCOVERY

http://localhost:3000/admin/discovery

## TEST

.\scripts\TEST-LOCAL-NEWS-ENGINE.ps1

## BACKUP

Detener el servidor primero y ejecutar:

.\scripts\BACKUP-LOCAL-DATABASE.ps1