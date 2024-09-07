import React from 'react';
import OrderForm from '../components/Inventory/OrderForm';
import OrderList from '../components/Inventory/OrderList';
import SalesTracking from '../components/Sales/SalesTracking';
import Invoice from '../components/Sales/Invoice';

const SalesPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">Sales Management</h1>
      <OrderForm />
      <OrderList />
      <SalesTracking />
      <Invoice />
    </div>
  );
};

export default SalesPage;
