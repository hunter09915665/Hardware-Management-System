import React,{useState} from 'react';
import {  NavLink } from 'react-router-dom';

import { HouseFill, BoxFill, PeopleFill, Receipt, GraphUp, Power, Speedometer2, MegaphoneFill, GraphUpArrow } from 'react-bootstrap-icons';
import './Sidebar.css';

const Sidebar = ({ collapsed, setCollapsed }) => {
  return (
    
        
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <div className='sidebar-header'> 
           <h1 className='d-name'>{collapsed ? 'A' : 'Admin'} </h1>
         <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>☰</button>    
       </div>
        <div className='sidebar-menu'>
         
          <NavLink to="/" className="sidebar-link" title={collapsed ? "Dashboard" : ""}><Speedometer2 className="me-2" /> {!collapsed && "Dashboard"}</NavLink>
          <NavLink to="/Users" className="sidebar-link" title={collapsed ? "Users" : ""}><PeopleFill className="me-2" />{!collapsed &&  <span className="link-text">Users</span>}</NavLink>
          <NavLink to="/profit-loss" className="sidebar-link" title={collapsed ? "Profit-Loss" : ""}><GraphUpArrow className="me-2" />{!collapsed && "Profit & Loss"}</NavLink>
          <NavLink to="/Promotions" className="sidebar-link" title={collapsed ? "Promotions" : ""}><MegaphoneFill className="me-2" />{!collapsed && "Promotions"}</NavLink>
          <NavLink to="/Inventory" className="sidebar-link" title={collapsed ? "Inventory" : ""}><Receipt className="me-2" />{!collapsed && "Inventory Control"}</NavLink>

          
         
        </div>

      
        <div className="sidebar-footer">
           <NavLink to="/logout" className="sidebar-logout"><Power className="me-2" />{!collapsed && "Logout"}</NavLink>

        </div>
      </div>
   
  )
}

export default Sidebar