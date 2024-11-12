import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';
import fs from 'fs';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('ca.key'),
      cert: fs.readFileSync('ca.crt'),
    },
    host: true, // Optional, to allow access from other devices
  },
})
