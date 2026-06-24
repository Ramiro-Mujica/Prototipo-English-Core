// Usuarios de prueba del prototipo (no hay base de datos real).
// Estos son los únicos 3 logins válidos del sistema.
export const USERS = {
  "maria.gonzalez88@gmail.com": {
    password: "Mgonzalez25!",
    role: "alumno",
    name: "María González",
    initials: "MG",
    level: "B1",
    status: "activo", // ya tiene progreso, no rinde el examen de nuevo
  },
  "tomas.ibarra02@hotmail.com": {
    password: "Tibarra2026!",
    role: "alumno",
    name: "Tomás Ibarra",
    initials: "TI",
    level: null,
    status: "nuevo", // sin nivel asignado, debe rendir el examen de nivelación
  },
  "patricia.solano@englishcore.edu": {
    password: "PSolano2026!",
    role: "admin",
    name: "Patricia Solano",
    initials: "PS",
  },
};
