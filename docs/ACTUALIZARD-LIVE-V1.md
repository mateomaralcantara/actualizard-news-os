# ACTUALIZARD LIVE V1

FUENTES
↓
ROBOTS.TXT
↓
DISCOVERY
↓
EXTRACCION DIRECTA
↓
FIRECRAWL FALLBACK
↓
NORMALIZACION
↓
PERSISTENCIA
↓
DEDUPLICACION
↓
STORY CLUSTERING
↓
FACT EXTRACTION
↓
CONFIDENCE ENGINE
↓
EDITORIAL DOSSIER
↓
AI NEWSROOM
↓
REVISION HUMANA
↓
PUBLICACION
↓
ACTUALIZARD

## Interfaces

Portada:
http://localhost:3000

Command Center:
http://localhost:3000/admin

Discovery:
http://localhost:3000/admin/discovery

Estado:
http://localhost:3000/api/discovery/state

Clusters:
http://localhost:3000/api/discovery/clusters

## Datos persistentes

data/runtime/stories.json
data/runtime/clusters.json
data/runtime/runs.json
data/runtime/drafts.json
data/runtime/published.json

## Worker

.\scripts\RUN-DISCOVERY-WORKER.ps1

## Test

.\scripts\TEST-DISCOVERY.ps1

## Firecrawl

Agregar FIRECRAWL_API_KEY en:

.env.local

Sin Firecrawl se utiliza extracción directa HTML/Cheerio.

## IA

Agregar OPENAI_API_KEY en:

.env.local

Sin API de IA el sistema crea un borrador basado directamente en
la evidencia recopilada.

## Publicación

V1 funciona en modo review-first.

Nada se publica automáticamente.

Discovery puede operar solo,
pero la publicación requiere acción editorial.