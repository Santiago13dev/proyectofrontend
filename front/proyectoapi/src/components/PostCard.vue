<template>
  <div class="post-card">
    <div>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <div class="card-footer">
      <span class="material-icons">person</span>Usuario: {{ post.userId }}
      <button><span class="material-icons">chat_bubble_outline</span>Ver detalles</button>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ post: Object });
</script>
