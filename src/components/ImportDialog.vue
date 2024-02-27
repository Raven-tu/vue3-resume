<script lang='ts' setup>
import { useI18n } from 'vue-i18n'
import { onClickOutside } from '@vueuse/core'
import { storeToRefs } from 'pinia'

const { copy, isSupported } = useClipboard()

const { t } = useI18n()

const { currentData } = storeToRefs(useResumestore())
const { importData } = useResumestore()
usePermission('clipboard-read')
usePermission('clipboard-write')
const dialogVisible = inject('dialogvisible', ref(false))

const strCurrentData = computed({
  get: () => JSON.stringify(currentData.value, null, 2),
  set: (value) => {
    try {
      currentData.value = JSON.parse(value)
    }
    catch (e) {
      console.error(e)
    }
  },
})
const target = ref(null)
onClickOutside(target, () => {
  dialogVisible.value = false
})

function doImport() {
  importData(JSON.parse(strCurrentData.value))
  dialogVisible.value = false
}
</script>

<template>
  <div
    ref="target" dark="bg-gray-800"
    class="fixed left-50% top-50% z-20 h-640px w-80% border-gray-300 bg-light-400 p-8 shadow-md -translate-50% space-y-4"
    :class="dialogVisible ? 'block' : 'hidden'"
  >
    <textarea v-model="strCurrentData" class="h-90% w-full" placeholder="Paste your JSON here" />

    <div class="flex-cc gap-x-4">
      <button class="btn" @click="doImport">
        {{ t('button.import') }}
      </button>

      <button class="btn" :disabled="isSupported" @click="copy(`123`)">
        {{ t('button.copy') }}
      </button>
    </div>
  </div>
</template>
