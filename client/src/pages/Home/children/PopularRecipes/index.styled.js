import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const RecipesWrapper = styled.div`
  height: 780px;
  width: 100%;
  max-width: 1616px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const RecipesContent = styled.div`
  height: 676px;
  width: 100%;
  max-width: 1224px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const RecipesSuptitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffbc01;
  font-family: "Nunito-Regular", sans-serif;
`;

export const RecipesTitle = styled.h2`
  width: 1110px;
  height: 48px;
  font-size: 40px;
  line-height: 48px;
  color: #181818;
  font-family: "Montserrat-Bold", sans-serif;
  text-align: center;
`;

export const CardsContainer = styled.div`
  width: 1224px;
  height: 414px;
  display: flex;
  justify-content: space-between;
`;
