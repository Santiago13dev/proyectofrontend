<template>
  <header class="header">
    <h1 class="header__title">JSONPlaceholder Explorer</h1>
    <div class="search-container">
      <input
        v-model="query"
        @input="$emit('search', query)"
        type="text"
        placeholder="Buscar..."
        class="search-input"
      />
      <button @click="$emit('refresh')" class="refresh-btn">
        Actualizar
      </button>
    </div>
  </header>
  <!-- ... resto de tu template ... -->
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
  tabs: Array,
  active: String
});
const emits = defineEmits(['search', 'refresh', 'change-tab']);
const query = ref('');
</script>