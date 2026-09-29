export default function NewStoryPage() {
  return (
    <main className="admin-shell">
      <div className="eyebrow">Editor por bloques</div>
      <h1>Nueva historia</h1>
      <div className="card card-pad">
        <p className="meta">MVP visual del editor. La API POST /api/articles ya acepta contenido estructurado.</p>
        <div className="toolbar">
          {["Texto", "Imagen", "Video", "Cita", "Lista", "Timeline", "Gráfico"].map(x => (
            <button key={x} className="btn secondary">{x}</button>
          ))}
        </div>
        <input placeholder="Titular" style={{width:"100%",padding:16,borderRadius:12,border:"1px solid #222a36",background:"#0b1017",color:"white",fontSize:22}} />
        <textarea placeholder="Lead / resumen..." rows={5} style={{width:"100%",padding:16,borderRadius:12,border:"1px solid #222a36",background:"#0b1017",color:"white",marginTop:12}} />
        <div className="toolbar"><button className="btn">Guardar borrador</button><button className="btn secondary">Generar con IA</button></div>
      </div>
    </main>
  );
}
