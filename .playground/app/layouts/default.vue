<script setup>
import { useAppConfig } from '#app/config'
import { useHead, useHeadSafe } from '#imports'

const appConfig = useAppConfig()
useHead({
  htmlAttrs: {
    // scrollbar-w-2 要放在 scrollbar 前面
    class: ' scrollbar-thumb-primary-300 scrollbar-w-2 scrollbar',
  },
})
useHeadSafe({
  titleTemplate: titleChunk => (titleChunk ? `${titleChunk} - ${appConfig.siteName}` : appConfig.siteName),
})
</script>

<template>
  <div class="m-auto py-10 sm:px-8">
    <main class="prose mx-auto max-w-none px-4">
      <slot>
        <h1 class="text-2xl">
          Page not found
        </h1>
      </slot>
    </main>
  </div>
</template>
