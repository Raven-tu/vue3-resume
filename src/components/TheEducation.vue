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
            <TextUpdater v-model="item.name" w-full />
          </h3>
          <div class="text-sm text-gray-500 tabular-nums">
            <TextUpdater v-model="item.start_date" w-14 />
            <!--  --> - <!--  -->
            <TextUpdater v-model="item.end_date" w-14 />
          </div>
        </div>
      </div>
      <div class="text-muted-foreground mt-2 text-pretty text-sm font-mono">
        <TextUpdater v-model="item.degree" w-full />
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
</style>
