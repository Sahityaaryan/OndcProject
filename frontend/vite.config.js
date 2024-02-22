import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/user':{
        target:'https://ondcproject.onrender.com',
        changeOrigin:true,
      }
    }
  },
  plugins: [react()],
})
