# EnglishCore — Prototipo funcional

Prototipo navegable de la plataforma **EnglishCore** (Trabajo Final de Carrera — Analista de Sistemas).
Construido con **React + Vite + Tailwind CSS**, sin backend ni base de datos real: todos los datos
de usuarios, alumnos y progreso están simulados en el código (`src/data/`) para que el prototipo se
pueda probar y presentar de punta a punta.

## Cómo correrlo

```bash
npm install
npm run dev
```

Esto levanta un servidor local (por defecto en `http://localhost:5173`). Abrí esa URL en el navegador.

Para generar una build de producción (archivos estáticos listos para subir a cualquier hosting):

```bash
npm run build
npm run preview   # para previsualizar esa build localmente
```

## Usuarios de prueba

No hay pantalla de registro activa: usá estas 3 cuentas para entrar.

| Rol | Email | Contraseña | Qué vas a ver |
|---|---|---|---|
| Alumna con progreso | `maria.gonzalez88@gmail.com` | `Mgonzalez25!` | Dashboard de alumna (Inicio, Módulos, Perfil de errores, Chat, Reportes) |
| Alumno nuevo | `tomas.ibarra02@hotmail.com` | `Tibarra2026!` | Examen de nivelación completo (25 preguntas) |
| Administradora | `patricia.solano@englishcore.edu` | `PSolano2026!` | Panel de administración con 45 alumnos ficticios |

## Cómo funciona la sesión

- El login es real: valida contra los 3 usuarios de arriba. Si los datos no coinciden, muestra error.
- Mientras haya una sesión activa, no se puede volver a ver la pantalla de login sin tocar
  **"Cerrar sesión"** — cualquier intento de ir a `/` redirige automáticamente al panel correspondiente.
- La sesión se guarda en `sessionStorage`: si recargás la página no perdés el progreso, pero se borra
  al cerrar la pestaña o al cerrar sesión.

## Examen de nivelación

- Tomás tiene **2 intentos disponibles**, igual que especifica la propuesta del proyecto.
- Cada intento nuevo arranca siempre limpio (sin preguntas respondidas de un intento anterior), así que
  no hay riesgo de que el examen "se cuelgue" repitiendo respuestas viejas.
- Al agotar los 2 intentos, el sistema deja de ofrecer la opción de reintentar y deja fijo el nivel
  del último intento rendido.

## Qué está simulado a propósito

Por ser un prototipo visual (no hay backend ni IA conectada de verdad):

- El chat de correcciones responde con lógica simple en el cliente (no llama a ninguna IA real).
- Los botones de "Exportar PDF/CSV" muestran un aviso, no descargan un archivo real.
- Algunas secciones secundarias del panel admin (Configuración, Roles y Permisos, Notificaciones FCM,
  Progreso en Tiempo Real) están simplificadas a un panel informativo, ya que no son el foco de esta
  demo.

## Estructura del proyecto

```
src/
├── data/              → "base de datos" simulada (usuarios, preguntas del examen, alumnos)
├── context/           → AppContext: sesión, login/logout, lógica de intentos del examen
├── components/        → Icon, ProtectedRoute, Toast
├── pages/
│   ├── Login.jsx
│   ├── ExamIntro.jsx, Exam.jsx, ExamResult.jsx
│   ├── student/        → layout + pestañas del dashboard de alumno
│   └── admin/          → layout + secciones del panel de administración
├── App.jsx            → definición de todas las rutas
└── main.jsx            → punto de entrada de React
```
