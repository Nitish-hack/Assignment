import React from "react";
import "./Navbar.css";
import { FaBell, FaEnvelope, FaSearch, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">RoyalUI</div>
      <FaBars className="navbar-menu-icon" style={{ fontSize: "25px" }} />
      <div className="navbar-search">
        <FaSearch className="navbar-search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <FaEnvelope />
        </li>
        <li className="navbar-item">
          <FaBell />
        </li>
        <li className="navbar-item">
          <img
            src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBpbWFnZSUyMGZvciUyMHVzZXIlMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="User"
            className="navbar-user-image"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
