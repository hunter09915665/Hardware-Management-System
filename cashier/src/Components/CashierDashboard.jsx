import React from 'react';
import '../Styles/CashierDashboard.css';

const CashierDashboard = () => {
  const debtors = [
    { name: 'John Smith', dueDate: '04/21/2024', amount: '$200.00' },
    { name: 'Jane Doe', dueDate: '04/18/2024', amount: '$150.00' },
    { name: 'Michael Brown', dueDate: '04/18/2024', amount: '$300.00' }
  ];

  const transactions = [
    { date: '04/23/2024', id: 'INV–00124', customer: 'Sarah Wilson', total: '$75.00', status: 'Paid' },
    { date: '04/22/2024', id: 'INV–00123', customer: 'Walk-in Customer', total: '$200.00', status: 'Paid' },
    { date: '04/22/2024', id: 'INV–00122', customer: 'Jane Doe', total: '$300.00', status: 'Credit' },
    { date: '04/22/2024', id: 'INV–00121', customer: 'John Smith', total: '$50.00', status: 'Paid' }
  ];

  return (
    
      

      <main className="main-dashboard">
        <div className="top-section">
          <div className="card blue">
            <p>Total Sales Today</p>
            <h2>$1,250.00</h2>
          </div>
          <div className="card">
            <p>Number of Transactions</p>
            <h2>15</h2>
          </div>
          <div className="card">
            <p>Most Sold Item</p>
            <h2>Hammer</h2>
          </div>
          <button className="new-billing-btn">New Billing</button>
        </div>

        <div className="middle-section">
          <div className="debtors-section">
            <h3>Debtors</h3>
            <table>
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Due Date</th>
                  <th>Total Due</th>
                </tr>
              </thead>
              <tbody>
                {debtors.map((debtor, index) => (
                  <tr key={index}>
                    <td>{debtor.name}</td>
                    <td>{debtor.dueDate}</td>
                    <td>{debtor.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="check-customer">
            <button>Check Customer Status ➜</button>
          </div>
        </div>

        <div className="transactions-section">
          <h3>Recent Transactions</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Invoice ID</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, index) => (
                <tr key={index}>
                  <td>{tx.date}</td>
                  <td>{tx.id}</td>
                  <td>{tx.customer}</td>
                  <td>{tx.total}</td>
                  <td className={tx.status === 'Paid' ? 'paid' : 'credit'}>{tx.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
   
  );
};

export default CashierDashboard;
