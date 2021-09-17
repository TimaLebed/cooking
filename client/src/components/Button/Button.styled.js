import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const StyledButton = styled.button`
  max-height: 54px;
  display: flex;
  justify-content: center;
  padding: 12px 32px;
  border: 2px solid #ffbc01;
  background-color: #fff;
  border-radius: 10px;
  color: #ffbc01;
  font-size: 20px;
  line-height: 30px;
  font-family: "Nunito-Bold", sans-serif;
  cursor: pointer;

  ${(props) =>
    props.inputHome &&
    css`
      width: 146px;
      position: absolute;
      right: 8px;
      top: 8px;
      background: #ffbc01;
      color: #181818;
      border: none;
    `}

    ${(props) =>
    props.details &&
    css`
      position: absolute;
      right: 56px;
      top: 72px;
      background: #ffbc01;
      color: #181818;
      border: none;
    `}
`;
