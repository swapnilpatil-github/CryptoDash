import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/swapnil-patil-dev/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/swapnilpatil-github" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} CryptoDash. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
