import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './NavBar.css'; // Import your CSS file

const NavBar = ({ setActiveSection, isMobile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSectionClick = (section) => {
    if (!isMobile) {
      setActiveSection(section);
    }
    closeMenu(); // Close the menu after clicking a section
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setActiveSection('about'); // Activate "About" section after scrolling to the top
    }, 500); // Delay to ensure smooth scroll finishes before activation
    closeMenu();
  };

  return (
    <nav>
      <div className="menu-container">
        {/* Hamburger menu */}
        <div className={`hamburger ${isMenuOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Menu items */}
        <ul className={`menu ${isMenuOpen ? 'show' : ''}`}>
          <li>
            <a onClick={handleScrollToTop}>Home</a> {/* Scrolls to top for Home */}
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              onClick={() => handleSectionClick('about')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="events"
              smooth={true}
              duration={500}
              onClick={() => handleSectionClick('events')}
            >
              Events
            </Link>
          </li>
          <li>
            <Link
              to="sponsors"
              smooth={true}
              duration={500}
              onClick={() => handleSectionClick('sponsors')}
            >
              Sponsors
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              onClick={() => handleSectionClick('gallery')}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="team"
              smooth={true}
              duration={500}
              onClick={() => handleSectionClick('team')}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="archive"
              smooth={true}
              duration={500}
              onClick={() => handleSectionClick('archive')}
            >
              Archive
            </Link>
          </li>
        </ul>
      </div>

      {/* Social icons */}
      <div className="social-icons">
        <a href="https://www.instagram.com/optima24_nitt/">
          <InstagramIcon />
        </a>
        <a href="https://www.linkedin.com/in/optima24/">
          <LinkedInIcon />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
