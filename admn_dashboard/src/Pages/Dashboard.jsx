import React from 'react';
import './MainContent.css';
import Card from 'react-bootstrap/Card'; 
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from 'recharts';

const stats = {
  totalUsers: 120,
  todaysSales: 45,
  totalRevenue: '$12,500'
};

const revenueByShop = [
  { shop: 'Shop A', revenue: 4000 },
  { shop: 'Shop B', revenue: 3200 },
  { shop: 'Shop C', revenue: 5300 },
];

const salesTrend = [
  { date: 'Jun 1', ShopA: 500, ShopB: 400, ShopC: 700 },
  { date: 'Jun 2', ShopA: 600, ShopB: 450, ShopC: 800 },
  { date: 'Jun 3', ShopA: 700, ShopB: 470, ShopC: 900 },
  { date: 'Jun 4', ShopA: 800, ShopB: 500, ShopC: 1000 },
];



const MainContent = () => {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <h3>Dashboard</h3>

        <div className="card-grid">
          <div className="card">Total User<p className="kpi-value">{stats.totalUsers}</p></div>
          <div className="card">Today's Sales<p className="kpi-value">{stats.todaysSales}</p> </div>
          <div className="card">Total Revenue<p className="kpi-value">{stats.totalRevenue}</p></div>
        </div>

        <div className="main-section">
          <h3>Recent Activity</h3>
          {/* You can insert a chart or table here */}
          <div className=".activity-boxt">

          <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesTrend}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ShopA" stroke="#8884d8" name="Shop A" />
            <Line type="monotone" dataKey="ShopB" stroke="#82ca9d" name="Shop B" />
            <Line type="monotone" dataKey="ShopC" stroke="#ffc658" name="Shop C" />
          </LineChart>
        </ResponsiveContainer>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
