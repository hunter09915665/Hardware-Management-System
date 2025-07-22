import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>🧾 Cashier</h2>
      <nav>
        <NavLink to="/" end>Dashboard</NavLink>
        <NavLink to="/billing">Billing / POS</NavLink>
        <NavLink to="/sales">Sales History</NavLink>
        <NavLink to="/customers">Customers</NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
