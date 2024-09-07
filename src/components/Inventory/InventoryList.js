import React from 'react';
import { useInventoryContext } from '../../context/InventoryContext';

const InventoryList = () => {
  const { inventory, deleteInventoryItem } = useInventoryContext();

  const handleDeleteItem = (id) => {
    deleteInventoryItem(id);
  };

  return (
    <div className="w-3/5 mx-auto p-6 bg-gray-50 rounded shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Inventory List</h2>
      <ul>
        {inventory.map(item => (
          <li key={item.id} className="flex items-center justify-between p-4 border-b border-gray-200">
            <div>
              <h3 className="text-lg font-medium">{item.name}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-gray-600">Unit Price: ${item.unitPrice.toFixed(2)}</p>
              <p className="text-gray-600">Total Price: ${(item.unitPrice * item.quantity).toFixed(2)}</p>
            </div>
            <button
              onClick={() => handleDeleteItem(item.id)}
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

export default InventoryList;
