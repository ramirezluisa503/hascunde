import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/components/index.css';
import App from '../src/components/App';
import './assets/fonts/fonts.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
