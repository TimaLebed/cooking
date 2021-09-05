import { css } from '@emotion/react';

import MontserratSemiBold from "./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"
import NunitoBold from "./assets/fonts/Nunito_Sans/NunitoSans-Bold.ttf"
import NunitoRegular from "./assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf"

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
    font-family: "Nunito-Bold";
    src: url(${NunitoBold}) format("truetype");
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
  }
`;
