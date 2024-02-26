import Layouts from 'vite-plugin-vue-layouts';
<script setup lang="ts">
import TheExperience from '~/components/TheExperience.vue'
import TheSkills from '~/components/TheSkills.vue'
import TheEducation from '~/components/TheEducation.vue'
import TheHeader from '~/components/TheHeader.vue'

defineOptions({
  name: 'IndexPage',
})
// const user = useUserStore()
// const name = ref(user.savedName)

// const router = useRouter()
// function go() {
//   if (name.value)
//     router.push(`/hi/${encodeURIComponent(name.value)}`)
// }

// const { t } = useI18n()

const componentList = [
  TheExperience,
  TheSkills,
  TheEducation,
]
</script>

<template>
  <div class="mx-auto max-w-2xl w-full bg-white space-y-8 print:space-y-6">
    <TheHeader />
    <section v-for="(name, index) in componentList" :key="index" class="min-h-0 flex flex-col gap-y-3">
      <component :is="name" />
    </section>
  </div>
</template>
