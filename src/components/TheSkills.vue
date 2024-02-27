import { s } from 'unplugin-vue-router/dist/defineLoader-bde635fd';
<script lang='ts' setup>
import { storeToRefs } from 'pinia'

const { t } = useI18n()

const { currentData } = storeToRefs(useResumestore())
const skillsData = computed({
  get: () => currentData.value.skills,
  set: (value) => {
    currentData.value.skills = value
  },
})
</script>

<template>
  <div class="min-h-0 flex flex-col gap-y-2">
    <h2 class="text-xl font-bold">
      {{ t('title.skills') }}
    </h2>
    <div class="flex flex-wrap gap-1">
      <div
        v-for="(item, index) in skillsData" :key="index"
        dark="bg-gray-700"
        class="focus:ring-ring text-secondary-foreground hover:bg-secondary/60 inline-flex items-center border border-transparent rounded-md bg-gray-200 px-2 py-0.5 text-nowrap align-middle text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <span class="flex-cc gap-x-2">
          <i v-show="item.icon" class="block h-4 w-4" :class="item.icon" />
          <span> {{ item.name }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
</style>
