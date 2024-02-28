<script lang='ts' setup>
import { onClickOutside } from '@vueuse/core'

const { modelValue } = defineModels<{
  modelValue: string[]
}>()
const { textarea } = useTextareaAutosize()
const isChanging = ref(false)
const target = ref(null)
onClickOutside(target, _event => isChanging.value = false)

const skillsData = computed({
  get: () => modelValue.value as string[],
  set: (value) => {
    modelValue.value = value.toString().split(',')
  },
})
</script>

<template>
  <div ref="target" @click="isChanging = true">
    <textarea
      v-if="isChanging"
      ref="textarea"
      v-model="skillsData"
      autofocus
      class="w-max-650px w-full resize-none text-center"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    />
    <slot v-if="!isChanging" />
  </div>
</template>

<style scoped>
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>
