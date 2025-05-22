<!-- src/components/Sidebar.vue -->
<template>
  <aside class="sidebar flex-shrink-0 w-64 bg-white border-r flex flex-col">
    <h2 class="sidebar__title">JSONPlaceholder</h2>
    <nav class="sidebar__nav flex-1 flex flex-col gap-2">
      <a
        href="#"
        class="sidebar__link"
        :class="{ active: activeTab === 'Inicio' }"
        @click.prevent="$emit('change-tab','Inicio')"
      >
        <span class="material-icons">home</span>
        Inicio
      </a>
      <a
        href="#"
        class="sidebar__link"
        :class="{ active: activeTab === 'Posts' }"
        @click.prevent="$emit('change-tab','Posts')"
      >
        <span class="material-icons">article</span>
        Posts
      </a>
      <a
        href="#"
        class="sidebar__link"
        :class="{ active: activeTab === 'Usuarios' }"
        @click.prevent="$emit('change-tab','Usuarios')"
      >
        <span class="material-icons">people</span>
        Usuarios
      </a>
      <a
        href="#"
        class="sidebar__link"
        :class="{ active: activeTab === 'Álbumes' }"
        @click.prevent="$emit('change-tab','Álbumes')"
      >
        <span class="material-icons">photo_album</span>
        Álbumes
      </a>
      <a
        href="#"
        class="sidebar__link"
        :class="{ active: activeTab === 'Tareas' }"
        @click.prevent="$emit('change-tab','Tareas')"
      >
        <span class="material-icons">check_circle</span>
        Tareas
      </a>
    </nav>
  </aside>
</template>

<script setup>
const props = defineProps({
  activeTab: { type: String, required: true }
});
const emit = defineEmits(['change-tab']);
</script>

<style scoped>
.sidebar {
  height: 100vh;          /* full height */
  padding: 2rem 1.5rem;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.04);
}

.sidebar__title {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--green-600);
  margin-bottom: 2rem;
}

.sidebar__nav {
  /* flex-1 + flex-col + gap handled by utility classes */
}

.sidebar__link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: var(--gray-700);
  text-decoration: none;
  border-radius: 0.375rem;
  transition: background 0.2s, color 0.2s;
}

.sidebar__link:hover {
  background: rgba(22, 163, 74, 0.1);
  color: var(--green-600);
}

.sidebar__link.active {
  background: rgba(22, 163, 74, 0.15);
  color: var(--green-600);
  border-left: 3px solid var(--green-600);
  padding-left: calc(1rem - 3px);
}

.material-icons {
  font-size: 1.4rem;
}
</style>
