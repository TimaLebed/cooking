import styled from "@emotion/styled";
import { css } from '@emotion/react';

export const CardWrapper = styled.div`
  width: 288px;
  height: 414px;
  position: relative;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #FFF;

  ${props => props.trending && css`
  width: 392px;
  height: 460px;
  `}
`;

export const CardImg = styled.img`
  margin-left: 24px;
  width: 240px;
  height: 240px;
  border-radius: 50px 10px;
  background-image: url(${props => props.card.img});
  background-repeat: no-repeat;
  background-size: contain;

  ${props => props.trending && css`
  width: 344px;
  height: 344px;
  `}
`;

export const WrapperTitleAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 240px;
  margin: 16px auto 32px;

  ${props => props.trending && css`
  margin: 16px auto 0px;
  width: 344px
  `}
`;

export const WrapperLikesComments = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  width: 240px;
  margin: 0 auto;

  ${props => props.trending && css`
  display: none;
  `}
`;
