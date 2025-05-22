<!-- src/App.vue -->
<template>
  <!-- 1) Sidebar fija -->
  <Sidebar
    :activeTab="activeTab"
    @change-tab="onTab"
  />

  <!-- 2) Contenedor principal: usa tu clase .main-wrapper -->
  <div class="main-wrapper">
    <!-- HeaderBar fluye dentro de este contenedor -->
    <HeaderBar
      :tabs="tabs"
      :active="activeTab"
      @change-tab="onTab"
      @search="q => filter = q"
      @refresh="loadData"
    />

    <!-- Main: usa tu clase .content para padding/overflow -->
    <main class="content">
      <h2 class="text-2xl font-bold mb-2">{{ activeTab }}</h2>
      <p class="text-gray-600 mb-6">{{ descriptions[activeTab] }}</p>

      <!-- Grid de cards -->
      <div class="posts-grid">
        <PostCard
          v-if="activeTab === 'Posts'"
          v-for="item in displayed"
          :key="item.id"
          :post="item"
        />
        <UserCard
          v-if="activeTab === 'Usuarios'"
          v-for="item in displayed"
          :key="item.id"
          :user="item"
          @view-profile="showProfile"
        />
        <AlbumCard
          v-if="activeTab === 'Álbumes'"
          v-for="item in displayed"
          :key="item.id"
          :album="item"
          @view-album="showAlbum"
        />
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

import Sidebar   from './components/Sidebar.vue';
import HeaderBar from './components/HeaderBar.vue';
import PostCard  from './components/PostCard.vue';
import UserCard  from './components/UserCard.vue';
import AlbumCard from './components/AlbumCard.vue';
import TodoCard  from './components/TodoCard.vue';
import { fetchData } from './services/api.js';

const tabs = ['Posts', 'Usuarios', 'Álbumes', 'Tareas'];
const descriptions = {
  Posts:    'Explora los posts disponibles en JSONPlaceholder.',
  Usuarios: 'Explora los usuarios disponibles. Puedes ver detalles y posts relacionados.',
  Álbumes:  'Explora los álbumes disponibles. Cada uno contiene sus fotos.',
  Tareas:   'Explora las tareas disponibles. Marca las completadas.',
};

const activeTab = ref('Posts');
const rawData   = ref([]);
const filter    = ref('');

async function loadData() {
  rawData.value = await fetchData(activeTab.value);
}

function onTab(tab) {
  activeTab.value = tab;
  filter.value    = '';
  loadData();
}

function showProfile(id) {
  console.log('Ver perfil usuario', id);
}
function showAlbum(id) {
  console.log('Ver álbum', id);
}

onMounted(loadData);

const displayed = computed(() => {
  if (!filter.value) return rawData.value;
  const q = filter.value.toLowerCase();
  return rawData.value.filter(item => {
    const text = (item.title || item.name || item.username || '').toLowerCase();
    return text.includes(q);
  });
});
</script>
