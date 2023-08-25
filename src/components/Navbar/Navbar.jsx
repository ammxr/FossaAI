import React from 'react';
import './Navbar.css';
import logo from '../../assets/fossa_logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <a href= "home"> <img src={logo} alt="Logo"  className="logo-image" /></a>
        </div>
        <div className="nav-center">
          <ul className="nav-list">
            <li className="nav-item"><a href="about">ABOUT</a></li>
            <li className="nav-item"><a href="trynow">TRY NOW</a></li>
            <li className="nav-item"><a href="contact">CONTACT</a></li>
          </ul>
        </div>
        <div className="account-button">Account</div>
      </div>
    </nav>
  );
};

export default Navbar;
