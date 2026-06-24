import { useApp } from "../../context/AppContext";

const MODULES = [
  ["Present Perfect Tense", "28 May 2026", 90, "Completado"],
  ["Conditional Sentences", "25 May 2026", 82, "Completado"],
  ["Business Vocabulary", "22 May 2026", 88, "Completado"],
  ["Passive Voice", "18 May 2026", 78, "Completado"],
  ["Reported Speech", "En curso", 0, "En progreso"],
];

export default function Modulos() {
  const { user, showToast } = useApp();

  return (
    <>
      <div className="page-head">
        <h1>Mis módulos</h1>
        <p>Contenido generado por IA según tu nivel {user.level}.</p>
      </div>
      <div className="card">
        {MODULES.map(([name, date, pct, status]) => (
          <div className="module-row" key={name}>
            <div>
              <div className="mname">{name}</div>
              <div className="mdate">{date}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {pct > 0 ? (
                <>
                  <div className="bar-track" style={{ width: 120 }}>
                    <div className="bar-fill" style={{ width: `${pct}%` }}></div>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, width: 36 }}>{pct}%</span>
                </>
              ) : (
                <span className="tag" style={{ background: "var(--amber-bg)", color: "#92400E" }}>{status}</span>
              )}
              {pct > 0 ? (
                <button className="btn btn-outline btn-sm" onClick={() => showToast(`Abriendo módulo: ${name} (simulado en este prototipo)`)}>
                  Repasar
                </button>
              ) : (
                <button className="btn btn-primary btn-sm" onClick={() => showToast(`Comenzando módulo: ${name} (simulado en este prototipo)`)}>
                  Continuar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
