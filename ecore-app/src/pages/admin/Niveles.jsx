import { STUDENTS } from "../../data/students";
import { useApp } from "../../context/AppContext";

export default function Niveles() {
  const { showToast } = useApp();
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  return (
    <>
      <div className="page-head">
        <h1>Niveles CEFR</h1>
        <p>Estructura curricular y distribución de alumnos por nivel.</p>
      </div>
      <div className="card">
        {levels.map((l) => {
          const count = STUDENTS.filter((s) => s[1] === l).length;
          return (
            <div className="module-row" key={l}>
              <div><div className="mname">Nivel {l}</div><div className="mdate">{count} alumnos en este nivel</div></div>
              <button className="btn btn-outline btn-sm" onClick={() => showToast(`Editor de estructura curricular de ${l} (simulado en este prototipo)`)}>
                Configurar
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
