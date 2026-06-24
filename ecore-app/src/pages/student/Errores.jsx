const DATA = [
  ["Verb Tenses", 24],
  ["Articles", 19],
  ["Prepositions", 14],
  ["Word Order", 11],
];

export default function Errores() {
  const max = Math.max(...DATA.map((d) => d[1]));

  return (
    <>
      <div className="page-head">
        <h1>Tu mapa de debilidades</h1>
        <p>Análisis personalizado basado en tus últimos 25 exámenes.</p>
      </div>
      <div className="grid-2">
        <div className="card">
          <h3 style={{ fontSize: 15, marginBottom: 18 }}>Distribución de errores</h3>
          <div className="error-bars-wrap">
            {DATA.map(([name, val]) => (
              <div className="error-bar" key={name}>
                <span style={{ fontWeight: 700, fontSize: 14 }}>{val}</span>
                <div className="bar" style={{ height: (val / max) * 120 }}></div>
                <span style={{ fontSize: 12, color: "var(--slate)", textAlign: "center" }}>{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card">
          <h3 style={{ fontSize: 15, marginBottom: 10 }}>Reducción total</h3>
          <div style={{ fontFamily: "Sora", fontSize: 30, fontWeight: 800, color: "var(--green)" }}>-37%</div>
          <div style={{ color: "var(--slate)", fontSize: 13, marginBottom: 18 }}>de errores en las últimas 6 semanas</div>
          <h3 style={{ fontSize: 15, marginBottom: 10 }}>Patrones recurrentes</h3>
          <div className="pattern-item">
            <div><div className="pname">Present Perfect vs. Past Simple</div><div className="pdesc">Confusión entre "have done" / "did"</div></div>
            <span className="pcount">12x</span>
          </div>
          <div className="pattern-item">
            <div><div className="pname">Third Person Singular</div><div className="pdesc">Olvida la -s en he/she/it</div></div>
            <span className="pcount">8x</span>
          </div>
          <div className="pattern-item">
            <div><div className="pname">Articles: a / an / the</div><div className="pdesc">Omisión del artículo definido</div></div>
            <span className="pcount">6x</span>
          </div>
        </div>
      </div>
      <PracticaSugerida />
    </>
  );
}

function PracticaSugerida() {
  return (
    <div className="card" style={{ marginTop: 18 }}>
      <h3 style={{ fontSize: 15, marginBottom: 14 }}>Práctica sugerida</h3>
      <div className="grid-2">
        <div className="module-row" style={{ border: "1.5px solid var(--border)", borderRadius: 12, padding: "14px 16px" }}>
          <div><div className="mname">Present Perfect</div><div className="mdate">15 min · 20 ejercicios</div></div>
          <button className="btn btn-primary btn-sm">Comenzar</button>
        </div>
        <div className="module-row" style={{ border: "1.5px solid var(--border)", borderRadius: 12, padding: "14px 16px" }}>
          <div><div className="mname">Artículos en contexto</div><div className="mdate">10 min · 12 ejercicios</div></div>
          <button className="btn btn-outline btn-sm">Comenzar</button>
        </div>
      </div>
    </div>
  );
}
