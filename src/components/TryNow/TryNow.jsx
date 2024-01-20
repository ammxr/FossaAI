import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TryNow.css';
import Navbar from '../Navbar/Navbar.jsx';
let itemQuery; 
const TryNow = () => {
  const navigate = useNavigate();
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log("THE ITEM SUBMITTED WAS:", productName, productDescription)
      navigate('/results',
      {
        state: {
          productName: productName,
          productDescription: productDescription,          
        }
      }
    )
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
                <input
                  type="text"
                  placeholder="Product Name"
                  className="tn-input-box-small"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              <div className="tn-rectangle-product-desc">
                <input
                  type="text"
                  placeholder="Product Description"
                  className="tn-input-box-large"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                />
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