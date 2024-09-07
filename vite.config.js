import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ToDoApp/', // Ensure this matches your GitHub Pages repository name
  plugins: [react()],
})
