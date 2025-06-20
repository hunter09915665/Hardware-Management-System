import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

   //Toggle `dark` class on <body>
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <div className="brand-name">Hardware Management System</div>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
};

export default Header;
