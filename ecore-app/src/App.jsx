import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Toast from "./components/Toast";

import Login from "./pages/Login";
import ExamIntro from "./pages/ExamIntro";
import Exam from "./pages/Exam";
import ExamResult from "./pages/ExamResult";

import StudentLayout from "./pages/student/StudentLayout";
import Inicio from "./pages/student/Inicio";
import Modulos from "./pages/student/Modulos";
import Errores from "./pages/student/Errores";
import Chat from "./pages/student/Chat";
import ReportesAlumno from "./pages/student/Reportes";

import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import Alumnos from "./pages/admin/Alumnos";
import ErroresAdmin from "./pages/admin/Errores";
import Niveles from "./pages/admin/Niveles";
import ReportesAdmin from "./pages/admin/Reportes";
import Placeholder from "./pages/admin/Placeholder";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/examen/intro"
            element={
              <ProtectedRoute role="alumno">
                <ExamIntro />
              </ProtectedRoute>
            }
          />
          <Route
            path="/examen"
            element={
              <ProtectedRoute role="alumno">
                <Exam />
              </ProtectedRoute>
            }
          />
          <Route
            path="/examen/resultado"
            element={
              <ProtectedRoute role="alumno">
                <ExamResult />
              </ProtectedRoute>
            }
          />

          <Route
            path="/alumno"
            element={
              <ProtectedRoute role="alumno">
                <StudentLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Inicio />} />
            <Route path="modulos" element={<Modulos />} />
            <Route path="errores" element={<Errores />} />
            <Route path="chat" element={<Chat />} />
            <Route path="reportes" element={<ReportesAlumno />} />
          </Route>

          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="alumnos" element={<Alumnos />} />
            <Route path="errores" element={<ErroresAdmin />} />
            <Route path="niveles" element={<Niveles />} />
            <Route path="reportes" element={<ReportesAdmin />} />
            <Route path="progreso" element={<Placeholder section="progreso" />} />
            <Route path="notificaciones" element={<Placeholder section="notificaciones" />} />
            <Route path="config" element={<Placeholder section="config" />} />
            <Route path="roles" element={<Placeholder section="roles" />} />
          </Route>

          <Route path="*" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toast />
    </AppProvider>
  );
}
