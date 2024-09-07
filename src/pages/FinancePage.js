import React from 'react';
import TransactionForm from '../components/Finance/TransactionForm';
import TransactionList from '../components/Finance/TransactionList';
import BudgetForm from '../components/Finance/BudgetForm';
import BudgetDisplay from '../components/Finance/BudgetDisplay';

const FinancePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Finance Management</h1>
      <div className="mb-8">
        <BudgetForm />
        <BudgetDisplay />
      </div>
      <div>
        <TransactionForm />
        <TransactionList />
      </div>
    </div>
  );
};

export default FinancePage;
