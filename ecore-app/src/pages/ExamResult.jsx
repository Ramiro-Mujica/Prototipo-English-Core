import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { EXAM_QUESTIONS, levelLabelFromScore } from "../data/examQuestions";
import escudo from "../img/escudo.png";

export default function ExamResult() {
  const { logout, examAttempts, attemptsRemaining, canAttemptExam, startNewAttempt } = useApp();
  const navigate = useNavigate();

  // Siempre se muestra el último intento rendido (el historial completo queda guardado).
  const lastAttempt = examAttempts[examAttempts.length - 1];

  if (!lastAttempt) {
    // No debería pasar en un flujo normal, pero evita una pantalla rota si se llega sin rendir nada.
    navigate("/examen/intro", { replace: true });
    return null;
  }

  const { score, level: levelCode, answers } = lastAttempt;
  const levelLabel = levelLabelFromScore(score);
  const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

  function handleRetry() {
    startNewAttempt();
    navigate("/examen");
  }

  return (
    <>
      <div className="topbar">
        <div className="brand">
          <img src={escudo} alt="Escudo EnglishCore" className="brand-shield" />
          <span>EnglishCore</span>
        </div>
        <div></div>
        <button className="logout-btn" onClick={logout}>Cerrar sesión</button>
      </div>
      <div className="result-wrap">
        <div className="result-hero">
          <div className="score">{score} / 25</div>
          <div className="level">
            Tu nivel asignado: <b>{levelLabel}</b>
          </div>
          <div className="cefr-scale">
            {levels.map((l) => (
              <div key={l} className={l === levelCode ? "reached" : ""}>{l}</div>
            ))}
          </div>
        </div>

        <h3 style={{ marginBottom: 14, fontSize: 17 }}>Corrección detallada</h3>
        <div className="result-list">
          {EXAM_QUESTIONS.map((item, idx) => {
            const userAns = answers[idx];
            const isCorrect = userAns === item.correct;
            return (
              <div key={idx} className={`rq ${isCorrect ? "correct" : "incorrect"}`}>
                <div className="qn">Pregunta {idx + 1} · Nivel {item.level}</div>
                <div className="qtext">{item.q}</div>
                <div className={`ans ${isCorrect ? "your-correct" : "your-wrong"}`}>
                  Tu respuesta: <b>{userAns !== undefined ? item.opts[userAns] : "Sin responder"}</b>
                </div>
                {!isCorrect && (
                  <div className="ans correct-answer">
                    Respuesta correcta: <b>{item.opts[item.correct]}</b>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 32, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          {canAttemptExam ? (
            <button className="btn btn-outline" style={{ padding: "14px 24px" }} onClick={handleRetry}>
              Volver a intentar ({attemptsRemaining} {attemptsRemaining === 1 ? "intento" : "intentos"} restante{attemptsRemaining === 1 ? "" : "s"})
            </button>
          ) : (
            <span style={{ fontSize: 13.5, color: "var(--slate)", fontWeight: 600, alignSelf: "center" }}>
              Ya usaste tus 2 intentos disponibles — este es tu nivel asignado final.
            </span>
          )}
          <button className="btn btn-primary" style={{ padding: "14px 28px" }} onClick={() => navigate("/alumno")}>
            Ir a mi panel de alumno
          </button>
        </div>
      </div>
    </>
  );
}
