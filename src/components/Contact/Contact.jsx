import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import './Contact.css';
import Navbar from '../Navbar/Navbar.jsx';
const Contact = () => {
  return (
    <section className="contact-section">
      <Navbar/>
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
    </section>
  );
};

export default Contact;