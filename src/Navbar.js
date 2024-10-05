// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css'; // Import styles for the navbar

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-title">InternLoom</div>
      <div className="navbar-links">
        <Link to="/internships" className="navbar-button">Internships</Link>
        <Link to="/courses" className="navbar-button">Courses</Link>
        <Link to="/login" className="navbar-button">Login</Link>
        <Link to="/signup" className="navbar-button">Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;
