import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardPage = () => {
  const [inventoryCount, setInventoryCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [salesTotal, setSalesTotal] = useState(0);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const inventoryData = JSON.parse(localStorage.getItem('inventory')) || [];
    const ordersData = JSON.parse(localStorage.getItem('orders')) || [];
    const salesData = JSON.parse(localStorage.getItem('sales')) || [];

    setInventoryCount(inventoryData.length);
    setOrderCount(ordersData.length);
    setSalesTotal(salesData.reduce((total, sale) => total + (sale.quantity * sale.unitPrice), 0));

    // Prepare chart data
    const labels = salesData.map(sale => sale.name);
    const quantities = salesData.map(sale => sale.quantity);
    
    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Sales Quantity',
          data: quantities,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    });
  }, []);

  return (
    <div className="w-full p-6 bg-gray-100 rounded shadow-md">
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">Total Inventory Items</h2>
          <p className="text-lg">{inventoryCount}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-lg">{orderCount}</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h2 className="text-xl font-semibold">Total Sales</h2>
          <p className="text-lg">${salesTotal.toFixed(2)}</p>
        </div>
      </div>
      <div className="bg-white rounded shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Sales Data</h2>
        <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>
    </div>
  );
};

export default DashboardPage;
