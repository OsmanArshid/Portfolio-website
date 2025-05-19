import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled past 80px (height of navbar)
      const isScrolled = window.scrollY > 80;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once to initialize
    handleScroll();
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className={`nav-background ${scrolled ? 'nav-background-scrolled' : ''}`}></div>
        <ul className="nav-menu">
          <li className="nav-item">
            <HashLink smooth to="/#" className="nav-link">Home</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#about" className="nav-link">About</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#education" className="nav-link">Education</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#experience" className="nav-link">Experience</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#projects" className="nav-link">Projects</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#skills" className="nav-link">Skills</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#awards" className="nav-link">Awards</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#certifications" className="nav-link">Certifications</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#resume" className="nav-link">Resume</HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth to="/#contact" className="nav-link">Contact</HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;