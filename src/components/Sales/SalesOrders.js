import React, { useContext } from 'react';
import { SalesContext } from '../../context/SalesContext';

const SalesOrders = () => {
  const { salesOrders } = useContext(SalesContext);

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Sales Orders</h2>
      <ul>
        {salesOrders.map((order) => (
          <li key={order.id} className="border-b py-2">
            {order.customerName} - ${order.amount} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SalesOrders;
