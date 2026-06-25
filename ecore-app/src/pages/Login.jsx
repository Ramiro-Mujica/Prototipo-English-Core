import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import BrandLogo from "../components/BrandLogo";

export default function Login() {
  const { login, isAuthenticated, user } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Si ya hay una sesión activa, no se puede "ver" el login otra vez sin cerrar sesión antes.
  if (isAuthenticated) {
    if (user.role === "admin") return <Navigate to="/admin" replace />;
    if (user.status === "nuevo") return <Navigate to="/examen/intro" replace />;
    return <Navigate to="/alumno" replace />;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const result = login(email, password);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    if (result.user.role === "admin") navigate("/admin");
    else if (result.user.status === "nuevo") navigate("/examen/intro");
    else navigate("/alumno");
  }

  return (
    <div className="login-screen">
      <div className="login-glow"></div>
      <div className="login-box">
        <div className="login-logo">
          <BrandLogo className="brand-logo" />
        </div>
        <h1>Iniciar sesión</h1>
        <p className="sub">Accedé a tu cuenta de EnglishCore</p>

        {error && <div className="login-error show">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Correo electrónico</label>
            <input
              type="email"
              placeholder="tu@email.com"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label>Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary login-submit">
            Iniciar sesión
          </button>
        </form>
        <div className="login-foot">EnglishCore</div>
      </div>
    </div>
  );
}
