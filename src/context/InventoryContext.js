// InventoryContext.js
import React, { createContext, useContext, useState } from 'react';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState(() => {
    const savedInventory = localStorage.getItem('inventory');
    return savedInventory ? JSON.parse(savedInventory) : [];
  });

  const addInventoryItem = (item) => {
    setInventory(prev => {
      const updatedInventory = [...prev, item];
      localStorage.setItem('inventory', JSON.stringify(updatedInventory));
      return updatedInventory;
    });
  };

  const deleteInventoryItem = (id) => {
    setInventory(prev => {
      const updatedInventory = prev.filter(item => item.id !== id);
      localStorage.setItem('inventory', JSON.stringify(updatedInventory));
      return updatedInventory;
    });
  };

  const getInventory = () => inventory;

  return (
    <InventoryContext.Provider value={{ inventory, setInventory, addInventoryItem, deleteInventoryItem, getInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventoryContext = () => useContext(InventoryContext);
