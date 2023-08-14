import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import externals from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['three'], // Exclude 'three' package
  },
  base: 'https://tpspace.github.io/3D-Portfolio/'
})
