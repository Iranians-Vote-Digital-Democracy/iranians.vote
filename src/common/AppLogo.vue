<template>
  <div class="app-logo">
    <div class="app-logo__brand">
      <p class="app-logo__img">
        {{ $t('appName') }}
      </p>
    </div>
    <nav class="app-logo__nav">
      <router-link class="app-logo__nav-item" :to="{ name: $routes.app }">
        {{ $t('header.home') }}
      </router-link>
      <router-link class="app-logo__nav-item" :to="{ name: $routes.blog }">
        {{ $t('header.blog') }}
      </router-link>
      <router-link class="app-logo__nav-item" :to="{ name: $routes.about }">
        {{ $t('header.about') }}
      </router-link>
      <a class="app-logo__nav-item" href="/privacy-policy.html" target="_blank">
        {{ $t('header.privacy') }}
      </a>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.app-logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.app-logo__brand {
  display: flex;
  align-items: center;
}

.app-logo__img {
  font-weight: 700;
  font-size: 20;
}

.app-logo__nav {
  display: flex;
  gap: 24px;
}

.app-logo__nav-item {
  color: var(--text-primary-main);
  text-decoration: none;
  font-size: 16;

  &:hover {
    text-decoration: underline;
  }

  &.router-link-active {
    font-weight: 700;
  }
}
</style>
