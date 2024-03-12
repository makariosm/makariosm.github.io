import React from 'react';

function HobbyItem({ image, title, description }) {
  return (
    <div className="hobby-interest-container">
      <div className="hobby-interest-image-wrap">
        <img src={image} alt="Hobby" className="hobby-interest-image" />
      </div>
      <div className="hobby-interest-info">
        <h3 className="hobby-interest-title">{title}</h3>
        <p className="hobby-interest-description">{description}</p>
      </div>
    </div>
  );
}

export default HobbyItem;