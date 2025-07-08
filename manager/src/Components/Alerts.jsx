// src/Components/Alerts.jsx
import React, { useState } from 'react';
import './Alerts.css';

function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [alertMsg, setAlertMsg] = useState('');

  const handleAddAlert = () => {
    if (alertMsg.trim() !== '') {
      const newAlert = {
        message: alertMsg,
        date: new Date().toLocaleString(),
      };
      setAlerts([newAlert, ...alerts]);
      setAlertMsg('');
    }
  };

  const handleDeleteAlert = (index) => {
    const updatedAlerts = alerts.filter((_, i) => i !== index);
    setAlerts(updatedAlerts);
  };

  return (
    <div className="alerts-container">
      <h2>Alert & Notification Management</h2>

      <div className="alert-form">
        <input
          type="text"
          placeholder="Enter alert message"
          value={alertMsg}
          onChange={(e) => setAlertMsg(e.target.value)}
        />
        <button onClick={handleAddAlert}>Add Alert</button>
      </div>

      {alerts.length === 0 ? (
        <p className="no-alerts">No alerts available.</p>
      ) : (
        <ul className="alert-list">
          {alerts.map((alert, index) => (
            <li key={index} className="alert-item">
              <div className="alert-text">
                <strong>{alert.message}</strong>
                <span className="alert-date">{alert.date}</span>
              </div>
              <button className="delete-btn" onClick={() => handleDeleteAlert(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Alerts;
