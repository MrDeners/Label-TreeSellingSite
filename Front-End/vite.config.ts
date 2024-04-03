import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `@import "./src/assets/styles/_variables.sass"\n` + `@import "./src/assets/styles/_mixins.sass"`
      }
    }
  }
})
