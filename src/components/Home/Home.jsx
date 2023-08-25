import React from 'react';
import './Home.css'; // Create this CSS file to style the Home component
import videoBackground from '../../assets/home_bg_vid.mp4'; // Path to your video file

import Navbar from '../Navbar/Navbar.jsx';
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <video className="video-background" autoPlay loop muted>
        <source src={videoBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Home;
