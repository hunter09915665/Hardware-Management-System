import React, { useState } from 'react';
import './CashierDashboard.css'; // CSS file (see below)

const CashierDashboard = () => {
  const [cashierName] = useState('John Doe');
  const [totalSales, setTotalSales] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [cashInRegister, setCashInRegister] = useState(0);
  const [lastTransaction, setLastTransaction] = useState('None');

  const handleNewSale = () => {
    alert('Starting new sale...');
    // Logic to open new sale interface
  };

  const handleViewTransactions = () => {
    alert('Viewing transactions...');
    // Logic to show past transactions
  };

  const handleEndOfDay = () => {
    alert('Generating end of day report...');
    // Logic to generate report
  };

  const handleLogout = () => {
    alert('Logging out...');
    // Logic to log out
  };

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Cashier Dashboard</h1>
        <p>Welcome, {cashierName}</p>
      </header>

      <div className="dashboard">
        <aside className="sidebar">
          <h3>Navigation</h3>
          <button onClick={handleNewSale}>New Sale</button>
          <button onClick={handleViewTransactions}>Transactions</button>
          <button onClick={handleEndOfDay}>End of Day</button>
          <button onClick={handleLogout}>Log Out</button>
        </aside>

        <main className="content">
          <h2>Today’s Summary</h2>
          <div className="card"><strong>Total Sales:</strong> ${totalSales.toFixed(2)}</div>
          <div className="card"><strong>Transactions:</strong> {transactions}</div>
          <div className="card"><strong>Cash in Register:</strong> ${cashInRegister.toFixed(2)}</div>
          <div className="card"><strong>Last Transaction:</strong> {lastTransaction}</div>
        </main>
      </div>
    </div>
  );
};

export default CashierDashboard;