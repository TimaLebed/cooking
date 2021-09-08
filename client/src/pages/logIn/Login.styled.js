import styled from "@emotion/styled";
import { css } from '@emotion/react';

export const LoginWrapper = styled.div`
  width: 100%;
  max-width: 1680px;
  height: 1024px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #F7F7F7;
`;

export const LoginBackground = styled.div`
  width: 100%;
  max-width: 1004px;
  height: 960px;
  position: absolute;
  top: 32px;
  right: 32px;
  background-image: url(../../assets/images/login-back.png);
  background-repeat: no-repeat;
`;
