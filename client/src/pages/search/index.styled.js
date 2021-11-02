import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  ${"" /* height: 1781px; */}
  padding-top: 100px;
  padding-bottom: 70px;
  min-height: 100vh;
  ${'' /* max-height: 1780px; */}
  height: 100%;
  width: 100%;
  max-width: 1680px;
  background-color: #f7f7f7;
  display: flex;
  ${"" /* align-items: center; */}
  justify-content: center;
`;

export const Inner = styled.div`
  width: 100%;
  max-width: 1248px;
  ${"" /* max-height: 1537px; */}
  height: 100%;
  ${"" /* height: 1573px; */}
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 936px;
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
