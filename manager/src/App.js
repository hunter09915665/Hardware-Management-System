import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Categories from './Components/Categories';
import Items from './Components/Items';
import Customers from './Components/Customers';
import Alerts from './Components/Alerts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Sidebar/>
        <Routes>
          <Route path="/Categories" element={<Categories/>} />
          <Route path="/Items" element={<Items/>} />
          <Route path="/Customers" element={<Customers/>} />
          <Route path="/Alerts" element={<Alerts/>} />
        </Routes>
    </div>
      </Router>
  );
}


export default App;
