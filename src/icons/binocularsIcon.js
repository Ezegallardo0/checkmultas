const binocularsIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-binoculars"
  >
    <path d="M10 10h4" />
    <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
    <path d="M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z" />
    <path d="M22 16 L2 16" />
    <path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" />
    <path d="M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3" />
  </svg>
`;

// Función para insertar el ícono en el DOM en un contenedor específico
export function insertBinocularsIcon(containerId) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = binocularsIcon;
  }
}

// Exporta el SVG como cadena para uso en React o JSX
export default binocularsIcon;