import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/components/index.css';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
