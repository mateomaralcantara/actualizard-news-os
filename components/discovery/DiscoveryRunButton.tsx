"use client";

import {
  useState
} from "react";

export function DiscoveryRunButton() {
  const [status, setStatus] =
    useState("");

  const [running, setRunning] =
    useState(false);

  async function runDiscovery() {
    setRunning(true);

    setStatus(
      "Escaneando fuentes reales..."
    );

    try {
      const response =
        await fetch(
          "/api/discovery/run",
          {
            method: "POST"
          }
        );

      const result =
        await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ||
          "Discovery Engine fallo."
        );
      }

      setStatus(
        `${result.run.storiesAdded} nuevas · ${result.clusters} clusters · ${result.run.duplicatesRejected} duplicadas`
      );

      setTimeout(
        () => {
          window.location.reload();
        },
        900
      );

    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : String(error)
      );

    } finally {
      setRunning(false);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 12
      }}
    >
      <button
        type="button"
        className="btn"
        disabled={running}
        onClick={runDiscovery}
      >
        {
          running
            ? "Escaneando Internet..."
            : "Ejecutar Discovery Engine"
        }
      </button>

      {
        status && (
          <span className="meta">
            {status}
          </span>
        )
      }
    </div>
  );
}