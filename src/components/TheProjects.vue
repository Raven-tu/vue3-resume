<script lang='ts' setup>
import { storeToRefs } from 'pinia'

const { t } = useI18n()

const { currentData } = storeToRefs(useResumestore())
const projectsData = computed({
  get: () => currentData.value.projects,
  set: (value) => {
    currentData.value.projects = value
  },
})
</script>

<template>
  <section class="print-force-new-page min-h-0 flex flex-col scroll-mb-16 gap-y-3">
    <h2 class="text-xl font-bold">
      {{ t('title.projects') }}
    </h2>
    <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-3 print:grid-cols-2 -mx-3 print:gap-2">
      <div
        v-for="(item, index) in projectsData" :key="index"
        class="bg-card text-card-foreground border-muted flex flex-col overflow-hidden border rounded-lg p-3"
      >
        <div class="flex flex-col space-y-1.5">
          <div class="space-y-1">
            <h3 class="text-base font-semibold tracking-tight">
              <a :href="item.link" target="_blank" class="inline-flex items-center gap-1 hover:underline">{{ item.name
              }}<!-- --> <span class="size-1 rounded-full bg-green-500" /></a>
            </h3>
            <div class="hidden text-xs font-mono underline print:visible">
              {{ item.link }}
            </div>
            <p class="text-muted-foreground text-xs font-mono">
              {{ item.description }}
            </p>
          </div>
        </div>
        <div class="text-muted-foreground mt-auto flex text-pretty text-sm font-mono">
          <div class="mt-2 flex flex-wrap gap-1">
            <div
              v-for="(tag, idx) in item.tags" :key="idx"
              class="text-secondary-foreground hover:bg-secondary/60 focus:ring-ring bg-secondary inline-flex items-center border border-transparent rounded-md px-1 py-0 text-nowrap text-[10px] font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              dark="bg-gray-700"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang='less' scoped>
</style>
