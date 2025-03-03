// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    '@nuxtjs/seo',
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

  // seo module options 預設全關閉
  ogImage: {
    enabled: false,
  },
  sitemap: {
    enabled: false,
  },
  robots: {
    enabled: false,
  },
  seo: { // seo utils
    enabled: false,
  },
  schemaOrg: {
    enabled: false,
  },
  linkChecker: {
    enabled: false,
  },
})
