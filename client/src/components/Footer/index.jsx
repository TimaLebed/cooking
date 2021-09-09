import React from "react";
import Logo from "../Logo";
// import "./index.css";
import {
  FooterWrapper,
  FooterInner,
  FooterNav,
  FooterLinkEmail,
  FooterAuthor
} from './Footer.styled'

function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <Logo footer></Logo>
        <FooterNav>
          <a href="#">Cookbooks</a>
          <a href="#">Recepies</a>
          <a href="#">About Us</a>
        </FooterNav>
        <FooterLinkEmail href="mailto:plzfeedme@itechart.com">plzfeedme@itechart.com</FooterLinkEmail>
        <FooterAuthor>Study Project v2, 2021 <span>i:TechArt</span></FooterAuthor>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;
