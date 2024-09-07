import React from 'react';
import { useOrderContext } from '../../context/OrderContext';

const OrderList = () => {
  const { orders, setOrders } = useOrderContext();

  const handleDeleteOrder = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);

    // Save to local storage
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  return (
    <div className="w-3/5 mx-auto p-6 bg-gray-50 rounded shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Order List</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id} className="flex items-center justify-between p-4 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-medium">{order.name}</h3>
              <p className="text-gray-600">Quantity: {order.quantity}</p>
              <p className="text-gray-600">Unit Price: ${order.unitPrice.toFixed(2)}</p>
              <p className="text-gray-600">Total Price: ${order.totalPrice.toFixed(2)}</p>
            </div>
            <button
              onClick={() => handleDeleteOrder(order.id)}
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

export default OrderList;
