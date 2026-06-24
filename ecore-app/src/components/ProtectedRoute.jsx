import { Navigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

// Protege rutas que requieren sesión iniciada. Si no hay sesión, vuelve siempre al login.
// Si se pasa `role`, además exige que el usuario tenga ese rol específico.
export default function ProtectedRoute({ role, children }) {
  const { isAuthenticated, user } = useApp();

  if (!isAuthenticated) return <Navigate to="/" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;

  return children;
}
