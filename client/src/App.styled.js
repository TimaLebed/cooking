import { css } from "@emotion/react";
import styled from "@emotion/styled";

import MontserratSemiBold from "../static/fonts/Montserrat/Montserrat-SemiBold.ttf";
import MontserratBold from "../static/fonts/Montserrat/Montserrat-Bold.ttf";
import NunitoBold from "../static/fonts/Nunito_Sans/NunitoSans-Bold.ttf";
import NunitoSemiBold from "../static/fonts/Nunito_Sans/NunitoSans-SemiBold.ttf";
import NunitoRegular from "../static/fonts/Nunito_Sans/NunitoSans-Regular.ttf";

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: "Montserrat-SemiBold";
    src: url(${MontserratSemiBold}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Montserrat-Bold";
    src: url(${MontserratBold}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Nunito-Bold";
    src: url(${NunitoBold}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Nunito-SemiBold";
    src: url(${NunitoSemiBold}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Nunito-Regular";
    src: url(${NunitoRegular}) format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
