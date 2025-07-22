import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import CashierDashboard from './Components/CashierDashboard';
import Billing from './Components/Billing';
import SalesHistory from './Components/SalesHistory';
import Customers from './Components/Customer';
import ThemeToggle from './Components/ThemeToggle';
import './App.css';
import './Styles/Theme.css';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <Router>
          <Sidebar />
          <div className="main-content">
            <ThemeToggle />
            <Routes>
              <Route path="/" element={<CashierDashboard />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/sales" element={<SalesHistory />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
