import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages 仓库名为 project 时需加 base 路径；Vercel 保持默认 /
  base: process.env.BASE_PATH || '/',
  plugins: [vue()],
})
