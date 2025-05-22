<template>
  <div class="user-card">
    <div>
      <h3 class="user-card__name">{{ user.name }}</h3>
      <p class="user-card__username">@{{ user.username }}</p>

      <ul class="user-card__info">
        <li>
          <span class="material-icons">email</span>
          <a :href="`mailto:${user.email}`">{{ user.email }}</a>
        </li>
        <li>
          <span class="material-icons">phone</span>
          <a :href="`tel:${user.phone}`">{{ user.phone }}</a>
        </li>
        <li>
          <span class="material-icons">public</span>
          <a :href="formatUrl(user.website)" target="_blank">{{ user.website }}</a>
        </li>
      </ul>
    </div>

    <button class="user-card__btn" @click="$emit('view-profile', user.id)">
      <span class="material-icons">person</span>
      Ver perfil
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  user: { type: Object, required: true }
});
const emit = defineEmits(['view-profile']);

function formatUrl(website) {
  if (website.startsWith('http')) return website;
  return `https://${website}`;
}
</script>

<style scoped>
.user-card {
  background: white;
  border: 1px solid var(--gray-200);
  border-radius: 0.5rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.user-card__name {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.user-card__username {
  color: var(--gray-500);
  font-size: 0.875rem;
  margin-bottom: 1rem;
}

.user-card__info {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem 0;
}

.user-card__info li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.user-card__info a {
  color: var(--gray-700);
  text-decoration: none;
}

.user-card__info a:hover {
  text-decoration: underline;
}

.user-card__btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--gray-200);
  border-radius: 0.375rem;
  background: white;
  color: var(--gray-700);
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.user-card__btn:hover {
  background: var(--gray-100);
}

.user-card__btn:active {
  transform: scale(0.97);
}
</style>
