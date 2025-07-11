import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Panne Lal. All rights reserved.</p>
      <div className="socials">
        <a
          href="https://www.linkedin.com/in/panne-lal-3a347416b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
          <a
          href="https://mail.google.com/mail/?view=cm&to=kumarpanne123@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
       
          rel="noopener noreferrer"
        >
          Call:7317216616
        </a>
      </div>
    </footer>
  );
};

export default Footer;
