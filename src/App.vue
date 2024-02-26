<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Resume',
  meta: [
    {
      name: 'description',
      content: 'Resume Template',
    },
    {
      name: 'theme-color',
      content: () => isDark.value ? '#00aba9' : '#ffffff',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: 'https://github.githubassets.com/favicons/favicon.png',
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
