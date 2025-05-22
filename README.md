# 🚀 JSONPlaceholder Explorer

[![Coverage](https://img.shields.io/badge/coverage-86%25-brightgreen)](#)

---

## 🎯 Descripción del proyecto

**JSONPlaceholder Explorer** es una **aplicación full-stack** que consume la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com) a través de un microservicio **Express** (backend) y muestra datos en una interfaz construida con **Vue 3** y **Tailwind CSS** (frontend).
Permite explorar **Posts**, **Usuarios**, **Álbumes** y **Tareas**, filtrar resultados y recargar datos.

---
El backend sigue un patrón MVC (Modelo–Vista–Controlador) reforzado con principios de Arquitectura Limpia, de la siguiente manera:

Modelo (Domain): contiene las entidades y la lógica de negocio pura.

Casos de uso (Use Cases): servicios que orquestan la lógica de las entidades.

Controlador (Controller): expone rutas HTTP y valida entradas/salidas.

Infraestructura (Infrastructure): adaptadores externos, como el cliente HTTP (Axios) y el logger (Morgan).

El frontend en Vue 3 está organizado en:

Componentes: UI reutilizable (Sidebar, HeaderBar, cards...).

Servicios: función fetchData que consume el backend.

App.vue: contenedor principal y gestión de pestañas.

**Tecnologías clave**:

| Capa     | Tecnología                                |
| -------- | ----------------------------------------- |
| Frontend | Vue 3, Composition API, TailwindCSS, Vite |
| Backend  | JavaScript,Node.js, Express, Axios, Morgan           |
| Testing  | Jest, Supertest, Vue Test Utils           |

---

## 💡 Decisiones técnicas

* **Express como proxy**: Control total de cabeceras, caché y ETags.
* **Vue 3 + Composition API**: Lógica reactiva y hooks reutilizables.
* **Tailwind CSS**: Rápida maquetación y consistencia visual.
* **Testing**:

  * **Backend**: Jest + Supertest, cobertura > 80 %.
  * **Frontend**: Jest + Vue Test Utils + vue-jest.

---

## 🔧 Instalación y ejecución

1. Clonar repositorio:

   ```bash
   git clone https://github.com/Santiago13dev/proyectofrontend
   cd proyectofrontend
   ```

2. **Backend**:

   ```bash
   cd backend
   npm install
   npm run dev         # Servidor en http://localhost:3000
   npm test            # Tests y cobertura
   ```

3. **Frontend**:

   ```bash
   cd front/proyectoapi
   npm install
   npm run dev         # Cliente en http://localhost:5173
   npm run test:unit   # Tests unitarios y cobertura
   ```

---

## 📄 Componentes principales

```text
src/
├── components/       # Vue components: Sidebar, HeaderBar, PostCard, UserCard...
├── services/api.js   # Client fetch logic
├── App.vue           # Estructura principal y routing interno de tabs
└── assets/main.css   # Estilos globales y personalizados

backend/
├── routes/           # Definición de rutas API
├── src/app.js        # Configuración de Express
└── server.js         # Entrada del servidor con cache disabled
```

