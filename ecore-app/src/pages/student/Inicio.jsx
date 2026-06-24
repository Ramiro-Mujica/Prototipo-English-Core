import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContext";

export default function Inicio() {
  const { user } = useApp();
  const navigate = useNavigate();
  const justLeveled = !!user.justLeveled;

  return (
    <>
      <div className="page-head">
        <h1>Hola, {user.name.split(" ")[0]} 👋</h1>
        <p>
          {justLeveled
            ? `Tu examen de nivelación te ubicó en ${user.level}. Este es tu punto de partida.`
            : "Vas muy bien. Seguís en progreso hacia el siguiente nivel."}
        </p>
      </div>

      <div className="grid-4">
        <div className="card stat-card"><div className="num">{user.level}</div><div className="lbl">Nivel actual</div></div>
        <div className="card stat-card"><div className="num">{justLeveled ? "0/20" : "12/20"}</div><div className="lbl">Módulos completados</div></div>
        <div className="card stat-card"><div className="num">{justLeveled ? "—" : "85%"}</div><div className="lbl">Puntaje promedio</div></div>
        <div className="card stat-card"><div className="num">{justLeveled ? "Día 1" : "7 semanas"}</div><div className="lbl">Tiempo en la plataforma</div></div>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3 style={{ fontSize: 16, marginBottom: 16 }}>Seguí donde lo dejaste</h3>
          {justLeveled ? (
            <>
              <p style={{ color: "var(--slate)", fontSize: 14, marginBottom: 16 }}>
                Todavía no empezaste ningún módulo. Te recomendamos arrancar por lo básico de tu nivel.
              </p>
              <button className="btn btn-primary" onClick={() => navigate("/alumno/modulos")}>Empezar primer módulo</button>
            </>
          ) : (
            <>
              <div className="module-row">
                <div><div className="mname">Present Perfect Tense</div><div className="mdate">Último intento: 90%</div></div>
                <button className="btn btn-outline btn-sm" onClick={() => navigate("/alumno/modulos")}>Repasar</button>
              </div>
              <div className="module-row">
                <div><div className="mname">Conditional Sentences</div><div className="mdate">En progreso · 82%</div></div>
                <button className="btn btn-primary btn-sm" onClick={() => navigate("/alumno/modulos")}>Continuar</button>
              </div>
            </>
          )}
        </div>
        <div className="card">
          <h3 style={{ fontSize: 16, marginBottom: 16 }}>Notificaciones recientes</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13.5 }}>
            <div style={{ display: "flex", gap: 10 }}>
              <span>🔥</span>
              <div><b>Sigues fallando con "Verb To Be"</b><br /><span style={{ color: "var(--slate)" }}>Repasá este ejercicio personalizado.</span></div>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <span>🏆</span>
              <div><b>¡Estás cerca del objetivo!</b><br /><span style={{ color: "var(--slate)" }}>Te faltan 2 ejercicios para tu meta semanal.</span></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
