import React from "react";
import Logo from "../Logo";
import "./index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Logo footer></Logo>
        <nav className="footer-nav">
          <a href="#" className="footer-nav__element">Cookbooks</a>
          <a href="#" className="footer-nav__element">Recepies</a>
          <a href="#" className="footer-nav__element">About Us</a>
        </nav>
        <a href="mailto:plzfeedme@itechart.com" className="footer__email-link">plzfeedme@itechart.com</a>
        <p className="footer__author">Study Project v2, 2021 <span>i:TechArt</span></p>
      </div>
    </footer>
  );
}

export default Footer;
