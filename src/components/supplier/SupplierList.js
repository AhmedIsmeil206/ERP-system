import React from 'react';
import { useSupplierContext } from '../../context/SupplierContext';

const SupplierList = () => {
  const { suppliers, editSupplier, deleteSupplier } = useSupplierContext();

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Supplier List</h2>
      <ul>
        {suppliers.map((supplier) => (
          <li key={supplier.id} className="flex justify-between items-center mb-4 p-4 border border-gray-300 rounded">
            <div>
              <h3 className="text-lg font-medium">{supplier.name}</h3>
              <p className="text-sm text-gray-600">{supplier.contact}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => editSupplier(supplier.id)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteSupplier(supplier.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SupplierList;
