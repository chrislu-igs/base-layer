import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: '0.0.0.0',
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    asyncContext: true,
  },

  extends: ['..'],
  modules: ['@nuxt/eslint'],

  eslint: {
    config: {
      // Use the generated ESLint config for lint root project as well
      rootDir: fileURLToPath(new URL('..', import.meta.url)),
      standalone: false,
    },
  },

  compatibilityDate: '2025-02-27'
})