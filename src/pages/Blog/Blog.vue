<template>
  <div class="blog">
    <h1 class="blog__title">
      {{ $t('header.blog') }}
    </h1>
    <div class="blog__content">
      <p>
        {{ $t('blog.comingSoon') }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Component logic will go here
</script>

<style lang="scss" scoped>
.blog {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.blog__title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.blog__content {
  margin-top: 2rem;
}
</style>
