import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onThemeToggle }) => {
  

  return (
    <header className="header">
      <div className="brand-name">Hardware Management System</div>
      <button className="toggle-btn" onClick={onThemeToggle}>
        {onThemeToggle ? '☀️' : '🌙'}
      </button>
    </header>
  );
};

export default Header;
