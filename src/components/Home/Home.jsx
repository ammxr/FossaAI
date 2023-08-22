import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';

import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <Navbar />
      <div className="home-container">
        <h1>Welcome to Fossa AI</h1>
        <p>An AI-powered solution for all your expansion needs! </p>
      </div>
    </section>
  );
};

export default Home;
