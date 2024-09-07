import React, { useState, useEffect } from 'react';
import { useInventoryContext } from '../../context/InventoryContext';

const InventoryForm = () => {
  const { inventory, setInventory } = useInventoryContext();
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unitPrice, setUnitPrice] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();

    if (!productName || quantity <= 0 || unitPrice <= 0) {
      alert('Please provide valid product details.');
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: productName,
      quantity: parseInt(quantity),
      unitPrice: parseFloat(unitPrice),
      totalPrice: parseFloat(unitPrice) * parseInt(quantity),
    };

    const updatedInventory = [...inventory, newProduct];
    setInventory(updatedInventory);
    localStorage.setItem('inventory', JSON.stringify(updatedInventory));

    setProductName('');
    setQuantity('');
    setUnitPrice('');
  };

  return (
    <div className="w-3/5 mx-auto p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Product</h2>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
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
          Add Product
        </button>
      </form>
    </div>
  );
};

export default InventoryForm;
