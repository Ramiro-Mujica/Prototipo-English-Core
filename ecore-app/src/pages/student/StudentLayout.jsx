import { NavLink, Outlet } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import BrandLogo from "../../components/BrandLogo";

const TABS = [
  { to: "/alumno", label: "Inicio", end: true },
  { to: "/alumno/modulos", label: "Módulos" },
  { to: "/alumno/errores", label: "Perfil de errores" },
  { to: "/alumno/chat", label: "Chat de correcciones" },
  { to: "/alumno/reportes", label: "Reportes" },
];

export default function StudentLayout() {
  const { user, logout } = useApp();

  return (
    <>
      <div className="topbar">
        <div className="brand">
          <BrandLogo className="brand-logo" />
        </div>
        <div className="topbar-mid">
          {TABS.map((tab) => (
            <NavLink key={tab.to} to={tab.to} end={tab.end} className={({ isActive }) => (isActive ? "active" : "")}>
              {tab.label}
            </NavLink>
          ))}
        </div>
        <div className="topbar-user">
          <span>{user.name} · Nivel {user.level}</span>
          <div className="avatar">{user.initials}</div>
          <button className="logout-btn" onClick={logout}>Cerrar sesión</button>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
}
