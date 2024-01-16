import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import './Contact.css';
import Navbar from '../Navbar/Navbar.jsx';
import logo from '../../assets/fossa_logo.png';


const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Navbar />
      <div className="contact-container">
        <h1>CONTACT</h1>
        <h2>Get in <c-primaryText>Touch</c-primaryText></h2>
        <p>Feel free to reach out to me you can find me at the following...</p>
        <div className="container">
        <div className="contact-links">
          <a href="https://github.com/ammxr" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="github-icon" />
          </a>
          <a href="https://www.linkedin.com/in/ammar-hakim04/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className="linkedin-icon" />
          </a>
          <a href="mailto:ammarhakim57@gmail.com">
            <AiFillMail className="mail-icon" />
          </a>
        </div>
      </div>
        <div className="c-footer">
          <img src={logo} alt="Logo"  className="logo-image" />
        </div>
      </div>
    </section>
  );
};

export default Contact;