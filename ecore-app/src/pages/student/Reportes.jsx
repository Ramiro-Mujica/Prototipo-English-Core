import { useApp } from "../../context/AppContext";

export default function Reportes() {
  const { user, showToast } = useApp();

  return (
    <>
      <div className="page-head">
        <h1>Historial del estudiante</h1>
        <p>{user.name} · Última actualización: 24 Jun 2026</p>
      </div>
      <div className="grid-4">
        <div className="card stat-card"><div className="num">{user.level}</div><div className="lbl">Nivel actual</div></div>
        <div className="card stat-card"><div className="num">12/20</div><div className="lbl">Módulos completados</div></div>
        <div className="card stat-card"><div className="num">85%</div><div className="lbl">Puntaje promedio</div></div>
        <div className="card stat-card"><div className="num" style={{ color: "var(--green)" }}>+12%</div><div className="lbl">Mejora este mes</div></div>
      </div>
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
          <h3 style={{ fontSize: 16 }}>Niveles alcanzados</h3>
          <button
            className="btn btn-primary btn-sm"
            onClick={() => showToast("Exportación simulada — en la versión final esto descarga un PDF real con tu historial completo.")}
          >
            Exportar reporte
          </button>
        </div>
        <div className="module-row">
          <div><div className="mname">A1 — Básico</div><div className="mdate">20 Ene 2026</div></div>
          <span className="tag" style={{ background: "var(--green-bg)", color: "#15803D" }}>92%</span>
        </div>
        <div className="module-row">
          <div><div className="mname">A2 — Elemental</div><div className="mdate">15 Feb 2026</div></div>
          <span className="tag" style={{ background: "var(--green-bg)", color: "#15803D" }}>88%</span>
        </div>
        <div className="module-row">
          <div><div className="mname">B1 — Intermedio</div><div className="mdate">En progreso</div></div>
          <span className="tag" style={{ background: "var(--lavender-deep)", color: "var(--indigo-dark)" }}>En curso</span>
        </div>
      </div>
    </>
  );
}
