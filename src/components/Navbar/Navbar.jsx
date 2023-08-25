import React from 'react';
import './Navbar.css';
import logo from '../../assets/fossa_logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <div className="nav-center">
          <ul className="nav-list">
            <li className="nav-item">ABOUT</li>
            <li className="nav-item">TRY NOW</li>
            <li className="nav-item">CONTACT</li>
          </ul>
        </div>
        <div className="account-button">Account</div>
      </div>
    </nav>
  );
};

export default Navbar;
