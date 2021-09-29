import styled from "@emotion/styled";
import { css } from '@emotion/react';

export const LogoWrapper = styled.div`
  width: 112px;
	height: 33px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LogoImg = styled.div`
  width: 17px;
  height: 24px;
  background-image: url("../../../static/icons/logo.svg");
  background-repeat: no-repeat;
`;

export const LogoTitle = styled.div`
  font-family: "Nunito-Bold", sans-serif;
	font-size: 24px;
	line-height: 33px;

  & :first-of-type {
  	color: #181818;

    ${props => props.footer && css`
	  color: #fff;
    `}
  }

  & :last-child {
	  color: #FFBC01;
  }
`;
