import { NavLink, Outlet } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import Icon from "../../components/Icon";
import escudo from "../../img/escudo.png";

const NAV = [
  { to: "/admin", label: "Dashboard", icon: "home", end: true },
  { to: "/admin/alumnos", label: "Alumnos", icon: "users" },
  { to: "/admin/progreso", label: "Progreso en Tiempo Real", icon: "chart" },
  { to: "/admin/errores", label: "Errores Frecuentes", icon: "alert" },
  { to: "/admin/niveles", label: "Niveles CEFR", icon: "layers" },
  { to: "/admin/notificaciones", label: "Notificaciones (FCM)", icon: "bell" },
  { to: "/admin/reportes", label: "Reportes", icon: "doc" },
  { to: "/admin/config", label: "Configuración", icon: "settings" },
  { to: "/admin/roles", label: "Roles y Permisos", icon: "shield" },
];

export default function AdminLayout() {
  const { user, logout } = useApp();

  return (
    <>
      <div className="topbar">
        <div className="brand">
          <img src={escudo} alt="Escudo EnglishCore" className="brand-shield" />
          <span>EnglishCore</span>
        </div>
        <div></div>
        <div className="topbar-user">
          <span>{user.name} · Administradora</span>
          <div className="avatar">{user.initials}</div>
          <button className="logout-btn" onClick={logout}>Cerrar sesión</button>
        </div>
      </div>
      <div className="layout">
        <div className="sidebar">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => (isActive ? "active" : "")}>
              {({ isActive }) => (
                <>
                  <Icon name={item.icon} color={isActive ? "#4F46E5" : "#9795B0"} size={17} />
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </div>
        <div className="content" style={{ maxWidth: "none" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
