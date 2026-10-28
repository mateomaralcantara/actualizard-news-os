"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type ArticleComment = {
  id: string;
  author_name: string;
  content: string;
  parent_id: string | null;
  created_at: string;
};

type CommentsPayload = {
  comments?: ArticleComment[];
  error?: string;
  available?: boolean;
};

function readableDate(date: string) {
  return new Intl.DateTimeFormat("es-DO", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(date));
}

export function ArticleComments({ slug }: { slug: string }) {
  const [comments, setComments] = useState<ArticleComment[]>([]);
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [replyTo, setReplyTo] = useState<ArticleComment | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [available, setAvailable] = useState(true);
  const [notice, setNotice] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const endpoint = "/api/comments/" + encodeURIComponent(slug);

  const refresh = useCallback(async () => {
    try {
      const response = await fetch(endpoint, { cache: "no-store" });
      const data = await response.json() as CommentsPayload;
      if (!response.ok) {
        setAvailable(false);
        setNotice("Los comentarios todavía no están disponibles. Inténtalo más tarde.");
        return;
      }
      setAvailable(true);
      setComments(data.comments ?? []);
    } catch {
      setAvailable(false);
      setNotice("No se pudieron cargar los comentarios en este momento.");
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => { void refresh(); }, [refresh]);

  const ordered = useMemo(() => {
    const byId = new Map(comments.map((comment) => [comment.id, comment]));
    const children = new Map<string, ArticleComment[]>();
    const rootComments: ArticleComment[] = [];

    for (const comment of comments) {
      if (comment.parent_id && comment.parent_id !== comment.id && byId.has(comment.parent_id)) {
        const replies = children.get(comment.parent_id) || [];
        replies.push(comment);
        children.set(comment.parent_id, replies);
      } else {
        rootComments.push(comment);
      }
    }

    const byTime = (a: ArticleComment, b: ArticleComment) =>
      a.created_at.localeCompare(b.created_at);
    rootComments.sort((a, b) => -byTime(a, b));
    for (const replies of children.values()) replies.sort(byTime);

    const result: Array<{ comment: ArticleComment; depth: number }> = [];
    const visited = new Set<string>();
    function walk(comment: ArticleComment, depth: number) {
      if (visited.has(comment.id)) return;
      visited.add(comment.id);
      result.push({ comment, depth: Math.min(depth, 3) });
      for (const reply of children.get(comment.id) || []) walk(reply, depth + 1);
    }
    rootComments.forEach((comment) => walk(comment, 0));
    comments.forEach((comment) => walk(comment, 0));
    return result;
  }, [comments]);

  function respondTo(comment: ArticleComment) {
    setReplyTo(comment);
    setNotice("");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.setTimeout(() => textareaRef.current?.focus(), 100);
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending || !available) return;
    setSending(true);
    setNotice("");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author_name: author.trim(),
          content: body.trim(),
          parent_id: replyTo?.id ?? null,
          website: ""
        })
      });
      const result = await response.json() as { error?: string };
      if (!response.ok) {
        setNotice(result.error || "No se pudo publicar. Revisa el comentario e inténtalo otra vez.");
        return;
      }
      setBody("");
      setReplyTo(null);
      setNotice("Tu comentario se publicó correctamente.");
      await refresh();
    } catch {
      setNotice("No se pudo enviar el comentario. Comprueba tu conexión.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="article-comments" id="comentarios" aria-labelledby="article-comments-heading">
      <div className="article-comments-topline">
        <div>
          <span className="eyebrow">Tu voz cuenta</span>
          <h2 id="article-comments-heading">Comentarios y respuestas</h2>
        </div>
        <span className="article-comments-count">
          {comments.length} {comments.length === 1 ? "comentario" : "comentarios"}
        </span>
      </div>
      <p className="article-comments-intro">
        Comparte tu opinión y conversa con respeto. Los comentarios se publican bajo la responsabilidad de sus autores.
      </p>

      {loading ? <p className="meta" role="status">Cargando conversación…</p> : null}

      {!loading && !available ? (
        <p className="article-comments-alert" role="status">
          {notice || "Los comentarios estarán disponibles próximamente."}
        </p>
      ) : null}

      {available && !loading ? (
        <>
          <form className="article-comments-form" ref={formRef} onSubmit={submit}>
            <h3>{replyTo ? "Escribe tu respuesta" : "Participa en la conversación"}</h3>
            {replyTo ? (
              <div className="article-comments-reply-target">
                Respondiendo a <strong>{replyTo.author_name}</strong>
                <button type="button" onClick={() => setReplyTo(null)}>Cancelar</button>
              </div>
            ) : null}
            <label htmlFor="comment-author">Tu nombre</label>
            <input
              id="comment-author"
              type="text"
              autoComplete="name"
              minLength={2}
              maxLength={60}
              placeholder="Cómo quieres aparecer"
              value={author}
              onChange={(event) => setAuthor(event.target.value)}
              required
            />
            <label htmlFor="comment-body">Comentario</label>
            <textarea
              id="comment-body"
              ref={textareaRef}
              minLength={5}
              maxLength={1500}
              rows={4}
              placeholder="Escribe aquí tu opinión, tu mensaje de apoyo o tu respuesta…"
              value={body}
              onChange={(event) => setBody(event.target.value)}
              required
            />
            <p className="article-comments-hint">De 5 a 1,500 caracteres. No incluyas enlaces ni datos personales.</p>
            <button type="submit" disabled={sending || author.trim().length < 2 || body.trim().length < 5} className="article-comments-submit">
              {sending ? "Publicando…" : replyTo ? "Publicar respuesta" : "Publicar comentario"}
            </button>
            {notice ? <p role="status" className="article-comments-notice">{notice}</p> : null}
          </form>

          <div className="article-comments-list" aria-live="polite">
            {ordered.length === 0 ? (
              <p className="article-comments-empty">Aún no hay comentarios. Tu mensaje puede iniciar la conversación.</p>
            ) : (
              ordered.map(({ comment, depth }) => (
                <article
                  className="article-comment"
                  key={comment.id}
                  style={{ "--thread-depth": depth } as React.CSSProperties}
                >
                  <div className="article-comment-avatar" aria-hidden="true">
                    {comment.author_name.trim().charAt(0).toUpperCase()}
                  </div>
                  <div className="article-comment-main">
                    <div className="article-comment-meta">
                      <strong>{comment.author_name}</strong>
                      <time dateTime={comment.created_at}>{readableDate(comment.created_at)}</time>
                    </div>
                    <p>{comment.content}</p>
                    <button
                      className="article-comments-answer"
                      type="button"
                      onClick={() => respondTo(comment)}
                    >Responder</button>
                  </div>
                </article>
              ))
            )}
          </div>
        </>
      ) : null}
    </section>
  );
}
