import React, { useState } from 'react';
import { useSupplierContext } from '../../context/SupplierContext';

const SupplierForm = () => {
  const [supplierName, setSupplierName] = useState('');
  const { addSupplier } = useSupplierContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addSupplier({ name: supplierName });
    setSupplierName('');
  };

  return (
    <div className="flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-3/5 max-w-lg bg-gray-100 p-6 rounded-lg shadow-md"
      >
        <h2 className="text-xl font-bold mb-4">Add Supplier</h2>
        <div className="mb-4">
          <label htmlFor="supplierName" className="block text-gray-700 mb-2">
            Supplier Name
          </label>
          <input
            type="text"
            id="supplierName"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Add Supplier
        </button>
      </form>
    </div>
  );
};

export default SupplierForm;
