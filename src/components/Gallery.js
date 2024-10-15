import React, { useState } from 'react';
import './Gallery.css';
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling
import Modal from 'react-modal'; // Import modal component

// Required for react-modal accessibility
Modal.setAppElement('#root');

const Gallery = ({ images, archive, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false); // Modal open state
  const [activeImage, setActiveImage] = useState(null); // Track the active image

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const openModal = (src) => {
    setActiveImage(src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => openModal(src)} // Open modal on image click
          />
        ))}
      </div>
      <p className="more-images-link">
        {archive && (
          <Link
            to="archive"
            smooth={true}
            duration={500}
            onClick={() => handleSectionClick('archive')}
          >
            More Images
          </Link>
        )}
      </p>

      {/* Modal for zooming in the image */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="image-modal"
        overlayClassName="image-modal-overlay"
      >
        <button onClick={closeModal} className="close-modal-btn">&times;</button> {/* Updated with × symbol */}
        {activeImage && <img src={activeImage} alt="Zoomed" className="zoomed-image" />}
      </Modal>
    </div>
  );
};

export default Gallery;
