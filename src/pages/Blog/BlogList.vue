<!-- BlogList.vue -->
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
import blogCard from '@/pages/Blog/components/BlogCard.vue';
import { onMounted, ref } from 'vue';

const blogs = import.meta.glob('@/content/blog/posts/*.md', {
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
  posts.value = Object.entries(blogs).map(([path, module]) => {
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

<style lang="scss">
.blog-list {
  padding: toRem(32) toRem(24);
  max-width: toRem(1280);
  margin: 0 auto;

  @include respond-to(medium) {
    padding: toRem(48) toRem(32);
  }
}

.blog-list__title {
  font-family: 'Vazirmatn', sans-serif;
  font-size: toRem(48);
  font-weight: 700;
  margin-bottom: toRem(48);
  color: var(--text-primary-main);
  text-align: right;
}

.blog-list__content {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: toRem(32);

  @include respond-to(small) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to(medium) {
    grid-template-columns: repeat(3, 1fr);
    gap: toRem(48);
  }
}

.blog-list__item {
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
}

/* Blog Post Page */
.tech-doc {
  padding: toRem(32) toRem(24) toRem(120);

  @include respond-to(medium) {
    padding: toRem(48) toRem(32) toRem(120);
  }
}

.tech-doc__content {
  max-width: toRem(800);
  margin: 0 auto;
  color: var(--text-primary-main);

  h1 {
    font-size: toRem(48);
    margin-bottom: toRem(32);
    line-height: 1.2;

    @include respond-to(small) {
      font-size: toRem(36);
    }
  }

  h2 {
    font-size: toRem(36);
    margin: toRem(48) 0 toRem(24);

    @include respond-to(small) {
      font-size: toRem(28);
    }
  }

  p {
    font-size: toRem(18);
    line-height: 1.8;
    margin: toRem(24) 0;
    color: var(--text-secondary-main);
  }

  img {
    border-radius: toRem(8);
    margin: toRem(32) 0;
  }

  pre {
    background: var(--surface-secondary);
    padding: toRem(16);
    border-radius: toRem(8);
    margin: toRem(24) 0;
    overflow-x: auto;
  }

  blockquote {
    border-right: toRem(4) solid var(--primary-main);
    padding: toRem(16) toRem(24);
    margin: toRem(32) 0;
    background: var(--surface-secondary);
    border-radius: toRem(8);
  }

  ul,
  ol {
    margin: toRem(24) toRem(32);

    li {
      margin-bottom: toRem(12);
      line-height: 1.6;
    }
  }
}

.tech-doc__back-link {
  font-size: toRem(16);
  margin-bottom: toRem(32);
  display: inline-flex;
  align-items: center;
  color: var(--primary-main);

  svg {
    margin-left: toRem(8);
  }
}
</style>