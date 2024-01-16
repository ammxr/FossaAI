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
      console.log(response);
      navigate('/results');
    } catch (error) {
      console.error('Error fetching recommendation:', error);
    }
  };

  return (
    <div className='tn-container'>
      <Navbar />
      <div className="tn-gradient-background">
        <div className="tn-center-column">
          <div className="tn-card">
            <div className="tn-title">ENTER YOUR PRODUCT</div>
            <form onSubmit={handleSubmit}>
              <div className="tn-rectangle-product-name">
                <input type="tn-text" placeholder="Product Name" className="tn-input-box-small" />
              </div>
              <div className="tn-rectangle-product-desc">
                <input type="tn-text" placeholder="Product Description" className="tn-input-box-large" />
              </div>
              <div className="tn-submit">
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
