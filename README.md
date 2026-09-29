# Actualizard News OS

MVP funcional de una plataforma editorial AI-first y multimedia.

## Incluye

- Portada moderna
- Página de noticia con bloques de texto, imagen y video
- Dashboard editorial
- API REST interna
- Motor de descubrimiento RSS/HTML
- Normalización y deduplicación
- Clustering básico de historias
- Pipeline de generación editorial por IA
- Scoring de confianza
- Scheduler
- Esqueleto de producción de video
- Integraciones opcionales: Supabase, Firecrawl, Browserbase, Mux, R2, ElevenLabs, Veo

## Arranque rápido en Windows

```powershell
cd "RUTA\actualizard-news-os"
Copy-Item .env.example .env.local
npm install
npm run dev
```

Abrir:

- http://localhost:3000
- http://localhost:3000/admin
- http://localhost:3000/api/health

## Flujo editorial

Fuente -> scraping -> extracción -> normalización -> deduplicación -> cluster -> investigación -> IA -> score -> revisión -> programación -> publicación -> video.

## Producción

Este ZIP es una base ejecutable y extensible. Para un periódico autónomo en producción debes conectar:
- base de datos persistente,
- colas/workflows,
- proveedores reales de scraping,
- autenticación/RBAC,
- almacenamiento,
- proveedores de video,
- APIs sociales y
- reglas legales/editoriales de publicación.
