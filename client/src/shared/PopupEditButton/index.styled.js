import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PopupEditWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(24, 24, 24, 0);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
  z-index: 2;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const PopupEdit = styled.div`
  width: 181px;
  height: 51px;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 3%;
  top: 9%;
  transform: scale(0.5);
  transition: all 0.3s;
  ${({ active }) =>
    active &&
    css`
      transform: scale(1);
    `}
`;

export const ButtonPopupEdit = styled.button`
  width: 165px;
  height: 35px;
  display: flex;
  background: #ededed;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  border: 0;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;
  cursor: pointer;
`;
