<template>
  <div class="blog-post">
    <app-markdown class="blog-post__content" :source="postContent" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppMarkdown from '@/common/AppMarkdown.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const postContent = ref('')

onMounted(() => {
  const postId = route.params.id
  // Todo: Fetch the blog post content based on the postId

  // Fetch the blog post content based on the postId
  // For now, we'll use static content

  if (postId === '1') {
    postContent.value =
      '# First Blog Post\nThis is the content of the first blog post.'
  } else if (postId === '2') {
    postContent.value =
      '# Second Blog Post\nThis is the content of the second blog post.'
  }
})
</script>

<style scoped lang="scss">
.blog-post {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.blog-post__content {
  margin-top: 2rem;
}
</style>
