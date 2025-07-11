import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="logo">Panne Lal</div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a
          href="#about"
          onClick={() => handleLinkClick('about')}
          className={activeSection === 'about' ? 'active' : ''}
        >
          About
        </a>
        <a href="#projects" onClick={() => handleLinkClick('projects')}
          className={activeSection === 'projects' ? 'active' : ''}>
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => handleLinkClick('contact')}
          className={activeSection === 'contact' ? 'active' : ''}
        >
          Contact
        </a>
        <a
          href="#skills"
          onClick={() => handleLinkClick('skills')}
          className={activeSection === 'skills' ? 'active' : ''}
        >
          Skills
        </a>
      </nav>
      <div className="toggle" onClick={handleToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
