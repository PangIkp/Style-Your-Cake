import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App'; // ใช้ named import
import { CartProvider } from './components/CartContext';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);

root.render(
  <CartProvider>
    <App />
  </CartProvider>
);

