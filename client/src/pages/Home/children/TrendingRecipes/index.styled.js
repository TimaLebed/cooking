import styled from "@emotion/styled";
import { css } from '@emotion/react';

export const TrendingWrapper = styled.div`
  height: 986px;
  width: 100%;
  max-width: 1616px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../../../../../static/images/trending-back.png);
`;

export const TrendingContent = styled.div`
  height: 778px;
  width: 100%;
  max-width: 1224px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const TrendingSuptitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FFFFFF;
  font-family: "Nunito-Regular", sans-serif;
`;

export const TrendingTitle = styled.h2`
  width: 1110px;
  height: 48px;
  font-size: 40px;
  line-height: 48px;
  color: #181818;
	font-family: "Montserrat-Bold", sans-serif;
  text-align: center;
`;

export const CardsSlider = styled.div`
  width: 1224px;
  height: 460px;
  display: flex;
  justify-content: space-between;
`;

export const Arrow = styled.button`
  position: absolute;
  top: 43%;
  font-size: 80px;
  background-color: inherit;
  border: 0;
  outline: none;
  color: #FFF;

  ${props => props.left && css`
    left: -7%;
  `}

  ${props => props.right && css`
    right: -7%;
  `}
`;

export const CardsPagination = styled.div`
  width: 64px;
  height: 16px;
  border: 1px solid #181818;
`;
