import React from 'react';
import './Card.css';

const Card = ({ thumbnail, name, link}) => {
  return (
    <div>
      <div className="c-imageFrame">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="c-nameFrame">
        <h2>{name}</h2>
      </div>
      <div className="c-link">
        <p>{link}</p>
      </div>
    </div>
  );
};

export default Card;