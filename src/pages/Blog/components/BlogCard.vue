<template>
  <div class="blog-card">
    <router-link :to="{ name: 'BlogPost', params: { id: post.id } }" class="blog-card__link">
      <h2 class="blog-card__title">
        {{ post.title }}
      </h2>
      <p class="blog-card__excerpt">
        {{ post.excerpt }}
      </p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.blog-card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}

.blog-card__link {
  text-decoration: none;
  color: inherit;
}

.blog-card__title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.blog-card__excerpt {
  font-size: 1rem;
}
</style>
