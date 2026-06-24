import { STUDENTS, ERROR_FREQ, LEVEL_COLORS } from "../../data/students";

export default function Dashboard() {
  const activos = STUDENTS.filter((s) => s[4]).length;

  return (
    <>
      <div className="page-head">
        <h1>Dashboard</h1>
        <p>Resumen general de la plataforma · Últimos 7 días</p>
      </div>
      <div className="grid-4">
        <div className="card stat-card"><div className="num">{activos}</div><div className="lbl">Alumnos activos</div></div>
        <div className="card stat-card"><div className="num">6</div><div className="lbl">Nuevos alumnos</div></div>
        <div className="card stat-card"><div className="num">78.4%</div><div className="lbl">Tasa de aprobación</div></div>
        <div className="card stat-card"><div className="num">64.2%</div><div className="lbl">Retención (7 días)</div></div>
      </div>
      <div className="grid-2">
        <div className="card">
          <h3 style={{ fontSize: 15, marginBottom: 16 }}>Errores más frecuentes</h3>
          {ERROR_FREQ.map(([name, count, pct]) => (
            <div className="bar-row" key={name}>
              <div className="name" style={{ width: 200 }}>{name}</div>
              <div className="bar-track"><div className="bar-fill" style={{ width: `${pct}%`, background: "var(--rose)" }}></div></div>
              <div className="pct">{pct}%</div>
            </div>
          ))}
        </div>
        <div className="card">
          <h3 style={{ fontSize: 15, marginBottom: 16 }}>Distribución por nivel CEFR</h3>
          {["A1", "A2", "B1", "B2", "C1", "C2"].map((l) => {
            const count = STUDENTS.filter((s) => s[1] === l).length;
            const pct = Math.round((count / STUDENTS.length) * 100);
            return (
              <div className="bar-row" key={l}>
                <div className="name" style={{ width: 40 }}>{l}</div>
                <div className="bar-track"><div className="bar-fill" style={{ background: LEVEL_COLORS[l], width: `${pct}%` }}></div></div>
                <div className="pct">{count}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="card" style={{ marginTop: 18 }}>
        <h3 style={{ fontSize: 15, marginBottom: 14 }}>Actividad reciente</h3>
        {STUDENTS.slice(0, 6).map(([name, level, pct, act]) => (
          <div className="module-row" key={name}>
            <div><div className="mname">{name}</div><div className="mdate">Nivel {level} · {act}</div></div>
            <div className="bar-track" style={{ width: 100 }}><div className="bar-fill" style={{ width: `${pct}%` }}></div></div>
          </div>
        ))}
      </div>
    </>
  );
}
