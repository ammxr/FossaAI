import React, { useState } from 'react';
import './TryNow.css';

const TryNow = () => {
  return (
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
        </div>
      </div>
    </div>
  );
};
  
export default TryNow;
