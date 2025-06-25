import React from 'react';
import './MainContent.css';
import { useState } from 'react';
import User from './User.css';


const userData = [
  { id: 1, name: 'Alice Perera', role: 'Admin', email: 'alice@hardware.lk', lastLogin: '2025-06-24', status: 'Active' },
  { id: 2, name: 'Kamal Silva', role: 'Manager', email: 'kamal@hardware.lk', lastLogin: '2025-06-22', status: 'Inactive' },
  { id: 3, name: 'Nadeesha Kumari', role: 'Cashier', email: 'nadeesha@hardware.lk', lastLogin: '2025-06-25', status: 'Active' },
];






const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredRole, setFilteredRole] = useState('');

  const filteredUsers = userData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filteredRole === '' || user.role === filteredRole)
  );
  return (
    <div className="main-content">
      <div className="user-container">
      <div className="user-header">
        <h2>User Management</h2><br></br>
        <button className="add-user-btn">➕ Add New User</button>
      </div>
      <br></br>
      <div className="user-filters">
        <input
          type="text"
          placeholder="Search by name"
          className="user-search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          className="user-select"
          value={filteredRole}
          onChange={e => setFilteredRole(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="Manager">Manager</option>
          <option value="Cashier">Cashier</option>
        </select>
      </div>

        

        <div className="main-section">
           <div className="user-table-wrapper">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Last Login</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>{user.email}</td>
                <td>{user.lastLogin}</td>
                <td>
                  <span className={`status-badge ${user.status === 'Active' ? 'active' : 'inactive'}`}>
                    {user.status}
                  </span>
                </td>
                <td className="action-buttons">
                  <button className="btn-edit">Edit</button>
                  <button className="btn-delete">Delete</button>
                  <button className="btn-reset">Reset</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
