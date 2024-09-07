import React, { useState, useEffect } from 'react';
import { useInventoryContext } from '../../context/InventoryContext';
import { useOrderContext } from '../../context/OrderContext';

const OrderForm = () => {
  const { inventory, setInventory } = useInventoryContext();
  const { orders, setOrders } = useOrderContext();
  const [selectedProduct, setSelectedProduct] = useState('');
  const [orderQuantity, setOrderQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, [setOrders]);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const product = inventory.find(item => item.name === selectedProduct);
    if (!product) return;

    if (orderQuantity <= 0 || orderQuantity > product.quantity) {
      alert('Invalid quantity');
      return;
    }

    const updatedInventory = inventory.map(item =>
      item.name === selectedProduct
        ? { ...item, quantity: item.quantity - orderQuantity }
        : item
    );
    setInventory(updatedInventory);

    const newOrder = {
      id: Date.now(),
      name: selectedProduct,
      quantity: parseInt(orderQuantity),
      unitPrice: parseFloat(unitPrice),
      totalPrice: parseFloat(unitPrice) * parseInt(orderQuantity),
    };
    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);

    localStorage.setItem('inventory', JSON.stringify(updatedInventory));
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    setSelectedProduct('');
    setOrderQuantity('');
    setUnitPrice('');
  };

  if (!inventory) return <p>No inventory data available.</p>;

  return (
    <div className="w-3/5 mx-auto p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Place Order</h2>
      <form onSubmit={handlePlaceOrder} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Product Name</label>
          <select
            value={selectedProduct}
            onChange={(e) => setSelectedProduct(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a product</option>
            {inventory.map(item => (
              <option key={item.id} value={item.name}>{item.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            value={orderQuantity}
            onChange={(e) => setOrderQuantity(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Unit Price</label>
          <input
            type="number"
            step="0.01"
            value={unitPrice}
            onChange={(e) => setUnitPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderForm;
