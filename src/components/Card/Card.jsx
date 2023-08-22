import React from 'react';
import './Card.css';

const Card = ({ title, thumbnail, description, isCenterCard }) => {
  return (
    <div className={`card ${isCenterCard ? 'center-card' : ''}`}>
      <div className="c-imageFrame">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="c-titleFrame">
        <h2>{title}</h2>
      </div>
      {isCenterCard && (
        <div className="c-descriptionFrame">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
