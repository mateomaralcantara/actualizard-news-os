# Comentarios con respuestas en Actualizard

La sección de comentarios está integrada en todas las páginas de /noticias/[slug].

## Pasos para activar el almacenamiento persistente

1. Crear un proyecto Supabase específico para Actualizard, **no usar los de otros proyectos**.
2. Ejecutar `docs/ARTICLE_COMMENTS.sql` en su SQL Editor.
3. En Vercel, proyecto `actualizard-news-os`, crear estas variables de entorno para Producción:
   - `SUPABASE_URL`: URL del proyecto dedicado.
   - `SUPABASE_SECRET_KEY`: clave secreta del proyecto (o `SUPABASE_SERVICE_ROLE_KEY` heredada).
   - Opcional: `COMMENTS_RATE_LIMIT_SALT` con un valor secreto aleatorio.
4. Desplegar otra vez tras configurar las variables.

## Funcionamiento

- Formulario público con nombre y comentario; no solicita correo ni contraseña.
- Respuestas encadenadas por `parent_id` y vinculadas a la misma noticia.
- Publicación inmediata con filtros de enlaces, límite por IP de 10/hora y 15 segundos entre envíos.
- Solo el servidor utiliza la clave secreta. Las tablas tienen RLS y sin permisos directos de navegador.
- Un administrador puede ocultar mensajes desde la tabla de Supabase: `status = 'hidden'`.
- Sin Supabase configurado se informa que los comentarios están temporalmente no disponibles, sin guardar datos engañosamente en `/tmp`.
- Para campañas con mucho tráfico conviene añadir Turnstile, moderación editorial y paginación completa.

Nota: nunca publicar `SUPABASE_SECRET_KEY` en variables `NEXT_PUBLIC_*`.
