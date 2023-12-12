import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// vite.config.js
export default {
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      'react-router-dom': 'react-router-dom/dist/react-router-dom.min.js',
    },
  },
};
