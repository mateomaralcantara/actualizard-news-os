"use client";

import {
  useState
} from "react";

export function ClusterActions({
  clusterId,
  confidence
}: {
  clusterId: string;
  confidence: number;
}) {
  const [message, setMessage] =
    useState("");

  const [working, setWorking] =
    useState(false);

  async function generateDraft() {
    setWorking(true);

    setMessage(
      "Generando borrador editorial..."
    );

    try {
      const response =
        await fetch(
          "/api/editorial/live-draft",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify({
                clusterId
              })
          }
        );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
          "No se pudo generar el borrador."
        );
      }

      setMessage(
        "Borrador editorial generado."
      );

      setTimeout(
        () => {
          window.location.reload();
        },
        700
      );

    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : String(error)
      );

    } finally {
      setWorking(false);
    }
  }

  async function publish() {
    const confirmed =
      window.confirm(
        `Esta historia tiene ${confidence}% de confianza editorial. ¿Publicarla en Actualizard?`
      );

    if (!confirmed) {
      return;
    }

    setWorking(true);

    setMessage(
      "Publicando noticia..."
    );

    try {
      const response =
        await fetch(
          "/api/editorial/live-publish",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json"
            },

            body:
              JSON.stringify({
                clusterId
              })
          }
        );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
          "No se pudo publicar."
        );
      }

      setMessage(
        `PUBLICADO: ${result.title}`
      );

    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : String(error)
      );

    } finally {
      setWorking(false);
    }
  }

  return (
    <div className="toolbar">
      <button
        type="button"
        className="btn secondary"
        disabled={working}
        onClick={generateDraft}
      >
        Generar borrador
      </button>

      <button
        type="button"
        className="btn"
        disabled={working}
        onClick={publish}
      >
        Publicar noticia
      </button>

      {
        message && (
          <span className="meta">
            {message}
          </span>
        )
      }
    </div>
  );
}