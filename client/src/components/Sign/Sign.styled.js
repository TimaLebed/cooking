import styled from "@emotion/styled";
import { css } from '@emotion/react';

export const LoginWrapper = styled.div`
  height: 767px;
  width: 600px;
  padding-left: 56px;
  padding-top: 56px;
  background-color: #fff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  margin-left: 13.6%;
  z-index: 2;
  border-radius: 50px 10px;

  ${props => props.hiddenConfirm && css`
    height: 654px;
  `}
`;

export const LoginTitle = styled.h2`
  margin-top: 48px;
  font-size: 40px;
  line-height: 48px;
  color: #181818;
  font-family: "Montserrat-Bold", sans-serif;
`;

export const LoginSubtitle = styled.p`
  margin-top: 8px;
  font-size: 16px;
  line-height: 22px;
	font-family: "Nunito-SemiBold", sans-serif;
  color: #181818;

  & :last-child{
    color: #FFBC01;
    font-family: "Nunito-Regular", sans-serif;
    text-decoration: none;
    margin-left: 10px;
  }
`;

export const InputField = styled.div`
  margin-top: 60px;
  position: relative;

  ${props => props.hiddenConfirm && css`
    display: none;
  `}
`;

export const Input = styled.input`
  width: 488px;
  height: 54px;
  color: #494949;
  font-size: 18px;
  font-family: "Nunito-Regular", sans-serif;
  padding-left: 20px;
  border: 1px solid #DADADA;
  border-radius: 8px;
  outline: none;
`;

export const Label = styled.label`
  position: absolute;
  top: -30px;
  color: #494949;
  left: 0;
  font-family: "Nunito-Regular", sans-serif;
`;

export const Button = styled.button`
  width: 488px;
  height: 54px;
  margin-top: 56px;
  background: #FFBC01;
  border-radius: 10px;
  color: #181818;
  font-size: 20px;
  line-height: 30px;
  font-family: "Nunito-Bold", sans-serif;
  outline: none;
  border: 0;
`;
