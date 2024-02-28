<script lang='ts' setup>
const deaultAvatarUrl = 'https://place.dog/300/200'
const isShow = ref(true)
const { isLoading } = useImage({ src: deaultAvatarUrl })
const file = shallowRef()
const uploadObjecturl = useObjectUrl(file)
const imageInput = ref<HTMLInputElement | null>(null)
const { t } = useI18n()
function onFileChange(event: any) {
  file.value = event.target.files[0]
  isShow.value = true
}

const cptAvatarUrl = computed(() => {
  return uploadObjecturl.value || deaultAvatarUrl
})
</script>

<template>
  <div class="relative overflow-visible">
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center">
      <svg class="text-muted-foreground h-8 w-8 animate-spin" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" d="M4 12a8 8 0 018-8V2.5" stroke="currentColor" stroke-width="4" />
      </svg>
    </div>
    <img v-else-if="isShow" v-bind="$attrs" :src="cptAvatarUrl">
    <!-- hover uploader -->
    <div
      class="abs-ct h-full w-full rounded-lg bg-white/30 opacity-0 transition-opacity duration-300"
      hover="bg-gray-50 opacity-80"
    >
      <input ref="imageInput" type="file" accept="image/*" class="hidden" @change="onFileChange">
      <div class="absolute inset-0 h-full h-full w-full w-full flex flex-col cursor-pointer items-center justify-center gap-y-2" @click="imageInput?.click()">
        <i i-carbon-upload class="text-3xl" />
        <span class="text-center text-xl">{{ t('button.upload') }}</span>
      </div>
      <!-- close -->
      <div
        class="abs-rt z-20 size-8 flex-cc cursor-pointer transition-opacity" @click="isShow = false"
      >
        <i i-carbon-close class="text-6xl" />
      </div>
    </div>
  </div>
</template>
