import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 4000, // Usa el puerto asignado por Render o el 4000 como alternativa
    host: true, // Esto asegura que Vite esté escuchando en todas las interfaces de red
  },
});
