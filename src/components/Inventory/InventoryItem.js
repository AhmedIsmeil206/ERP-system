import React from 'react';

const InventoryItem = ({ item }) => {
  const unitPrice = item.unitPrice || 0;
  const totalPrice = item.totalPrice || 0;

  return (
    <div className="p-4 border-b border-gray-200">
      <h3 className="text-lg font-medium">{item.name}</h3>
      <p className="text-gray-600">Quantity: {item.quantity}</p>
      <p className="text-gray-600">Unit Price: ${unitPrice.toFixed(2)}</p>
      <p className="text-gray-600">Total Price: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default InventoryItem;
