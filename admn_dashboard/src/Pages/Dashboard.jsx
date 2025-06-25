import React from 'react';
import './MainContent.css';
import Card from 'react-bootstrap/Card'; 
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import Dashboard from './Dashboard.css';


const reorderItems = [
  { id: 1, name: 'Cement Bag', quantity: 5 },
  { id: 2, name: 'PVC Pipe', quantity: 0 },
];

const revenueData = [
  { name: 'Galle', revenue: 30000 },
  { name: 'Matara', revenue: 25000 },
  { name: 'Tangalle', revenue: 18000 },
];



const MainContent = () => {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div className="dashboard-container">
      <h2>📊 Admin Dashboard Overview</h2>

      {/* 🔔 Reorder Alert */}
      {reorderItems.length > 0 && (
        <div className="alert-box">
          <h4>🔔 Reorder Alerts:</h4>
          <ul>
            {reorderItems.map(item => (
              <li key={item.id}>
                <span className="alert-item">{item.name}</span> - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 🚀 Quick Links */}
      <div className="quick-links">
        <button className="btn-link manager" onClick={() => window.location.href = '/manager'}>
          👨‍💼 Manager Dashboard
        </button>
        <button className="btn-link cashier" onClick={() => window.location.href = '/cashier'}>
          💼 Cashier Dashboard
        </button>
      </div>

      {/* 📈 Summary Cards */}
      <div className="summary-cards">
        <div className="card green">🧾 Total Sales Today<br /><strong>Rs. 55,000</strong></div>
        <div className="card blue">📦 Total Items<br /><strong>420</strong></div>
        <div className="card yellow">👥 Active Users<br /><strong>18</strong></div>
        <div className="card red">🛒 Reorders Needed<br /><strong>{reorderItems.length}</strong></div>
      </div>


        <div className="main-section">
          
        <div className="revenue-chart">
        <h3>🏪 Revenue by Branch</h3>
        <BarChart width={500} height={300} data={revenueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#3b82f6" />
        </BarChart>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
