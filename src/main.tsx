import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { UnitsApp } from './UnitsApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UnitsApp />
  </StrictMode>,
);
