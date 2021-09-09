import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import Button from "../Button";
import {
  HeaderWrapper,
  HeaderInner,
  HeaderNav,
  HeaderForm,
  HeaderInput,
  HeaderIcon,
} from "./Header.styled"

function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo></Logo>
        <HeaderNav>
          <a href="#">Recepies</a>
          <a href="#">Cookbooks</a>
        </HeaderNav>
        <HeaderForm>
          <HeaderInput
            type="text"
            // value={props.searchValue}
            // onChange={props.onSearchInput}
          />
          <HeaderIcon className="header-search__icon" height="16" version="1.1" viewBox="0 0 16 16" width="16">
            <path fillRule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z" />
          </HeaderIcon>
        </HeaderForm>
        <Button>Create cookBook</Button>
        <Link to="/login" className="sign-in">Sign in</Link>
      </HeaderInner>
    </HeaderWrapper>
  );
}

export default Header;