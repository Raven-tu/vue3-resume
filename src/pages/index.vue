<script setup lang="ts">
import TheExperience from '~/components/TheExperience.vue'
import TheSkills from '~/components/TheSkills.vue'
import TheEducation from '~/components/TheEducation.vue'
import TheHeader from '~/components/TheHeader.vue'
import TheProjects from '~/components/TheProjects.vue'

defineOptions({
  name: 'IndexPage',
})

const componentList = [
  TheExperience,
  TheSkills,
  TheEducation,
  TheProjects,
]
</script>

<template>
  <div class="max-w-2xl w-full space-y-3">
    <TheHeader />
    <section v-for="(name, index) in componentList" :key="index" class="min-h-0 flex flex-col gap-y-3">
      <component :is="name" />
    </section>
  </div>
</template>
