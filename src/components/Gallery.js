import React from 'react';
import './Gallery.css';
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling

const Gallery = ({ images, archive, setActiveSection }) => {

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Gallery Image ${index + 1}`} />
        ))}
      </div>
      <p className="more-images-link">
        {/* If you want to keep a placeholder link */}
        {archive &&
          <Link
            to="archive"
            smooth={true}
            duration={500}
            onClick={() => handleSectionClick('archive')}
          >
            More Images
          </Link>}
      </p>
    </div>
  );
};

export default Gallery;
