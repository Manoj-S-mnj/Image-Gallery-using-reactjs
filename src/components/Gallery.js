import React from 'react';
import './Gallery.css';

const Gallery = ({ images, openModal }) => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery item ${index}`} onClick={() => openModal(image)} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
