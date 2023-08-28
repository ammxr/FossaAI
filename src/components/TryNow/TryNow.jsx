import React from 'react';
import './TryNow.css';
import Navbar from '../Navbar/Navbar.jsx';

const TryNow = () => {
  return (
    <div className='t-container'>
      <Navbar />
      <div className="gradient-background">
        <div className="center-column">
          <div className="card">
            <div className="title">ENTER YOUR PRODUCT</div>
              <div className="rectangle-product-name">
                <input type="text" placeholder="Product Name" className="input-box-small" />
              </div>
              <div className="rectangle-product-desc">
                <input type="text" placeholder="Product Description" className="input-box-large" />
              </div>
              <div className="submit">
                <form action="/results">
                  <button className="submit-button">SUBMIT</button>
                </form>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default TryNow;
