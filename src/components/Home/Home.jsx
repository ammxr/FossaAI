import React from "react";
import "./Home.css"; // Create a corresponding CSS file

const Home = () => {
  return (
    <div className="home-page">
      <div className="background"></div>
      <div className="content">
        <h1 className="title">Welcome to FossaAI</h1>
        <p className="description">Unlocking the Power of AI</p>
      </div>
    </div>
  );
};

export default Home;
