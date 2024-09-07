import React, { createContext, useState, useContext } from 'react';

// Create context
export const SupplierContext = createContext();

// Create provider component
export const SupplierProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);

  const addSupplier = (supplier) => {
    setSuppliers((prevSuppliers) => [...prevSuppliers, supplier]);
  };

  return (
    <SupplierContext.Provider value={{ suppliers, addSupplier }}>
      {children}
    </SupplierContext.Provider>
  );
};

// Custom hook for using supplier context
export const useSupplierContext = () => useContext(SupplierContext);
