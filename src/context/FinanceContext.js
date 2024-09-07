import React, { createContext, useContext, useState } from 'react';

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [budget, setBudget] = useState(localStorage.getItem('budget') || 0);
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
    localStorage.setItem('transactions', JSON.stringify([...transactions, transaction]));
  };

  return (
    <FinanceContext.Provider value={{ budget, setBudget, transactions, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinanceContext = () => {
  const context = useContext(FinanceContext);
  if (context === undefined) {
    throw new Error('useFinanceContext must be used within a FinanceProvider');
  }
  return context;
};
