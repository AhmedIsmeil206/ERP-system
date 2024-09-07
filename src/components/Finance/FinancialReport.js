// FinancialReport.js
import React from 'react';
import { useFinanceContext } from '../../context/FinanceContext';

const FinancialReport = () => {
  const { transactions } = useFinanceContext();
  const income = transactions.filter(t => t.type === 'income').reduce((acc, t) => acc + t.amount, 0);
  const expense = transactions.filter(t => t.type === 'expense').reduce((acc, t) => acc + t.amount, 0);
  const balance = income - expense;

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Financial Report</h2>
      <p><strong>Total Income:</strong> ${income.toFixed(2)}</p>
      <p><strong>Total Expense:</strong> ${expense.toFixed(2)}</p>
      <p><strong>Balance:</strong> ${balance.toFixed(2)}</p>
    </div>
  );
};

export default FinancialReport;
