<template>
  <div class="blog-list">
    <h1 class="blog-list__title">{{ $t('blog.blogs') }}</h1>
    <div class="blog-list__content">
      <div v-for="post in posts" :key="post.id" class="blog-list__item">
        <blogCard :post="post" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import blogCard from '@/pages/Blog/components/BlogCard.vue'

const postModules = import.meta.glob('@/content/blog/posts/*.md', {
  eager: true,
})

interface Post {
  id: string
  title: string
  excerpt: string
  content: string
}

const posts = ref<Post[]>([])

const loadPosts = () => {
  posts.value = Object.entries(postModules).map(([path, module]) => {
    const { attributes, html } = module
    return {
      id: attributes.id,
      title: attributes.title,
      excerpt: attributes.excerpt,
      content: html,
    }
  })
}

onMounted(() => {
  loadPosts()
})
</script>

<style scoped lang="scss">
.blog-list {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.blog-list__title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.blog-list__content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.blog-list__item {
  margin-bottom: 2rem;
}
</style>
