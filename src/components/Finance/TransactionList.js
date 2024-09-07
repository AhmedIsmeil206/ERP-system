import React from 'react';
import { useFinanceContext } from '../../context/FinanceContext';

const TransactionList = () => {
  const { transactions, deleteTransaction } = useFinanceContext();

  return (
    <div className="p-6 bg-gray-50 rounded shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Transaction List</h2>
      <ul>
        {transactions.map(transaction => (
          <li key={transaction.id} className="flex items-center justify-between p-4 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-medium">{transaction.description}</h3>
              <p className="text-gray-600">Amount: ${transaction.amount.toFixed(2)}</p>
              <p className="text-gray-600">Date: {transaction.date}</p>
            </div>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
