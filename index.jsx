import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import App from './app.jsx'; // Importa el componente App desde el archivo App.jsx

const root = document.getElementById('root'); // Obtiene el elemento root del DOM

// Crea el root de la aplicación utilizando createRoot
const rootElement = createRoot(root);

// Renderiza la aplicación dentro del rootElement
rootElement.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);