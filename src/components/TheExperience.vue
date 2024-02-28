<script lang='ts' setup>
import { storeToRefs } from 'pinia'

const { t } = useI18n()

const { currentData } = storeToRefs(useResumestore())
const experienceData = computed({
  get: () => currentData.value.experience,
  set: (value) => {
    currentData.value.experience = value
  },
})
</script>

<template>
  <div class="min-h-0 flex flex-col gap-y-2">
    <h2 class="text-xl font-bold">
      {{ t('title.experience') }}
    </h2>
    <!-- list  -->
    <div v-for="(item, index) in experienceData" :key="index" class="bg-card text-card-foreground rounded-lg">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            <TextUpdater v-model="item.company" />
            <span class="inline-flex gap-x-1">
              <div
                v-show="item.location.length"
                class="text-secondary-foreground hover:bg-secondary/60 focus:ring-ring inline-flex items-center border border-transparent rounded-md bg-gray-200 px-2 py-0.5 text-nowrap align-middle text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                dark="bg-gray-700"
              >
                <TextUpdater v-model="item.location" w-12 />
              </div>

              <a flex-cc icon-btn space-x-1 :href="item.link" target="_blank" print="hidden">
                <i i-carbon-link />
              </a>
            </span>
          </h3>
          <div class="text-sm text-gray-500 tabular-nums">
            <TextUpdater v-model="item.start" w-14 />
            <!--  --> - <!--  -->
            <TextUpdater v-model="item.end" w-14 />
          </div>
        </div>
        <h4 class="text-sm leading-none font-mono">
          <TextUpdater v-model="item.position" w-full />
        </h4>
      </div>
      <div class="text-muted mt-2 text-pretty text-xs font-mono">
        <TextUpdater v-model="item.description" w-full :row="3" />
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
</style>
