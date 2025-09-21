import resources from '@/localization/resources'
import { createI18n } from 'vue-i18n'

const STORAGE_KEY = 'locale'
const DEFAULT_LOCALE = 'fa'

// Determine starting locale: stored preference or browser language else default
const browserLang =
  typeof navigator !== 'undefined'
    ? navigator.language.split('-')[0]
    : undefined
const supported = Object.keys(resources.messages)
const initial =
  (typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY)) ||
  (browserLang && supported.includes(browserLang) ? browserLang : undefined) ||
  DEFAULT_LOCALE

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: initial,
  fallbackLocale: DEFAULT_LOCALE,
  ...resources,
})

// Dev helper: warn on missing keys
if (import.meta && import.meta.env && import.meta.env.DEV) {
  const originalT = i18n.global.t
  i18n.global.t = ((...all: unknown[]) => {
    const result = (originalT as (...args: unknown[]) => unknown)(...all)
    const key = all[0]
    if (typeof result === 'string' && result === key) {
      // eslint-disable-next-line no-console
      console.warn('[i18n] Missing translation key:', key)
    }
    return result
  }) as typeof originalT
}

export const setLocale = (l: keyof typeof resources.messages) => {
  if (!supported.includes(l)) return
  i18n.global.locale.value = l
  try {
    localStorage.setItem(STORAGE_KEY, l)
  } catch (e) {
    // ignore storage errors (private mode, etc.)
  }
  // adjust document direction if needed
  if (typeof document !== 'undefined') {
    const dir = l === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', l)
  }
}

// Initialize direction on load
if (typeof document !== 'undefined') {
  const dir = initial === 'fa' ? 'rtl' : 'ltr'
  document.documentElement.setAttribute('dir', dir)
  document.documentElement.setAttribute('lang', initial)
}
