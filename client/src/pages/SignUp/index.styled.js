import styled from "@emotion/styled";
import { css } from '@emotion/react';

export const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 1680px;
  height: 1024px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: #F7F7F7;
  justify-content: flex-end;
  padding-right: 13.6%;
`;

export const SignUpBackground = styled.div`
  width: 100%;
  max-width: 1004px;
  height: 960px;
  position: absolute;
  top: 32px;
  left: 32px;
  background-image: url(../../assets/images/signup-back.png);
  background-repeat: no-repeat;
`;
