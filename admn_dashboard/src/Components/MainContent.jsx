import React from 'react';
import './MainContent.css';


const MainContent = () => {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <h2>Dashboard</h2>

        <div className="card-grid">
          <div className="card">Total Users: 120</div>
          <div className="card">Orders Today: 34</div>
          <div className="card">Revenue: $5,230</div>
        </div>

        <div className="main-section">
          <h3>Recent Activity</h3>
          {/* You can insert a chart or table here */}
          <div className="activity-box">[Table/Chart Placeholder]</div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
