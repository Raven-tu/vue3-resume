<script lang='ts' setup>
import { storeToRefs } from 'pinia'

const { currentData } = storeToRefs(useResumestore())
const aboutData = computed({
  get: () => currentData.value.about,
  set: (value) => {
    currentData.value.about = value
  },
})
</script>

<template>
  <div class="flex items-center justify-between container">
    <div class="info flex-1 space-y-1.5">
      <h1 class="font-weight-400 text-2xl font-bold">
        <TextUpdater v-model="aboutData.name" w-full />
      </h1>
      <h2 class="text-muted-foreground max-w-md text-pretty text-sm font-mono">
        <TextUpdater v-model="aboutData.role" :row="2" w-full />
      </h2>
      <span class="text-muted-foreground max-w-md items-center text-pretty text-xs font-mono">
        <TextUpdater v-model="aboutData.location" w-full />
      </span>
      <footer class="contack">
        <TextUpdater v-model="aboutData.contack" w-full />
      </footer>
    </div>
    <figure class="relative size-28 flex shrink-0 overflow-hidden rounded-xl">
      <div class="aspect-square h-full w-full" />
      <!-- <img src="/me.webp" alt="Miguel Ángel Durán" > -->
    </figure>
  </div>
</template>

<style lang='less' scoped>
</style>
