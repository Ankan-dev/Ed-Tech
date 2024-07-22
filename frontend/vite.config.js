import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/app':'http://localhost:3000',
    }
  },
  plugins: [react()],
})
