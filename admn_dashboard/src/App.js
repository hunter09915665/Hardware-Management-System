import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar.jsx';
import Header from './Components/Header.jsx';
import MainContent from './Components/MainContent.jsx';
import React from 'react';
import  { useState,useEffect } from 'react';



function App() {

  //Load theme from localStorage (default to 'dark' if nothing saved)
const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

//Toggle theme and save to localStorage
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme to localStorage
  };


  return (

    <div className={`dashboard-layout ${theme}`}>
      <Sidebar />
      <div className="right-panel">
        <Header onThemeToggle={toggleTheme} />
        <MainContent />
      </div>
    </div>
    
    
  );
}

export default App;
