import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-content">
        <div className="navbar-brand">
          ADSONIC DIGITAL AGENCY
        </div>

        <div className="navbar-links-desktop">
          <Link to="/" className="nav-link" onClick={handleNavLinkClick}>Home</Link>
          <Link to="/about" className="nav-link" onClick={handleNavLinkClick}>About Us</Link>
          <Link to="/service" className="nav-link" onClick={handleNavLinkClick}>Service</Link>
          <Link to="/portfolio" className="nav-link" onClick={handleNavLinkClick}>Portfolio</Link>
          <Link to="/blog" className="nav-link" onClick={handleNavLinkClick}>Blog</Link>
          <button className="contact-button">
            <span>Contact Us</span>
            <FaArrowUpRightFromSquare className="contact-icon" />
          </button>
        </div>

        <div className="navbar-menu-mobile">
          <button onClick={toggleMenu} className="menu-toggle-btn">
            {isMenuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <button onClick={toggleMenu} className="close-menu-btn">
            <FaTimes className="menu-icon" />
          </button>
          <Link to="/" className="mobile-link" onClick={handleNavLinkClick}>Home</Link>
          <Link to="/about" className="mobile-link" onClick={handleNavLinkClick}>About Us</Link>
          <Link to="/service" className="mobile-link" onClick={handleNavLinkClick}>Service</Link>
          <Link to="/portfolio" className="mobile-link" onClick={handleNavLinkClick}>Portfolio</Link>
          <Link to="/blog" className="mobile-link" onClick={handleNavLinkClick}>Blog</Link>
          <button className="mobile-contact-button">
            <span>Contact Us</span>
            <FaArrowUpRightFromSquare className="contact-icon" />
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
