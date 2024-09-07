import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegistrationPage from '../pages/RegistrationPage';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import InventoryPage from '../pages/InventoryPage';
import SalesPage from '../pages/SalesPage';
import FinancePage from '../pages/FinancePage'; // Import FinancePage
import { SupplierProvider } from '../context/SupplierContext';
import { InventoryProvider } from '../context/InventoryContext';

const AppRoutes = () => {
  return (
    <SupplierProvider>
      <InventoryProvider>
        <Routes>
          <Route path="/" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/sales" element={<SalesPage />} /> {/* Add SalesPage route */}
          <Route path="/finance" element={<FinancePage />} /> {/* Add FinancePage route */}
        </Routes>
      </InventoryProvider>
    </SupplierProvider>
  );
};

export default AppRoutes;
