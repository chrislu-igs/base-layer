// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@vueuse/nuxt',
  ],
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    asyncContext: true,
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: '',
      deployEnv: '',
    },
  },
})
