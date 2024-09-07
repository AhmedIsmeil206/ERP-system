import React from 'react';

const DashboardWidget = ({ title, value }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:bg-gray-50 transition ease-in-out duration-300">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
};

export default DashboardWidget;
