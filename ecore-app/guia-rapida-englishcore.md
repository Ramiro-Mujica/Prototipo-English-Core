# EnglishCore — Guía rápida para levantar el prototipo

## 1. Descomprimir el proyecto
Descargá `englishcore-prototipo.zip` y descomprimilo. Te queda una carpeta `ecore-app`.

## 2. Abrir la carpeta en Visual Studio Code
- `Archivo` → `Abrir carpeta...`
- Seleccioná la carpeta **`ecore-app`** (la que tiene adentro `package.json`, `src/`, `index.html`).

## 3. Abrir la terminal integrada
- Menú `Terminal` → `Nueva terminal` (o `Ctrl + ñ` / `` Ctrl+` ``)
- Verificá que la terminal esté parada dentro de `ecore-app`. Si no, escribí:
```bash
cd ecore-app
```

## 4. Instalar las dependencias
*(Necesitás tener [Node.js](https://nodejs.org) instalado, versión 18 o más nueva)*
```bash
npm install
```

## 5. Levantar el servidor de desarrollo
```bash
npm run dev
```
Va a aparecer algo como:
```
VITE v5.x.x  ready in 400 ms
➜  Local:   http://localhost:5173/
```

## 6. Abrir en el navegador
Entrá a:
```
http://localhost:5173/
```

## 7. Detener el servidor
En la terminal: `Ctrl + C`

Para volver a levantarlo otro día, no hace falta repetir `npm install` (solo si borraste `node_modules`):
```bash
npm run dev
```

---

## Usuarios de prueba

No hay registro activo — usar siempre estas 3 cuentas para entrar.

| Usuario | Email | Contraseña | Qué muestra |
|---|---|---|---|
| Alumna con progreso | `maria.gonzalez88@gmail.com` | `Mgonzalez25!` | Dashboard de alumna: Inicio, Módulos, Perfil de errores, Chat, Reportes |
| Alumno nuevo | `tomas.ibarra02@hotmail.com` | `Tibarra2026!` | Examen de nivelación completo (25 preguntas, 2 intentos) |
| Administradora | `patricia.solano@englishcore.edu` | `PSolano2026!` | Panel admin con 45 alumnos ficticios |

**Recordatorio:** mientras haya una sesión activa hay que tocar **"Cerrar sesión"** para volver al login y probar con otro usuario.
