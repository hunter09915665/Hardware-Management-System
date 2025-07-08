// src/Components/Customers.jsx
import React, { useState } from 'react';
import './Customers.css';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const handleAddCustomer = () => {
    if (name.trim() && contact.trim() && email.trim()) {
      const newCustomer = { name, contact, email };
      setCustomers([...customers, newCustomer]);
      setName('');
      setContact('');
      setEmail('');
    }
  };

  const handleDeleteCustomer = (index) => {
    const updatedCustomers = customers.filter((_, i) => i !== index);
    setCustomers(updatedCustomers);
  };

  return (
    <div className="customers-container">
      <h2>Customer Management</h2>

      <div className="customer-form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>

      <table className="customer-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((cust, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{cust.name}</td>
              <td>{cust.contact}</td>
              <td>{cust.email}</td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteCustomer(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customers;
