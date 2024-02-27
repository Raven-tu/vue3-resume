<script lang='ts' setup>
const { t } = useI18n()
</script>

<template>
  <div class="min-h-0 flex flex-col gap-y-2">
    <h2 class="text-xl font-bold">
      {{ t('title.education') }}
    </h2><div class="bg-card text-card-foreground rounded-lg">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="font-semibold leading-none">
            Wrocław University of Technology
          </h3><div class="text-sm text-gray-500 tabular-nums">
            2007<!-- --> - <!-- -->2010
          </div>
        </div>
      </div><div class="text-muted-foreground mt-2 text-pretty text-sm font-mono">
        Bachelor's Degree in Control systems engineering and Robotics
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped></style>
