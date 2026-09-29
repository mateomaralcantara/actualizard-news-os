import type { ContentBlock } from "@/lib/types";

export function ArticleBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="article-body">
      {blocks.map((block, index) => {
        if (block.type === "paragraph") return <p key={index}>{block.text}</p>;
        if (block.type === "image") return (
          <figure key={index} className="block">
            <img src={block.url} alt={block.caption ?? ""} style={{borderRadius: 18}} />
            {block.caption && <figcaption className="meta" style={{marginTop: 8}}>{block.caption}</figcaption>}
          </figure>
        );
        if (block.type === "video") return (
          <div key={index} className="block">
            <div style={{aspectRatio:"16/9", background:"#000", borderRadius:18, overflow:"hidden"}}>
              <iframe src={block.url} title={block.caption ?? "Video"} style={{width:"100%",height:"100%",border:0}} allowFullScreen />
            </div>
            {block.caption && <p className="meta">{block.caption}</p>}
          </div>
        );
        if (block.type === "quote") return (
          <blockquote key={index} className="quote">
            “{block.text}”
            {block.attribution && <div className="meta" style={{marginTop:10}}>— {block.attribution}</div>}
          </blockquote>
        );
        return <ul key={index}>{block.items.map((x) => <li key={x}>{x}</li>)}</ul>;
      })}
    </div>
  );
}
