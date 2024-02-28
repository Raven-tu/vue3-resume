<script lang='ts' setup>
import { onClickOutside } from '@vueuse/core'

const { modelValue } = defineModels<{
  modelValue: string | number
}>()
const { textarea } = useTextareaAutosize()
const isChanging = ref(false)
const target = ref(null)
onClickOutside(target, _event => isChanging.value = false)
</script>

<template>
  <span ref="target">
    <textarea
      v-if="isChanging"
      ref="textarea"
      v-bind="$attrs"
      v-model="modelValue"
      autofocus
      class="w-max-650px resize-none text-center"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
    />
    <span v-show="!isChanging" hover="underline" @click="isChanging = true">{{ `${modelValue}` }}</span>
  </span>
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
