import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4000, // Usa el puerto de entorno o el 4000 por defecto
  },
});
