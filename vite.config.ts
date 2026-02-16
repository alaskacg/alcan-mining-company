import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/alcan-mining-company/',
  build: { outDir: 'dist', assetsDir: 'assets', sourcemap: false },
})
