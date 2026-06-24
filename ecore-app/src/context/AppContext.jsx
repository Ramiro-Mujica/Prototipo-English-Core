import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { USERS } from "../data/users";
import { MAX_EXAM_ATTEMPTS, levelCodeFromScore } from "../data/examQuestions";

const AppContext = createContext(null);
const SESSION_KEY = "ecore_session_v1";

// Carga el estado de sesión guardado (si lo hay). Si está corrupto, arranca limpio.
function loadSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

// Estructura "limpia" de un intento de examen: nunca se reutiliza el objeto anterior,
// siempre se crea uno nuevo. Esto es lo que evita el bug de "bucle" al reintentar.
function freshAttemptState() {
  return { answers: {}, currentQ: 0 };
}

export function AppProvider({ children }) {
  const [session, setSession] = useState(() => loadSession());
  const [toast, setToast] = useState(null);

  // Persiste la sesión completa cada vez que cambia (simula un backend real con estado).
  useEffect(() => {
    if (session) sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    else sessionStorage.removeItem(SESSION_KEY);
  }, [session]);

  const showToast = useCallback((msg) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2600);
  }, []);

  const login = useCallback((emailRaw, password) => {
    const email = emailRaw.trim().toLowerCase();
    const found = USERS[email];
    if (!found || found.password !== password) {
      return { ok: false, error: "No encontramos una cuenta con ese correo y contraseña. Revisá los datos e intentá de nuevo." };
    }
    setSession({
      email,
      user: { ...found },
      exam: { attempts: [], current: freshAttemptState() },
    });
    return { ok: true, user: found };
  }, []);

  const logout = useCallback(() => {
    setSession(null);
  }, []);

  // ---- Lógica del examen de nivelación ----

  const attemptsUsed = session?.exam?.attempts?.length || 0;
  const attemptsRemaining = Math.max(0, MAX_EXAM_ATTEMPTS - attemptsUsed);
  const canAttemptExam = attemptsRemaining > 0;

  const startNewAttempt = useCallback(() => {
    setSession((prev) => {
      if (!prev) return prev;
      return { ...prev, exam: { ...prev.exam, current: freshAttemptState() } };
    });
  }, []);

  const answerQuestion = useCallback((qIndex, optionIndex) => {
    setSession((prev) => {
      if (!prev) return prev;
      const current = { ...prev.exam.current, answers: { ...prev.exam.current.answers, [qIndex]: optionIndex } };
      return { ...prev, exam: { ...prev.exam, current } };
    });
  }, []);

  const goToQuestion = useCallback((qIndex) => {
    setSession((prev) => {
      if (!prev) return prev;
      return { ...prev, exam: { ...prev.exam, current: { ...prev.exam.current, currentQ: qIndex } } };
    });
  }, []);

  // Cierra el intento actual: lo guarda en el historial y actualiza el nivel del usuario.
  // Nunca "reutiliza" el intento anterior — el próximo intento parte de freshAttemptState().
  const finishAttempt = useCallback((score) => {
    setSession((prev) => {
      if (!prev) return prev;
      const levelCode = levelCodeFromScore(score);
      const attemptRecord = {
        score,
        level: levelCode,
        date: new Date().toISOString(),
        answers: prev.exam.current.answers,
      };
      const attempts = [...prev.exam.attempts, attemptRecord];
      return {
        ...prev,
        user: { ...prev.user, level: levelCode, status: "activo", justLeveled: true },
        exam: { attempts, current: freshAttemptState() },
      };
    });
  }, []);

  const value = {
    session,
    user: session?.user || null,
    isAuthenticated: !!session,
    login,
    logout,
    toast,
    showToast,
    examAttempts: session?.exam?.attempts || [],
    examCurrent: session?.exam?.current || freshAttemptState(),
    attemptsUsed,
    attemptsRemaining,
    canAttemptExam,
    startNewAttempt,
    answerQuestion,
    goToQuestion,
    finishAttempt,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp debe usarse dentro de <AppProvider>");
  return ctx;
}
