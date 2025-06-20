import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  //const [darkMode, setDarkMode] = useState(false);

  // Toggle `dark` class on <body>
  //useEffect(() => {
   // document.body.classList.toggle('dark', darkMode);
 // }, [darkMode]);

  return (
    <header className="header">
      <div className="brand-name">Hardware Management System</div>
      
    </header>
  );
};

export default Header;
