import { useState } from "react";
import { STUDENTS, LEVEL_COLORS } from "../../data/students";

function Row({ row }) {
  const [name, level, pct, act, active] = row;
  return (
    <tr>
      <td style={{ fontWeight: 600 }}>{name}</td>
      <td>
        <span className="level-pill" style={{ background: `${LEVEL_COLORS[level]}22`, color: LEVEL_COLORS[level] }}>
          {level}
        </span>
      </td>
      <td>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div className="bar-track" style={{ width: 80 }}><div className="bar-fill" style={{ width: `${pct}%` }}></div></div>
          <span style={{ fontSize: 12.5, fontWeight: 700 }}>{pct}%</span>
        </div>
      </td>
      <td style={{ color: "var(--slate)" }}>{act}</td>
      <td><span className={`dot ${active ? "on" : "off"}`}></span>{active ? "Activo" : "Inactivo"}</td>
    </tr>
  );
}

export default function Alumnos() {
  const [query, setQuery] = useState("");
  const filtered = STUDENTS.filter((s) => s[0].toLowerCase().includes(query.toLowerCase()));

  return (
    <>
      <div className="page-head">
        <h1>Alumnos</h1>
        <p>{STUDENTS.length} alumnos registrados en la plataforma.</p>
      </div>
      <input
        type="text"
        className="admin-search"
        placeholder="Buscar alumno por nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="card" style={{ padding: 0, overflow: "hidden" }}>
        <table>
          <thead>
            <tr><th>Nombre</th><th>Nivel</th><th>Progreso</th><th>Última actividad</th><th>Estado</th></tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((row) => <Row row={row} key={row[0]} />)
            ) : (
              <tr><td colSpan={5} style={{ textAlign: "center", color: "var(--slate)", padding: 24 }}>No se encontraron alumnos.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
