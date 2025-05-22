<!-- src/App.vue -->
<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <Sidebar
      class="flex-shrink-0 w-64"
      :activeTab="activeTab"
      @change-tab="onTab"
    />

    <!-- Main wrapper (remounts on tab change) -->
    <div
      class="main-wrapper flex-1 flex flex-col bg-gray-50"
      :key="activeTab"
    >
      <!-- Header with search and tabs -->
      <HeaderBar
        :tabs="tabs"
        :active="activeTab"
        @change-tab="onTab"
        @search="q => filter = q"
        @refresh="loadData"
      />

      <!-- Scrollable content area -->
      <main ref="mainContent" class="content flex-1 overflow-auto p-6">
        <!-- INICIO PAGE -->
        <template v-if="activeTab === 'Inicio'">
          <div class="inicio-card">
            <div class="inicio-card-header">
              <span class="material-icons">explore</span>
              <h2 class="inicio-card-title">
                Bienvenido a JSONPlaceholder Explorer
              </h2>
            </div>

            <p class="inicio-card-desc">
              Esta interfaz consume un backend en
              <code>http://localhost:3000/api</code> que a su vez obtiene datos de
              <a href="https://jsonplaceholder.typicode.com" target="_blank"
                 class="text-green-600 hover:underline">
                JSONPlaceholder
              </a>.
            </p>

            <ul class="list-disc ml-6 mb-4">
              <li><strong>Posts:</strong> muestra todos los artículos.</li>
              <li><strong>Usuarios:</strong> lista usuarios y sus datos de contacto.</li>
              <li><strong>Álbumes:</strong> presenta álbumes junto con sus fotos.</li>
              <li><strong>Tareas:</strong> tareas pendientes y completadas.</li>
            </ul>

            <div class="inicio-features">
              <div class="inicio-feature">
                <span class="material-icons">article</span>
                <div>
                  <h3 class="inicio-feature-title">Posts</h3>
                  <p class="inicio-feature-text">Muestra todos los artículos.</p>
                </div>
              </div>
              <div class="inicio-feature">
                <span class="material-icons">people</span>
                <div>
                  <h3 class="inicio-feature-title">Usuarios</h3>
                  <p class="inicio-feature-text">Lista usuarios y sus datos de contacto.</p>
                </div>
              </div>
              <div class="inicio-feature">
                <span class="material-icons">photo_album</span>
                <div>
                  <h3 class="inicio-feature-title">Álbumes</h3>
                  <p class="inicio-feature-text">Presenta álbumes junto con sus fotos.</p>
                </div>
              </div>
              <div class="inicio-feature">
                <span class="material-icons">check_circle</span>
                <div>
                  <h3 class="inicio-feature-title">Tareas</h3>
                  <p class="inicio-feature-text">Tareas pendientes y completadas.</p>
                </div>
              </div>
            </div>

            <p class="inicio-footer">
              Usa la barra lateral para navegar, el buscador para filtrar y el botón
              <em>Actualizar</em> para recargar tus datos.
            </p>
          </div>
        </template>

        <!-- DATA TABS -->
        <template v-else>
          <h2 class="text-2xl font-bold mb-2">{{ activeTab }}</h2>
          <p class="text-gray-600 mb-6">{{ descriptions[activeTab] }}</p>

          <div class="posts-grid grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
        </template>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import Sidebar    from './components/Sidebar.vue';
import HeaderBar  from './components/HeaderBar.vue';
import PostCard   from './components/PostCard.vue';
import UserCard   from './components/UserCard.vue';
import AlbumCard  from './components/AlbumCard.vue';
import TodoCard   from './components/TodoCard.vue';
import { fetchData } from './services/api.js';

const tabs = ['Inicio','Posts','Usuarios','Álbumes','Tareas'];
const descriptions = {
  Posts:    'Explora los posts disponibles en JSONPlaceholder.',
  Usuarios: 'Explora los usuarios disponibles. Puedes ver detalles y posts relacionados.',
  Álbumes:  'Explora los álbumes disponibles. Cada uno contiene sus fotos.',
  Tareas:   'Explora las tareas disponibles. Marca las completadas.',
};

const activeTab   = ref('Inicio');
const rawData     = ref([]);
const filter      = ref('');
const mainContent = ref(null);

async function loadData() {
  rawData.value = [];
  await nextTick();
  rawData.value = await fetchData(activeTab.value);
}

function onTab(tab) {
  activeTab.value = tab;
  filter.value    = '';
  loadData();
  nextTick(() => {
    if (mainContent.value) mainContent.value.scrollTop = 0;
  });
}

function showProfile(id) { console.log('Ver perfil usuario', id); }
function showAlbum(id)   { console.log('Ver álbum', id); }

onMounted(loadData);

const displayed = computed(() => {
  if (!filter.value) return rawData.value;
  const q = filter.value.toLowerCase();
  return rawData.value.filter(item => {
    const text = ((item.title || item.name || item.username) ?? '').toLowerCase();
    return text.includes(q);
  });
});
</script>

<style>
/* No styles here; all Inicio styles live in src/assets/main.css */
</style>
