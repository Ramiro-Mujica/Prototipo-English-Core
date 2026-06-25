import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { EXAM_QUESTIONS } from "../data/examQuestions";
import Icon from "../components/Icon";
import escudo from "../img/escudo.png";

const EXAM_SECONDS = 45 * 60;

export default function Exam() {
  const { logout, examCurrent, answerQuestion, goToQuestion, finishAttempt, canAttemptExam } = useApp();
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(EXAM_SECONDS);

  // Si no quedan intentos disponibles (por ejemplo, refrescó la página en un estado raro),
  // no dejamos que entre de nuevo al examen.
  useEffect(() => {
    if (!canAttemptExam) navigate("/examen/intro", { replace: true });
  }, [canAttemptExam, navigate]);

  // Cronómetro real: si llega a cero, finaliza el examen automáticamente.
  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(id);
          handleFinish();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const i = examCurrent.currentQ;
  const item = EXAM_QUESTIONS[i];
  const answered = Object.keys(examCurrent.answers).length;

  function formatTime(s) {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  }

  function handleFinish() {
    let score = 0;
    EXAM_QUESTIONS.forEach((q, idx) => {
      if (examCurrent.answers[idx] === q.correct) score++;
    });
    finishAttempt(score);
    navigate("/examen/resultado");
  }

  function handleFinishClick() {
    const unanswered = 25 - answered;
    if (unanswered > 0) {
      const ok = window.confirm(
        `Te quedaron ${unanswered} preguntas sin responder. ¿Querés finalizar igual? Se contarán como incorrectas.`
      );
      if (!ok) return;
    }
    handleFinish();
  }

  return (
    <div className="exam-shell">
      <div className="topbar">
        <div className="brand">
          <img src={escudo} alt="Escudo EnglishCore" className="brand-shield" />
          <span>EnglishCore</span>
        </div>
        <div className="exam-timer">{formatTime(secondsLeft)}</div>
        <button className="logout-btn" onClick={logout}>Cerrar sesión</button>
      </div>
      <div className="exam-body">
        <div className="exam-sidebar">
          <h5>Navegación · {answered}/25</h5>
          <div className="qnav">
            {EXAM_QUESTIONS.map((_, idx) => (
              <button
                key={idx}
                className={idx === i ? "current" : examCurrent.answers[idx] !== undefined ? "answered" : ""}
                onClick={() => goToQuestion(idx)}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="exam-main">
          <div className="exam-progress">
            <div className="fill" style={{ width: `${((i + 1) / 25) * 100}%` }}></div>
          </div>
          <div className="exam-tag">
            Pregunta {i + 1} de 25 · Nivel {item.level} · {item.topic}
          </div>
          <div className="exam-q">{item.q}</div>
          <div>
            {item.opts.map((opt, oi) => (
              <div
                key={oi}
                className={`exam-opt ${examCurrent.answers[i] === oi ? "selected" : ""}`}
                onClick={() => answerQuestion(i, oi)}
              >
                <span className="circle">
                  {examCurrent.answers[i] === oi ? <Icon name="check" color="#fff" size={12} /> : String.fromCharCode(65 + oi)}
                </span>
                {opt}
              </div>
            ))}
          </div>
          <div className="exam-footer">
            <button className="btn btn-outline" disabled={i === 0} onClick={() => goToQuestion(i - 1)}>
              Anterior
            </button>
            {i < 24 ? (
              <button className="btn btn-primary" onClick={() => goToQuestion(i + 1)}>
                Siguiente
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleFinishClick}>
                Finalizar examen
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
