<script lang='ts' setup>
const { t } = useI18n()
</script>

<template>
  <section class="min-h-0 flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">
      {{ t('title.experience') }}
    </h2>
    <div class="bg-card text-card-foreground rounded-lg">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            <a class="hover:underline" href="https://parabol.co">Parabol</a><span class="inline-flex gap-x-1">
              <div
                class="bg-secondary text-secondary-foreground hover:bg-secondary/60 focus:ring-ring inline-flex items-center border border-transparent rounded-md px-2 py-0.5 text-nowrap align-middle text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Remote</div>
            </span>
          </h3>
          <div class="text-sm text-gray-500 tabular-nums">
            2021<!-- --> - <!-- -->2024
          </div>
        </div>
        <h4 class="text-sm leading-none font-mono">
          Senior Full Stack Developer
        </h4>
      </div>
      <div class="text-muted-foreground mt-2 text-pretty text-xs font-mono">
        Implemented new features, led squad, worked on improving the way developers ship the code, started migration from
        Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL
      </div>
    </div>
    <div class="bg-card text-card-foreground rounded-lg">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            <a class="hover:underline" href="https://clevertech.biz">Clevertech</a><span class="inline-flex gap-x-1">
              <div
                class="focus:ring-ring bg-secondary text-secondary-foreground hover:bg-secondary/60 inline-flex items-center border border-transparent rounded-md px-2 py-0.5 text-nowrap align-middle text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Remote</div>
            </span>
          </h3>
          <div class="text-sm text-gray-500 tabular-nums">
            2015<!-- --> - <!-- -->2021
          </div>
        </div>
        <h4 class="text-sm leading-none font-mono">
          Lead Android Developer → Full Stack Developer
        </h4>
      </div>
      <div class="text-muted-foreground mt-2 text-pretty text-xs font-mono">
        Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming
        application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL
      </div>
    </div>
    <div class="bg-card text-card-foreground rounded-lg">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            <a class="hover:underline" href="https://bsgroup.eu/">Jojo Mobile</a><span class="inline-flex gap-x-1" />
          </h3>
          <div class="text-sm text-gray-500 tabular-nums">
            2012<!-- --> - <!-- -->2015
          </div>
        </div>
        <h4 class="text-sm leading-none font-mono">
          Android Developer → Lead Android Developer
        </h4>
      </div>
      <div class="text-muted-foreground mt-2 text-pretty text-xs font-mono">
        Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora,
        PolskaPress
      </div>
    </div>
    <div class="bg-card text-card-foreground rounded-lg">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            <a class="hover:underline" href="https://www.nokia.com">Nokia Siemens Networks</a><span
              class="inline-flex gap-x-1"
            />
          </h3>
          <div class="text-sm text-gray-500 tabular-nums">
            2010<!-- --> - <!-- -->2012
          </div>
        </div>
        <h4 class="text-sm leading-none font-mono">
          C/C++ Developer
        </h4>
      </div>
      <div class="text-muted-foreground mt-2 text-pretty text-xs font-mono">
        Creating and testing software for LTE base stations
      </div>
    </div>
  </section>
</template>

<style lang='less' scoped>
</style>
