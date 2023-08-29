import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TryNow.css';
import Navbar from '../Navbar/Navbar.jsx';
import axios from 'axios';

const TryNow = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://127.0.0.1:8000/output');
      navigate('/results');
    } catch (error) {
      console.error('Error fetching recommendation:', error);
    }
  };

  return (
    <div className='t-container'>
      <Navbar />
      <div className="gradient-background">
        <div className="center-column">
          <div className="card">
            <div className="title">ENTER YOUR PRODUCT</div>
            <form onSubmit={handleSubmit}>
              <div className="rectangle-product-name">
                <input type="text" placeholder="Product Name" className="input-box-small" />
              </div>
              <div className="rectangle-product-desc">
                <input type="text" placeholder="Product Description" className="input-box-large" />
              </div>
              <div className="submit">
                <button type="submit" className="submit-button">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default TryNow;
