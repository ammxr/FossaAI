import React from 'react';
import './AboutUs.css';
import Navbar from '../Navbar/Navbar.jsx';
import logo from '../../assets/fossa_logo.png';

const AboutUs = () => {
  return (
    <section id="about" className="about-section">
      <Navbar />
      <div className="about-container">
        <h1>ABOUT</h1>
        <h2>Introducing <primaryText>FossaAI</primaryText>, Your Ultimate Department Store Expansion Companion</h2>
        <p>Streamline your store expansion endeavors with FossaAI, the cutting-edge web application designed to revolutionize the way you enhance your department store's offerings. Harnessing the power of machine learning, FossaAI takes the <secondaryText>guesswork out of selecting new products for your expansion plans</secondaryText>. By analyzing your store's historical sales data, FossaAI intelligently identifies patterns and trends, paving the way for precise product recommendations. Our innovative algorithm identifies products that align seamlessly with your existing offerings, ensuring a cohesive and attractive shopping experience for your customers. Customization is at the core of FossaAI's approach. You have the freedom to specify preferred manufacturers, allowing the system to delve into a curated selection of products that not only enhance your inventory but also align with your brand's unique identity. Embrace the future of department store expansion with FossaAI and unlock a world of data-driven insights, empowering you to make informed decisions that drive growth, customer satisfaction, and success. Start your journey with FossaAI today and embark on a seamless expansion experience like never before.</p>

        <div className="a-footer">
          <img src={logo} alt="Logo"  className="logo-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
