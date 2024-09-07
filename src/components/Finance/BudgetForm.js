import React, { useState } from 'react';
import { useFinanceContext } from '../../context/FinanceContext';

const BudgetForm = () => {
  const { setBudget } = useFinanceContext();
  const [budget, setBudgetAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!budget) return;
    setBudget(parseFloat(budget));
    setBudgetAmount('');
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Set Budget</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Budget Amount</label>
          <input
            type="number"
            step="0.01"
            value={budget}
            onChange={(e) => setBudgetAmount(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Set Budget
        </button>
      </form>
    </div>
  );
};

export default BudgetForm;
