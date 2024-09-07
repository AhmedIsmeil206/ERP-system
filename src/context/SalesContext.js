import React, { createContext, useState } from 'react';

export const SalesContext = createContext();

const SalesProvider = ({ children }) => {
  const [salesOrders, setSalesOrders] = useState([]);

  const addSalesOrder = (order) => {
    setSalesOrders((prev) => [...prev, order]);
  };

  return (
    <SalesContext.Provider value={{ salesOrders, addSalesOrder }}>
      {children}
    </SalesContext.Provider>
  );
};

export default SalesProvider;
