import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        projects: resolve(root, 'projects', 'index.html'),
        work: resolve(root, 'work', 'index.html'),
        personal: resolve(root, 'personal', 'index.html'),
        contacts: resolve(root, 'contacts', 'index.html')
      }
    }
  }
})
