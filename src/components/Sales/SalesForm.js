import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SalesForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      customerName: '',
      amount: '',
      status: '',
    },
    validationSchema: Yup.object({
      customerName: Yup.string().required('Required'),
      amount: Yup.number().required('Required').positive('Must be a positive number'),
      status: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">New Sales Order</h2>
      <div className="mb-4">
        <label htmlFor="customerName" className="block text-gray-700">Customer Name</label>
        <input
          id="customerName"
          name="customerName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.customerName}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
        {formik.touched.customerName && formik.errors.customerName ? (
          <div className="text-red-500">{formik.errors.customerName}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="amount" className="block text-gray-700">Amount</label>
        <input
          id="amount"
          name="amount"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.amount}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
        {formik.touched.amount && formik.errors.amount ? (
          <div className="text-red-500">{formik.errors.amount}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700">Order Status</label>
        <input
          id="status"
          name="status"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.status}
          className="mt-1 block w-full border border-gray-300 rounded-md"
        />
        {formik.touched.status && formik.errors.status ? (
          <div className="text-red-500">{formik.errors.status}</div>
        ) : null}
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default SalesForm;
