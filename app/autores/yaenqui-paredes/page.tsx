import Link from "next/link";
import {store} from "@/lib/store";
export default function YaenquiPage(){const posts=store.articles.filter(a=>a.author==="Yaenqui Paredes" && a.status==="published");return <main className="article-shell"><h1>Noticias de Yaenqui Paredes</h1>{posts.map(a=><p key={a.slug}><Link href={"/noticias/"+a.slug}>{a.title}</Link></p>)}</main>}
