import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Si tu repositorio en GitHub se llama diferente, cambia el valor de "base"
// Ejemplo: si el repo se llama "mi-portafolio", pon base: "/mi-portafolio/"
// Si usas un dominio personalizado, puedes dejar base: "/"
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/portafolio-codepdbh/',
})
