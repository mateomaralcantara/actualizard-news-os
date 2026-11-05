import Link from "next/link";
import {store} from "@/lib/store";
export default function KendyPage(){const posts=store.articles.filter(a=>a.author==="Kendy Pérez" && a.status==="published");return <main className="article-shell"><h1>Noticias de Kendy Pérez</h1>{posts.map(a=><p key={a.slug}><Link href={"/noticias/"+a.slug}>{a.title}</Link></p>)}</main>}
