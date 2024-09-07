import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesTracking = () => {
  const [salesData, setSalesData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    
    const labels = orders.map(order => order.name);
    const quantities = orders.map(order => order.quantity);
    const prices = orders.map(order => order.totalPrice);

    setSalesData({
      labels: labels,
      datasets: [
        {
          label: 'Quantity Sold',
          data: quantities,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        },
        {
          label: 'Total Sales',
          data: prices,
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }
      ]
    });
  }, []);

  return (
    <div className="w-full p-6 bg-gray-100 rounded shadow-md mt-4">
      <h2 className="text-xl font-semibold mb-4">Sales Tracking</h2>
      <Bar data={salesData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
    </div>
  );
};

export default SalesTracking;
