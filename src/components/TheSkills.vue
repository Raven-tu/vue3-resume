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

const skillList = ref([
  { name: 'JavaScript', icon: 'i-vscode-icons-file-type-js-official' },
  { name: 'TypeScript', icon: 'i-vscode-icons-file-type-typescript-official' },
  { name: 'React/Next.js/Remix', icon: 'i-vscode-icons-file-type-reactjs' },
  { name: 'Node.js', icon: 'i-vscode-icons-file-type-node' },
  { name: 'GraphQL', icon: 'i-vscode-icons-file-type-graphql' },
  { name: 'Relay', icon: 'i-vscode-icons-folder-type-library' },
  { name: 'WebRTC', icon: '' },
  { name: 'Docker', icon: 'i-vscode-icons-file-type-docker2' },
  { name: 'Kubernetes', icon: 'i-vscode-icons-folder-type-kubernetes' },
  { name: 'MongoDB', icon: 'i-vscode-icons-folder-type-mongodb-opened' },
  { name: 'MySQL', icon: 'i-vscode-icons-file-type-mysql' },
  { name: 'Redis', icon: 'i-vscode-icons-folder-type-redis' },
  { name: 'Nginx', icon: 'i-vscode-icons-file-type-nginx' },
  { name: 'AWS', icon: 'i-vscode-icons-folder-type-aws' },
  { name: 'GCP', icon: 'i-vscode-icons-folder-type-gcp' },
  { name: 'Azure', icon: 'i-vscode-icons-folder-type-azure' },
  { name: 'Git', icon: 'i-vscode-icons-folder-type-git' },
  { name: 'GitHub', icon: 'i-vscode-icons-folder-type-github' },
  { name: 'GitLab', icon: 'i-vscode-icons-folder-type-gitlab' },
  { name: 'Vue', icon: 'i-vscode-icons-file-type-vue' },
  { name: 'Nuxt', icon: 'i-vscode-icons-file-type-nuxt' },
])

const skillsIndex = skillList.value.map(item => item.name)

function getSkillIcon(name: string) {
  const index = skillsIndex.indexOf(name)
  return index > -1 ? skillList.value[index].icon : ''
}
</script>

<template>
  <div class="min-h-0 flex flex-col gap-y-2">
    <h2 class="text-xl font-bold">
      {{ t('title.skills') }}
    </h2>
    <div class="flex flex-wrap gap-1">
      <div
        v-for="(item, index) in skillsData" :key="index" dark="bg-gray-700"
        class="text-secondary-foreground hover:bg-secondary/60 focus:ring-ring inline-flex items-center border border-transparent rounded-md bg-gray-200 px-2 py-0.5 text-nowrap align-middle text-xs font-semibold font-mono transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <span class="flex-cc gap-x-2">
          <i v-show="getSkillIcon(item)" class="block h-4 w-4" :class="getSkillIcon(item)" />
          <span> {{ item }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
</style>
