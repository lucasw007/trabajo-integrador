import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import { RouterApp } from './router/RouterApp';
import { UserProvider } from './context/UserContext';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> 
      <UserProvider>
        <RouterApp />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);

