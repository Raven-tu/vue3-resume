<script lang='ts' setup>
const { t } = useI18n()

const experienceList = ref([
  {
    company: 'Parabol',
    link: 'https://parabol.co',
    location: 'Remote',
    start: 2021,
    end: 2024,
    position: 'Senior Full Stack Developer',
    description: 'Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL',
  },
  {
    company: 'Clevertech',
    link: 'https://clevertech.biz',
    location: 'Remote',
    start: 2015,
    end: 2021,
    position: 'Lead Android Developer → Full Stack Developer',
    description: 'Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL',
  },
  {
    company: 'Jojo Mobile',
    link: 'https://bsgroup.eu/',
    location: '',
    start: 2012,
    end: 2015,
    position: 'Android Developer → Lead Android Developer',
    description: 'Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress',
  },
  {
    company: 'Nokia Siemens Networks',
    link: 'https://www.nokia.com',
    location: '',
    start: 2010,
    end: 2012,
    position: 'C/C++ Developer',
    description: 'Creating and testing software for LTE base stations',
  },
])
</script>

<template>
  <div class="min-h-0 flex flex-col gap-y-2">
    <h2 class="text-xl font-bold">
      {{ t('title.experience') }}
    </h2>
    <!-- list  -->
    <div v-for="(item, index) in experienceList" :key="index" class="bg-card text-card-foreground rounded-lg">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <h3 class="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
            <a :href="item.link" class="hover:underline">{{ item.company }}</a><span class="inline-flex gap-x-1">
              <div
                v-show="item.location.length"
                class="text-secondary-foreground hover:bg-secondary/60 focus:ring-ring inline-flex items-center border border-transparent rounded-md bg-gray-200 px-2 py-0.5 text-nowrap align-middle text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                dark="bg-gray-700"
              >
                {{ item.location }}
              </div>
            </span>
          </h3>
          <div class="text-sm text-gray-500 tabular-nums">
            {{ item.start }} - {{ item.end }}
          </div>
        </div>
        <h4 class="text-sm leading-none font-mono">
          {{ item.position }}
        </h4>
      </div>
      <div class="text-muted mt-2 text-pretty text-xs font-mono">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
</style>
