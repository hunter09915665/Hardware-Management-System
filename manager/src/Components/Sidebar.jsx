import React from 'react';
import { Nav } from 'react-bootstrap';
import { BoxFill, PeopleFill, MegaphoneFill, Power } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className='main'>
      
      <div className='sidebar'>
        <div className='sidebar-menu'>
          <span className='d-name'><header>Manager</header></span>

         <Nav className="flex-column sidebar-nav">
            <Nav.Link as={Link} to="/categories" className="sidebar-link">Categories</Nav.Link><br/>
            <Nav.Link as={Link} to="/items" className="sidebar-link">Items</Nav.Link><br/>
            <Nav.Link as={Link} to="/customers" className="sidebar-link">Customers</Nav.Link><br/>
            <Nav.Link as={Link} to="/alerts" className="sidebar-link">Alerts</Nav.Link><br/>
      </Nav> 
        </div>

        <div className="sidebar-footer">
          <Nav.Link as={Link} to="/logout" className="sidebar-logout">
            <Power className="me-2" />Logout
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
