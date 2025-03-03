<script setup lang="ts">
const { cover } = useAppConfig()

useSeoMeta({
  ogImage: cover,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="sm:pb-10 sm:pt-6">
    <Html lang="en" />
    <NuxtLoadingIndicator />
    <AppNavbar />
    <NuxtPage />

    <UNotifications />
  </div>
</template>
