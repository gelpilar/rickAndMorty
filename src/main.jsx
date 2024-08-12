import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Crea el root de la aplicación
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación en el root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);