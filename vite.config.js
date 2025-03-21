// Config file

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  server: {
    port: 3000,
    open: true,
    historyApiFallback: true
  }
});
