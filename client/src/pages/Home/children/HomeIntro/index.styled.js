import styled from "@emotion/styled";
import { css } from '@emotion/react';

export const HomeWrapper = styled.div`
  height: 814px;
  width: 100%;
  max-width: 1616px;
  margin: 0 auto;
  background-image: url(../../../../../static/images/home.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export const HomeInner = styled.div`
  height: 814px;
  width: 100%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const HomeContent = styled.div`
  height: 328px;
  width: 100%;
  max-width: 1016px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HomeTitle = styled.h1`
  width: 808px;
  height: 144px;
  font-size: 56px;
  text-align: left;
  line-height: 72px;
  color: #FFFFFF;
	font-family: "Montserrat-SemiBold", sans-serif;
`;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  width: 1016px;
  height: 70px;
  color: #494949;
  background-color: #F7F7F7;
  font-size: 18px;
	font-family: "Nunito-Regular", sans-serif;
  padding-left: 64px;
  border-radius: 10px;
  outline: none;
  border: none;position: relative;

  &:focus {
    border-color: #2188ff;
    outline: none;
    box-shadow: inset 0 1px 2px rgba(27,31,35,0.075), 0 0 0 0.2em rgba(3,102,214,0.3);
  }
`;

export const Svg = styled.svg`
  fill: currentcolor;
  position: absolute;
  width: 22px;
  height: 22px;
  top: 25px;
  left: 25px;
  display: block;
  color: rgb(198, 203, 209);
`;

export const HomeNav = styled.nav`
  width: 821px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  line-height: 22px;
  color: #FFFFFF;
	font-family: "Nunito-Regular", sans-serif;
`;
