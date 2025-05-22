<template>
  <aside class="sidebar">
    <h2>JSONPlaceholder</h2>
    <nav>
      <a 
        href="#" 
        :class="{ active: activeTab==='Inicio' }" 
        @click.prevent="$emit('change-tab','Inicio')"
      >
        <span class="material-icons">home</span>
        Inicio
      </a>
      <a 
        href="#" 
        :class="{ active: activeTab==='Posts' }" 
        @click.prevent="$emit('change-tab','Posts')"
      >
        <span class="material-icons">article</span>
        Posts
      </a>
      <a 
        href="#" 
        :class="{ active: activeTab==='Usuarios' }" 
        @click.prevent="$emit('change-tab','Usuarios')"
      >
        <span class="material-icons">people</span>
        Usuarios
      </a>
      <a 
        href="#" 
        :class="{ active: activeTab==='Álbumes' }" 
        @click.prevent="$emit('change-tab','Álbumes')"
      >
        <span class="material-icons">photo_album</span>
        Álbumes
      </a>
      <a 
        href="#" 
        :class="{ active: activeTab==='Tareas' }" 
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
