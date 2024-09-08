import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './NavBar.css'; // Import your CSS file

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`menu ${isMenuOpen ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#sponsors">Sponsors</a></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><a href="#team">Team</a></li>
      </ul>

      <div className="social-icons">
        <a href="https://www.instagram.com/optima24_nitt/" target="_blank" rel="noreferrer">
          <InstagramIcon style={{ fontSize: 24, color: 'var(--text-color)' }} />
        </a>
        <a href="https://www.linkedin.com/company/optima-nitt/" target="_blank" rel="noreferrer">
          <LinkedInIcon style={{ fontSize: 24, color: 'var(--text-color)' }} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
