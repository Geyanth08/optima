import React from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
      <p className="more-images-link">
        {/* If you want to keep a placeholder link */}
        <a href="/gallery">See more images</a>
      </p>
    </div>
  );
};

export default Gallery;
