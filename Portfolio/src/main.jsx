import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App.jsx';

// import "@fontsource/outfit";
// import "@fontsource/roboto";
import "@fontsource/pt-serif";

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
