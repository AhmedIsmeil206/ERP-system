// import React from 'react';
import InventoryForm from '../components/Inventory/InventoryForm';
import InventoryList from '../components/Inventory/InventoryList';
import OrderForm from '../components/Inventory/OrderForm';
import OrderList from '../components/Inventory/OrderList';

const InventoryPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
      
      <InventoryForm />
      <InventoryList />

      <OrderForm />
      <OrderList />
    </div>
  );
};

export default InventoryPage;
