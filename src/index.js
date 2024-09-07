import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { InventoryProvider } from './context/InventoryContext';
import { OrderProvider } from './context/OrderContext';

ReactDOM.render(
  <React.StrictMode>
    <InventoryProvider>
      <OrderProvider>
        <App />
      </OrderProvider>
    </InventoryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
