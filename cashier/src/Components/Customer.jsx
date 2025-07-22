import React, { useState, useEffect } from 'react';
import '../Styles/Customer.css';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({ name: '', phone: '', address: '', type: 'Cash' });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('customers')) || [];
    setCustomers(data);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return alert('Name and phone required');

    const updated = [...customers, form];
    setCustomers(updated);
    localStorage.setItem('customers', JSON.stringify(updated));
    setForm({ name: '', phone: '', address: '', type: 'Cash' });
  };

  return (
    <div className="customer-container">
      <h2>👥 Customers</h2>

      <form className="customer-form" onSubmit={handleAdd}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
        <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
        <select name="type" value={form.type} onChange={handleChange}>
          <option value="Cash">Cash</option>
          <option value="Credit">Credit</option>
        </select>
        <button type="submit">Add Customer</button>
      </form>

      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th><th>Phone</th><th>Address</th><th>Type</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c, i) => (
            <tr key={i}>
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.address}</td>
              <td>{c.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;

