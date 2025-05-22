# 🚀 JSONPlaceholder Explorer

[![Coverage](https://img.shields.io/badge/coverage-86%25-brightgreen)](#)

---

## 🎯 Descripción del proyecto

**JSONPlaceholder Explorer** es una **aplicación full-stack** que consume la API de [JSONPlaceholder](https://jsonplaceholder.typicode.com) a través de un microservicio **Express** (backend) y muestra datos en una interfaz construida con **Vue 3** y **Tailwind CSS** (frontend).
Permite explorar **Posts**, **Usuarios**, **Álbumes** y **Tareas**, filtrar resultados y recargar datos.

---

## 🏛️ Arquitectura

```mermaid
flowchart LR
  subgraph Frontend
    A[Usuario interactúa] --> B[Vue Components]
    B --> C[fetchData Service]
  end
  B -->|GET `/api/...`| D[Backend Proxy]
  D -->|HTTP Request| E[JSONPlaceholder API]
  E -->|JSON| D
  D -->|JSON| B
  B --> F[Render UI]
```

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

