import path from 'node:path'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), AutoImport(
    { include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    ], imports: [
      'react',
      'react-router-dom',
      'react-i18next',
    ], dts: './auto-imports.d.ts' },
  )],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 配置 @ 指向 src 目录
    },
  },
})
