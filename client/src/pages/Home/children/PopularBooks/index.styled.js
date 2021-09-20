import styled from "@emotion/styled";
import { css } from '@emotion/react';

export const BooksWrapper = styled.div`
  height: 1034px;
  width: 100%;
  max-width: 1616px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BooksContent = styled.div`
  height: 802px;
  width: 100%;
  max-width: 1224px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const BooksSuptitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #FFBC01;
  font-family: "Nunito-Regular", sans-serif;
`;

export const BooksTitle = styled.h2`
  width: 1110px;
  height: 48px;
  font-size: 40px;
  line-height: 48px;
  color: #181818;
	font-family: "Montserrat-Bold", sans-serif;
  text-align: center;
`;

export const BooksCards = styled.div`
  width: 1224px;
  height: 540px;
  display: flex;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 288px;
  height: 258px;
  /* filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.24)); */
  border-radius: 50px 10px;
  position: relative;

  ${props => props.large && css`
    width: 600px;
    height: 540px;
    /* background: url(../../../../assets/images/books/all-pancakes.png), linear-gradient(to top, rgba(255,0,0,0.3), rgba(255,0,0,0.3)); */
    background-image: url(../../../../assets/images/books/all-pancakes.png);
  `}

  ${props => props.medium && css`
    width: 600px;
    height: 258px;
    background-image: url(../../../../assets/images/books/icecream.png);
  `}

  ${props => props.left && css`
    background-image: url(../../../../assets/images/books/fast-breakfast.png);
  `}

  ${props => props.right && css`
    background-image: url(../../../../assets/images/books/fruit-veg.png);
  `}
`;

export const ContainerThreeCards = styled.div`
  width: 600px;
  height: 540px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const CardButton = styled.button`
  position: absolute;
  left: 24px;
  bottom: 24px;
  display: flex;
  justify-content: center;
  padding: 8px 24px;
  border: none;
  background-color: #FFF;
  border-radius: 10px;
  color: #181818;
  font-size: 18px;
  line-height: 22px;
	font-family: "Nunito-Bold", sans-serif;
  cursor: pointer;
`;

export const ButtonEdit = styled.button`
  width: 19px;
  height: 10px;
  position: absolute;
  right: 24px;
  top: 24px;
  border: none;
  outline: none;
  background-image: url(../../../../assets/icons/edit.svg);
  background-color: initial;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;
