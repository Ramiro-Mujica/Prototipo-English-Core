import { ERROR_FREQ } from "../../data/students";

export default function Errores() {
  return (
    <>
      <div className="page-head">
        <h1>Errores frecuentes</h1>
        <p>Detectados automáticamente en exámenes y módulos de toda la plataforma.</p>
      </div>
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <table>
          <thead>
            <tr><th>Error</th><th>Alumnos afectados</th><th>% de alumnos</th></tr>
          </thead>
          <tbody>
            {ERROR_FREQ.map(([name, count, pct]) => (
              <tr key={name}>
                <td style={{ fontWeight: 600 }}>{name}</td>
                <td>{count}</td>
                <td>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div className="bar-track" style={{ width: 120 }}><div className="bar-fill" style={{ background: "var(--rose)", width: `${pct}%` }}></div></div>
                    {pct}%
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
