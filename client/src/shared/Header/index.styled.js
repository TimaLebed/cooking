import styled from "@emotion/styled";
import { css } from '@emotion/react';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 88px;
  max-width: 1680px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderInner = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #181818;
	font-family: "Nunito-Regular" , sans-serif;
`;

export const HeaderNav = styled.nav`
  width: 100%;
  height: 22px;
  max-width: 217px;
  display: flex;
  align-items: center;
  justify-content: space-between;
	font-family: "Nunito-Regular" , sans-serif;
  line-height: 22px;
  color: #181818;
`;

export const HeaderForm = styled.form`
  position: relative;
`;

export const HeaderInput = styled.input`
  font-family: inherit;
  width: 284px;
  height: 40px;
  color: rgb(88, 96, 105);
  background-color: #F7F7F7;
  font-size: 14px;
  /* padding: 6px 8px; */
  padding-left: 37px;
  border-radius: 10px;
  outline: none;
  border: none;

  &:focus {
    border-color: #2188ff;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27,31,35,0.075), 0 0 0 0.2em rgba(3,102,214,0.3);
  }
`;

export const HeaderIcon = styled.svg`
  fill: currentcolor;
  position: absolute;
  top: 12px;
  left: 16px;
  display: block;
  color: rgb(198, 203, 209);
`;
