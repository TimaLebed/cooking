import styled from "@emotion/styled";
import { css } from '@emotion/react';

export const StyledButton = styled.button`
  max-height: 54px;
  display: flex;
  justify-content: center;
  padding: 12px 32px;
  border: 2px solid #FFBC01;
  background-color: #FFF;
  border-radius: 10px;
  color: #FFBC01;
  font-size: 20px;
  line-height: 30px;
	font-family: "Nunito-Bold", sans-serif;
  cursor: pointer;

  ${props => props.inputHome && css`
  width: 146px;
  position: absolute;
  right: 8px;
  top: 8px;
  background: #FFBC01;
  color: #181818;
  border: none;
  `}
`;
