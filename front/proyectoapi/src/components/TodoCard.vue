<!-- src/components/TodoCard.vue -->
<template>
  <div class="todo-card">
    <h3 class="todo-card__title">
      {{ todo.title }}
    </h3>
    <p
      class="todo-card__status"
      :class="{ completed: todo.completed }"
    >
      {{ todo.completed ? '✅ Completada' : '⏲️ Pendiente' }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  todo: { type: Object, required: true }
});
</script>

<style scoped>
.todo-card {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.todo-card__title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.todo-card__status {
  font-size: 0.875rem;
}
.todo-card__status.completed {
  color: var(--green-600);
}
</style>
