import React from 'react';
import DashboardWidget from './DashboardWidget'; // Adjust the path if necessary

const DashboardOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardWidget title="Total Revenue" value="$250,000" />
      <DashboardWidget title="Orders" value="1,500" />
      <DashboardWidget title="Inventory" value="350 items" />
      <DashboardWidget title="Customers" value="300" />
    </div>
  );
};

export default DashboardOverview;
