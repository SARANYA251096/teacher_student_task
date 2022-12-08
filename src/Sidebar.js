import React from "react";
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          Admin Panel
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <Link to={'/teacherdashboard'} className="nav-link" >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span> Teacher's Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      

      <li className="nav-item">
      <Link to={'/studentdashboard'} className="nav-link" >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span> Student's Dashboard</span>
        </Link>
        
      </li>
      
    </ul>
  );
}

export default Sidebar;
