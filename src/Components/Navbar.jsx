import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(prev => !prev);

  return (
    <nav className="navbar">
      <div className="logo">
        ❤️ <span className="highlight">Moments</span>
      </div>

      <div className="menu-wrapper">
        <button className="menu-btn" onClick={toggleDropdown}>
          <div className="menu-icon">☰</div>
        </button>

        {isDropdownOpen && (
          <div className="dropdown">
            <Link to="/photo" className="nav-item" >Home</Link>
            <Link to="/quiz" className="nav-item" >Quiz</Link>
            <Link to="/gallery" className="nav-item" >Gallery</Link>
            <Link to="/wrapped" className="nav-item" >Wrapped</Link>
            <Link to="/" className="nav-item" >Message</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
