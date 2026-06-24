import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import Icon from "../components/Icon";

export default function ExamIntro() {
  const { user, logout, attemptsUsed, attemptsRemaining, canAttemptExam } = useApp();
  const navigate = useNavigate();

  return (
    <>
      <div className="topbar">
        <div className="brand">
          <span className="mark"></span>EnglishCore
        </div>
        <div></div>
        <button className="logout-btn" onClick={logout}>Cerrar sesión</button>
      </div>
      <div className="exam-intro">
        <div className="mark" style={{ width: 54, height: 54, borderRadius: 16, margin: "0 auto 24px" }}></div>
        <h1>¡Bienvenido, {user.name.split(" ")[0]}!</h1>
        <p>
          Antes de empezar a aprender, vamos a descubrir tu nivel real de inglés con un examen de
          nivelación de 25 preguntas, con la misma lógica que los exámenes de Cambridge.
        </p>
        <ul>
          <li>
            <span className="ico"><Icon name="clock" color="#6366F1" /></span>
            <div><b>45 minutos</b> de tiempo estimado, con cronómetro visible.</div>
          </li>
          <li>
            <span className="ico"><Icon name="layers" color="#6366F1" /></span>
            <div>Cubre los <b>6 niveles CEFR</b> (A1 a C2), de más fácil a más difícil.</div>
          </li>
          <li>
            <span className="ico"><Icon name="check" color="#6366F1" /></span>
            <div>Podés cambiar tu respuesta antes de pasar a la siguiente pregunta.</div>
          </li>
          <li>
            <span className="ico"><Icon name="target" color="#6366F1" /></span>
            <div>
              Tenés <b>{attemptsRemaining} de 2 intentos</b> disponibles
              {attemptsUsed > 0 && " (ya usaste " + attemptsUsed + ")"}.
            </div>
          </li>
        </ul>

        {canAttemptExam ? (
          <button
            className="btn btn-primary"
            style={{ padding: "14px 28px", fontSize: 15 }}
            onClick={() => navigate("/examen")}
          >
            Comenzar examen
          </button>
        ) : (
          <p style={{ color: "#B91C1C", fontWeight: 600 }}>
            Ya usaste tus 2 intentos disponibles para este examen.
          </p>
        )}
      </div>
    </>
  );
}
