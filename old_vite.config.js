import { defineConfig } from 'vite'

// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

const path = require("path");

export default defineConfig({
  base: 'https://olayita15.github.io/redecommerce/',
  plugins: [
    vue({ 
      template: { transformAssetUrls }
    }),
    
    vuetify({
      autoImport: true,
    }),
  ],
  server: {
    port: 6060,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: { 'process.env': {} },
  build: {
    outDir: '/usr/src/app/my-app/dist',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/_variables.scss";`,
      },
    },
  },
})
