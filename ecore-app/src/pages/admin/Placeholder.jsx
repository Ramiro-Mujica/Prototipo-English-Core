import Icon from "../../components/Icon";

const LABELS = {
  notificaciones: "Notificaciones push (FCM)",
  config: "Configuración del sistema",
  roles: "Roles y permisos",
  progreso: "Progreso en tiempo real",
};

export default function Placeholder({ section }) {
  return (
    <div className="placeholder-panel">
      <div className="ico">
        <Icon name="settings" color="#6366F1" size={26} />
      </div>
      <h3 style={{ fontSize: 16, marginBottom: 8 }}>{LABELS[section] || "Sección"}</h3>
      <p style={{ maxWidth: 380 }}>
        Esta sección está simplificada en el alcance de este prototipo visual — el foco está puesto en
        nivelación, progreso de alumnos y gestión académica.
      </p>
    </div>
  );
}
