import React from 'react';
import './Footer.css';

const Footer = ({ onAdminPanelClick }) => {
  const handleAdminClick = (e) => {
    e.preventDefault(); // Prevent the default behavior of the anchor tag
    onAdminPanelClick(); // Trigger the passed click handler
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2024 IntegriFIR. All rights reserved.</p>
      </div>
      <div className="admin-container">
        <a href="#" onClick={handleAdminClick} className="admin-link">
          admin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
