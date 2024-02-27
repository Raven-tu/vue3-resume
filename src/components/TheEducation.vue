<script lang='ts' setup>
import { storeToRefs } from 'pinia'

const { t } = useI18n()

const { currentData } = storeToRefs(useResumestore())
const educationData = computed({
  get: () => currentData.value.education,
  set: (value) => {
    currentData.value.education = value
  },
})
</script>

<template>
  <div class="min-h-0 flex flex-col gap-y-2">
    <h2 class="text-xl font-bold">
      {{ t('title.education') }}
    </h2>
    <div v-for="(item, index) in educationData" :key="index" class="bg-card text-card-foreground rounded-lg">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="font-semibold leading-none">
            {{ item.name }}
          </h3>
          <div class="text-sm text-gray-500 tabular-nums">
            {{ `${item.start_date} - ${item.end_date}` }}
          </div>
        </div>
      </div>
      <div class="text-muted-foreground mt-2 text-pretty text-sm font-mono">
        {{ item.degree }}
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
</style>
