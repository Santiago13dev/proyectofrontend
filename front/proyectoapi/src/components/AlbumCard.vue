<!-- src/components/AlbumCard.vue -->
<template>
  <div class="album-card">
    <h3 class="album-card__title">{{ album.title }}</h3>
    <button class="album-card__btn" @click="$emit('view-album', album.id)">
      <span class="material-icons">photo_library</span>  
      Ver álbum
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  album: { type: Object, required: true }
});
const emit = defineEmits(['view-album']);
</script>

<style scoped>
.album-card {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.album-card__title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
.album-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 0.875rem;
  border: 1px solid var(--gray-200);
  border-radius: 0.375rem;
  background: white;
  cursor: pointer;
  transition: background 0.2s;
}
.album-card__btn:hover {
  background: var(--gray-100);
}
</style>
