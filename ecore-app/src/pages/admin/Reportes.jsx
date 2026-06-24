import { useApp } from "../../context/AppContext";

export default function Reportes() {
  const { showToast } = useApp();

  return (
    <>
      <div className="page-head">
        <h1>Reportes</h1>
        <p>Exportá métricas globales de la plataforma.</p>
      </div>
      <div className="grid-2">
        <div className="card">
          <h3 style={{ fontSize: 15, marginBottom: 10 }}>Reporte de actividad general</h3>
          <p style={{ color: "var(--slate)", fontSize: 13.5, marginBottom: 16 }}>
            Incluye alumnos activos, módulos completados y tasa de aprobación de los últimos 30 días.
          </p>
          <button className="btn btn-primary btn-sm" onClick={() => showToast("Exportación simulada — en la versión final esto descarga un PDF real.")}>
            Exportar PDF
          </button>
        </div>
        <div className="card">
          <h3 style={{ fontSize: 15, marginBottom: 10 }}>Reporte de errores por cohorte</h3>
          <p style={{ color: "var(--slate)", fontSize: 13.5, marginBottom: 16 }}>
            Errores más frecuentes agrupados por nivel CEFR.
          </p>
          <button className="btn btn-primary btn-sm" onClick={() => showToast("Exportación simulada — en la versión final esto descarga un CSV real.")}>
            Exportar CSV
          </button>
        </div>
      </div>
    </>
  );
}
