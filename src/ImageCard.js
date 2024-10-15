
import React from 'react';
import './ImageCard.css';
const ImageCard = ({ image }) => {
    return (
        <div className="image-card">
            <img src={image.src} alt={image.name} className="image" />
            <h2 className="image-title">{image.name}</h2>
            <p className="image-description">{image.description}</p>
            <p className="image-price">{image.price} PLN</p>
        </div>
    );
};

export default ImageCard;
