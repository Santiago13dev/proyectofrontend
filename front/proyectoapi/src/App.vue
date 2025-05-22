<!-- front/proyectoapi/src/App.vue -->
<template>
  <Sidebar
    :activeTab="activeTab"
    @change-tab="onTab"
  />

  <div class="ml-64 flex flex-col min-h-screen bg-gray-50">
    <HeaderBar
      :tabs="tabs"
      :active="activeTab"
      @change-tab="onTab"
      @search="q => filter = q"
      @refresh="loadData"
    />

    <main class="p-8 flex-1 overflow-auto">
      <h2 class="text-2xl font-bold mb-2">{{ activeTab }}</h2>
      <p class="text-gray-600 mb-6">
        Explora los {{ activeTab.toLowerCase() }} disponibles en JSONPlaceholder.
      </p>

      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <!-- POSTS -->
        <PostCard
          v-if="activeTab === 'Posts'"
          v-for="item in displayed"
          :key="item.id"
          :post="item"
        />

        <!-- USUARIOS -->
        <UserCard
          v-if="activeTab === 'Usuarios'"
          v-for="item in displayed"
          :key="item.id"
          :user="item"
          @view-profile="showProfile"
        />

        <!-- ÁLBUMES -->
        <AlbumCard
          v-if="activeTab === 'Álbumes'"
          v-for="item in displayed"
          :key="item.id"
          :album="item"
        />

        <!-- TAREAS -->
        <TodoCard
          v-if="activeTab === 'Tareas'"
          v-for="item in displayed"
          :key="item.id"
          :todo="item"
        />
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import Sidebar    from './components/Sidebar.vue';
import HeaderBar  from './components/HeaderBar.vue';
import PostCard   from './components/PostCard.vue';
import UserCard   from './components/UserCard.vue';
import AlbumCard  from './components/AlbumCard.vue';  // crea este componente
import TodoCard   from './components/TodoCard.vue';   // y este también
import { fetchData } from './services/api.js';

const tabs     = ['Posts','Usuarios','Álbumes','Tareas'];
const activeTab= ref('Posts');
const raw      = ref([]);
const filter   = ref('');

// carga data según pestaña
async function loadData() {
  try {
    raw.value = await fetchData(activeTab.value);
  } catch (e) {
    console.error('Error fetching data:', e);
    raw.value = [];
  }
}

// al cambiar pestaña
function onTab(tab) {
  activeTab.value = tab;
  filter.value   = '';
  loadData();
}

// muestra perfil de usuario (puede navegar o abrir modal)
function showProfile(userId) {
  console.log('Mostrar perfil de usuario', userId);
}

onMounted(loadData);

// lista filtrada
const displayed = computed(() => {
  if (!filter.value) return raw.value;
  const q = filter.value.toLowerCase();
  return raw.value.filter(item => {
    // Posts: title, Usuarios: name/username, Álbumes: title, Tareas: title
    const text = item.title || item.name || item.username || '';
    return text.toLowerCase().includes(q);
  });
});
</script>
