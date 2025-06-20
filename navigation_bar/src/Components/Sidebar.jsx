import React from 'react';
import {  Nav } from 'react-bootstrap';
import { HouseFill, BoxFill, PeopleFill, Receipt, GraphUp, Power, Speedometer2, MegaphoneFill, GraphUpArrow } from 'react-bootstrap-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='main'>
        
      
      <div className='sidebar'>
        <div className='sidebar-menu'>
          <span className='d-name'><h1>Admin </h1></span>
          
          <Nav defaultActiveKey="/Dashboard" className="flex-column">
            
             <Nav.Link href="/Dashboard" className="sidebar-link"><Speedometer2 className="me-2" />Dashboard</Nav.Link>
             <Nav.Link eventKey="link-1" className="sidebar-link"><PeopleFill className="me-2" />Users</Nav.Link>
             <Nav.Link eventKey="link-2" className="sidebar-link"><GraphUpArrow className="me-2" />Profit & Loss</Nav.Link>
             <Nav.Link eventKey="link-2" className="sidebar-link"><MegaphoneFill className="me-2" />Promotions</Nav.Link>
             <Nav.Link eventKey="link-2" className="sidebar-link"><Receipt className="me-2" />Inventory Control</Nav.Link>
           
          </Nav>
         
        </div>

      
        <div className="sidebar-footer">
            <Nav.Link href="/logout" className="sidebar-logout"><Power className="me-2" />Logout</Nav.Link>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
