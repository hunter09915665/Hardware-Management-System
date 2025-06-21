
import './App.css';
import Sidebar from './Components/Sidebar.jsx';
import Header from './Components/Header.jsx';
import MainContent from './Components/MainContent.jsx';

import Dashboard from './Pages/Dashboard';
import Users from './Pages/User';
import ProfitLoss from './Pages/Profit';
import Promotions from './Pages/Promotions';
import InventoryControl from './Pages/Inventory';

import React from 'react';
import  { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';





function App() {

  //Load theme from localStorage (default to 'dark' if nothing saved)
const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

//Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
  };


  return (
    <Router>
    
    <div className={`dashboard-layout ${theme}`}>
      <Sidebar />
      <div className="right-panel">
        <Header onThemeToggle={toggleTheme} />

        <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/profit-loss" element={<ProfitLoss />} />
              <Route path="/promotions" element={<Promotions />} />
              <Route path="/inventory" element={<InventoryControl />} />
            </Routes>
          </div>

      </div>
    </div>
    
  </Router>  
  );
}

export default App;
