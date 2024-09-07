import React, { useState, useContext } from 'react';
import { useOrderContext } from '../../context/OrderContext';

const OrderProcessing = () => {
  const { orders, addOrder } = useOrderContext();
  const [selectedProduct, setSelectedProduct] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleOrder = () => {
    if (selectedProduct && quantity) {
      addOrder({ product: selectedProduct, quantity: Number(quantity) });
      setSelectedProduct('');
      setQuantity('');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Order Processing</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Select Product</label>
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
        >
          {/* Populate with product options */}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full"
          min="1"
        />
      </div>
      <button
        onClick={handleOrder}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
      >
        Place Order
      </button>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Orders</h3>
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="border-b py-2">
              {order.product} - Quantity: {order.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderProcessing;
