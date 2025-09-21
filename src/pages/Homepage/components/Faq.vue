<template>
  <div class="faq">
    <h2 class="faq__title">
      {{ $t('faq.title') }}
    </h2>

    <div class="faq__content">
      <template
        v-for="(item, idx) in faqContent.slice(0, questionsToShow)"
        :key="idx"
      >
        <div class="faq__item">
          <accordion :key="idx" class="faq__accordion">
            <template #head="{ accordion }">
              <div class="faq__accordion-head" @click="accordion.toggle">
                <div class="faq__accordion-head-text">
                  {{ item.head }}
                </div>
                <div class="faq__accordion-head-indicator">
                  <icon
                    class="faq__accordion-head-indicator-icon"
                    :class="{
                      'faq__accordion-head-indicator-icon--active':
                        accordion.isOpen,
                    }"
                    :name="$icons.chevronDown"
                  />
                </div>
              </div>
            </template>
            <template #default>
              <div class="faq__accordion-body">
                <vue-markdown
                  class="faq__accordion-body-text"
                  :source="item.body"
                  :plugins="plugins"
                  :options="{
                    html: true,
                    breaks: true,
                    typographer: true,
                    linkify: true,
                  }"
                />
              </div>
            </template>
          </accordion>
          <div class="faq__divider" />
        </div>
      </template>

      <collapse :is-shown="isAllQuestionsShown">
        <div class="faq__content-hidden-questions">
          <template
            v-for="(item, idx) in faqContent.slice(
              questionsToShow,
              faqContent.length - 1,
            )"
            :key="idx"
          >
            <div class="faq__item">
              <accordion :key="idx" class="faq__accordion">
                <template #head="{ accordion }">
                  <div class="faq__accordion-head" @click="accordion.toggle">
                    <div class="faq__accordion-head-text">
                      {{ item.head }}
                    </div>
                    <div class="faq__accordion-head-indicator">
                      <icon
                        class="faq__accordion-head-indicator-icon"
                        :class="{
                          'faq__accordion-head-indicator-icon--active':
                            accordion.isOpen,
                        }"
                        :name="$icons.chevronDown"
                      />
                    </div>
                  </div>
                </template>
                <template #default>
                  <div class="faq__accordion-body">
                    <vue-markdown
                      class="faq__accordion-body-text"
                      :source="item.body"
                      :plugins="plugins"
                      :options="{
                        html: true,
                        breaks: true,
                        typographer: true,
                        linkify: true,
                      }"
                    />
                  </div>
                </template>
              </accordion>
              <div class="faq__divider" />
            </div>
          </template>
        </div>
      </collapse>

      <button
        class="faq__show-btn"
        @click="isAllQuestionsShown = !isAllQuestionsShown"
      >
        {{ isAllQuestionsShown ? $t('faq.hide-more-btn') : $t('faq.more-btn') }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Accordion, Collapse, Icon } from '@/common'
import VueMarkdown from 'vue-markdown-render'
import MarkdownItAnchor from 'markdown-it-anchor'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const questionsToShow = 5

const isAllQuestionsShown = ref(false)

const plugins = [MarkdownItAnchor]

const { tm } = useI18n({ useScope: 'global' })

// faq.items stored as array in locale messages; tm returns typed value
const faqContent = computed(() => {
  const items = tm('faq.items') as Array<{ q: string; a: string }> | undefined
  if (!Array.isArray(items)) return []
  return items.map(i => ({ head: i.q, body: i.a }))
})
</script>

<style lang="scss">
.faq {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: toRem(68) 0;
}

.faq__title {
  text-align: center;
}

.faq__content {
  display: flex;
  flex-direction: column;
  margin: toRem(48) auto 0;
  max-width: toRem(840);
  width: 100%;
  border: toRem(1) solid rgba(0, 0, 0, 0.05);
  border-radius: toRem(8);
  padding: toRem(24);
}

.faq__item {
  display: flex;
  flex-direction: column;
}

.faq__accordion {
  width: 100%;
}

.faq__accordion-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: toRem(20) 0;
  font-size: toRem(16);
  line-height: 1.25;
  font-weight: 700;
}

.faq__accordion-head-indicator-icon {
  transition: transform 0.3s;

  @include static-size(toRem(16));

  &--active {
    transform: rotate(180deg);
  }
}

.faq__accordion-body {
  padding-bottom: toRem(20);
}

.faq__accordion-body-text {
  font-size: toRem(14);
  font-weight: 400;
  line-height: 1.4;
  color: var(--text-primary-main);

  a {
    font: inherit;
    color: inherit;
    text-decoration: underline;
    font-weight: 600;
  }

  p {
    font: inherit;
    color: inherit;
  }
}

.faq__divider {
  width: 100%;
  height: toRem(1);
  background: rgba(var(--black-rgb), 0.1);
}

.faq__show-btn {
  font-family: 'Vazir';
  align-self: center;
  color: var(--text-primary-main);
  font-size: toRem(16);
  font-weight: 400;
  line-height: 1.2;
  margin: toRem(24) auto;
}
</style>
