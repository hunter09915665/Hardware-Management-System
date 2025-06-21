import React from 'react';
import './MainContent.css';


const MainContent = () => {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <h2>Users</h2>

        <div className="card-grid">
          <div className="card">Add Manager/Cashier</div>
          <div className="card">Manager Dashboard</div>
          <div className="card">Chashier Dashboard</div>
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
