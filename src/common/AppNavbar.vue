<template>
  <div class="app-navbar">
    <app-logo class="app-navbar__logo" />
    <span class="app-navbar__locale-switcher">
      <template v-for="lang in orderedLangs" :key="lang">
        <button
          v-if="lang !== 'switch'"
          type="button"
          class="app-navbar__locale-btn"
          :class="{ 'app-navbar__locale-btn--active': currentLocale === lang }"
          @click="setLocale(lang as any)"
        >
          {{ lang.toUpperCase() }}
        </button>
        <switch-field
          v-else
          class="app-navbar__locale-switch"
          :label="''"
          v-model="switchState"
          @update:model-value="onSwitch"
          :aria-label="`Toggle language: ${currentLocale}`"
        />
      </template>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { AppLogo } from '@/common'
import { setLocale } from '@/localization'
import { useI18n } from 'vue-i18n'
import { computed, ref, watch } from 'vue'
import { SwitchField } from '@/fields'

const { locale } = useI18n({ useScope: 'global' })

const currentLocale = computed(() => locale.value as 'fa' | 'en')

// Define mapping: switchState true => 'en'; false => 'fa'
const switchState = ref(currentLocale.value === 'en')

const onSwitch = (val: boolean) => {
  setLocale(val ? 'en' : 'fa')
}

// Keep switch in sync if locale changes elsewhere
watch(currentLocale, l => {
  switchState.value = l === 'en'
})

// Show languages in consistent order: FA [switch] EN
const orderedLangs = computed(() => {
  return ['fa', 'switch', 'en']
})
</script>

<style lang="scss" scoped>
.app-navbar {
  display: flex;
  align-items: center;
  gap: toRem(24);
  border-bottom: var(--border-primary-main);
  padding: toRem(32) 0;
}

.app-navbar__logo {
  margin-right: auto;
}

.app-navbar__locale-switcher {
  display: flex;
  align-items: center;
  gap: toRem(12);
  direction: ltr; /* Force LTR to maintain FA [switch] EN order */
}

.app-navbar__locale-btn {
  background: transparent;
  border: none;
  padding: toRem(4) toRem(8);
  border-radius: toRem(4);
  cursor: pointer;
  font-size: toRem(14);
  line-height: 1;
  color: var(--text-secondary-main);
  transition: color 0.15s, background 0.15s;

  &:hover {
    color: var(--text-primary-main);
  }

  &--active {
    font-weight: 600;
    color: var(--text-primary-main);
    background: var(--color-surface-2);
  }
}

.app-navbar__locale-switch {
  --switch-scale: 0.9;
}
</style>
