import React from 'react';
import './MainContent.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useState } from 'react';
import Inventory from './Inventory.css';

const inventoryData = [
  { id: 1, name: 'Hammer', category: 'Tools', quantity: 25, reorderLevel: 10 },
  { id: 2, name: 'Cement Bag', category: 'Construction', quantity: 5, reorderLevel: 20 },
  { id: 3, name: 'PVC Pipe', category: 'Plumbing', quantity: 0, reorderLevel: 15 },
];

const stockHistory = [
  { day: 'Day 1', quantity: 30 },
  { day: 'Day 2', quantity: 25 },
  { day: 'Day 3', quantity: 20 },
  { day: 'Day 4', quantity: 10 },
  { day: 'Day 5', quantity: 5 },
];


const MainContent = () => {

  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const filteredItems = inventoryData.filter(
    item =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (filterCategory === '' || item.category === filterCategory)
  );

  const getStatus = (qty, reorderLevel) => {
    if (qty === 0) return 'Out';
    else if (qty <= reorderLevel) return 'Low';
    return 'In stock';
  };

  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div className="inventory-container">
      <div className="inventory-header">
        <h2>Inventory Control</h2>
        <button className="btn-add-item">➕ Add New Item</button>
      </div>

      <div className="inventory-filters">
        <input
          type="text"
          placeholder="Search item name"
          className="inventory-search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="inventory-select"
          value={filterCategory}
          onChange={e => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Tools">Tools</option>
          <option value="Construction">Construction</option>
          <option value="Plumbing">Plumbing</option>
        </select>
      </div>

        <div className="main-section">
          <div className="inventory-table">
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Reorder</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => {
              const status = getStatus(item.quantity, item.reorderLevel);
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <span className={`badge ${status.replace(' ', '').toLowerCase()}`}>{status}</span>
                  </td>
                  <td>
                    <button className="btn-reorder">🛒 Reorder</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="stock-alert">
        <h3>📉 Low or Out of Stock Alerts</h3>
        <ul>
          {inventoryData
            .filter(item => item.quantity <= item.reorderLevel)
            .map(item => (
              <li key={item.id}>
                <span className="alert-name">{item.name}</span> — Quantity: {item.quantity}
              </li>
            ))}
        </ul>
      </div>

      
    </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
