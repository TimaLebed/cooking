import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  height: 1781px;
  width: 100%;
  max-width: 1680px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1224px;
  height: 1573px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Content = styled.div`
  width: 912px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 30px;
  max-width: 241px;
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Montserrat-SemiBold", sans-serif;
  font-size: 20px;
  line-height: 22px;
  color: #181818;
`;
