import React from 'react';
import { useOrderContext } from '../../context/OrderContext';

const Invoice = () => {
  const { orders } = useOrderContext();

  return (
    <div className="w-3/5 mx-auto p-6 bg-gray-100 rounded shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Invoice</h2>
      {orders.length === 0 ? (
        <p>No orders available for invoicing.</p>
      ) : (
        <div>
          {orders.map(order => (
            <div key={order.id} className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium">Invoice for Order ID: {order.id}</h3>
              <p className="text-gray-600">Product: {order.name}</p>
              <p className="text-gray-600">Quantity: {order.quantity}</p>
              <p className="text-gray-600">Unit Price: ${order.unitPrice.toFixed(2)}</p>
              <p className="text-gray-600">Total Price: ${order.totalPrice.toFixed(2)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Invoice;
