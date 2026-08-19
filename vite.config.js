import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this repo at /<repo-name>/, Vercel serves it at the domain root.
  base: process.env.GITHUB_PAGES ? '/portfolio/' : '/',
  plugins: [react(), tailwindcss()],
})
