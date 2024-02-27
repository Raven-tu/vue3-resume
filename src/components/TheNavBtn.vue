<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}

function printingPage() {
  window.print()
}
</script>

<template>
  <nav flex="~ gap-4" m-4 justify-center text-xl>
    <!-- <button icon-btn :title="t('button.import')" @click="toggleDark()">
      <div i="carbon-document-import" />
    </button>

    <button icon-btn :title="t('button.export')" @click="toggleDark()">
      <div i="carbon-document-export" />
    </button> -->

    <button icon-btn :title="t('button.printer')" @click="printingPage()">
      <div i="carbon-printer" />
    </button>

    <a flex-cc icon-btn space-x-1 :title="t('button.toggle_langs')" @click="toggleLocales()">
      <span text-sm>{{ t('language') }}</span>
      <i i-carbon-language />
    </a>

    <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <a icon-btn rel="noreferrer" href="https://github.com/Raven-tu/vue3-resume" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>
  </nav>
</template>
