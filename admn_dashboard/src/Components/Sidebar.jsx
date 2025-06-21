import React from 'react';
import {  NavLink } from 'react-router-dom';

import { HouseFill, BoxFill, PeopleFill, Receipt, GraphUp, Power, Speedometer2, MegaphoneFill, GraphUpArrow } from 'react-bootstrap-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    
        
      <div className='sidebar'>
        <div className='sidebar-menu'>
         <br></br> <h1 className='d-name'>Admin </h1><br></br>
          <NavLink to="/" className="sidebar-link"><Speedometer2 className="me-2" />Dashboard</NavLink>
          <NavLink to="/Users" className="sidebar-link"><PeopleFill className="me-2" />Users</NavLink>
          <NavLink to="/profit-loss" className="sidebar-link"><GraphUpArrow className="me-2" />Profit & Loss</NavLink>
          <NavLink to="/Promotions" className="sidebar-link"><MegaphoneFill className="me-2" />Promotions</NavLink>
          <NavLink to="/Inventory" className="sidebar-link"><Receipt className="me-2" />Inventory Control</NavLink>

          
         
        </div>

      
        <div className="sidebar-footer">
           <NavLink to="/logout" className="sidebar-logout"><Power className="me-2" />Logout</NavLink>

        </div>
      </div>
   
  )
}

export default Sidebar