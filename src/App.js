import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar';
import AuthProvider from './context/AuthContext';
import { FinanceProvider } from './context/FinanceContext'; // Import FinanceProvider
import './styles/tailwind.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <FinanceProvider> {/* Wrap with FinanceProvider */}
          <Navbar />
          <AppRoutes />
        </FinanceProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
