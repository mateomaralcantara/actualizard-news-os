import type { ReactNode } from "react";
import type { ContentBlock } from "@/lib/types";

function renderInlineEditorial(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|==[^=]+==)/g).filter(Boolean);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("==") && part.endsWith("==")) {
      return (
        <mark key={index} className="editorial-highlight">
          {part.slice(2, -2)}
        </mark>
      );
    }

    return <span key={index}>{part}</span>;
  });
}

export function ArticleBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="article-body">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return <p key={index}>{renderInlineEditorial(block.text)}</p>;
        }

        if (block.type === "image") {
          return (
            <figure key={index} className="block">
              <img
                src={block.url}
                alt={block.caption ?? ""}
                style={{ borderRadius: 18 }}
              />
              {block.caption && (
                <figcaption className="meta" style={{ marginTop: 8 }}>
                  {block.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        if (block.type === "video") {
          return (
            <div key={index} className="block">
              <div
                style={{
                  aspectRatio: "16/9",
                  background: "#000",
                  borderRadius: 18,
                  overflow: "hidden"
                }}
              >
                <iframe
                  src={block.url}
                  title={block.caption ?? "Video"}
                  style={{ width: "100%", height: "100%", border: 0 }}
                  allowFullScreen
                />
              </div>
              {block.caption && <p className="meta">{block.caption}</p>}
            </div>
          );
        }

        if (block.type === "quote") {
          return (
            <blockquote key={index} className="quote">
              “{renderInlineEditorial(block.text)}”
              {block.attribution && (
                <div className="meta" style={{ marginTop: 10 }}>
                  — {block.attribution}
                </div>
              )}
            </blockquote>
          );
        }

        if (block.type === "sources") {
          return (
            <section key={index} className="card card-pad block article-sources">
              <strong className="article-sources-title">Fuentes consultadas</strong>
              <ul>
                {block.items.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          );
        }

        return (
          <ul key={index} className="article-bullets">
            {block.items.map((item) => (
              <li key={item}>{renderInlineEditorial(item)}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}
