import React from 'react';
import { useFinanceContext } from '../../context/FinanceContext';

const BudgetDisplay = () => {
  const { budget, transactions } = useFinanceContext();
  const totalSpent = transactions.reduce((total, transaction) => total + transaction.amount, 0);
  const remainingBudget = budget - totalSpent;

  return (
    <div className="p-6 bg-gray-50 rounded shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Budget Overview</h2>
      <p className="text-gray-600">Budget: ${budget.toFixed(2)}</p>
      <p className="text-gray-600">Total Spent: ${totalSpent.toFixed(2)}</p>
      <p className="text-gray-600">Remaining Budget: ${remainingBudget.toFixed(2)}</p>
    </div>
  );
};

export default BudgetDisplay;
