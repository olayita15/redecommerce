import { defineConfig } from 'vite'

// Plugins
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'


const path = require("path");
export default defineConfig({
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
  preview: {
    port: 6060,
  },
  define: { 'process.env': {} },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: '../dist'
  },
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "@/assets/sass/_variables.sass"
@import "@/assets/sass/global.sass"

`
      }
    },
},
});