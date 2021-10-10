import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PopupWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(24, 24, 24, 0.4);
  /* position: fixed; */
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
  z-index: 2;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
      pointer-events: all;
    `}
`;

export const PopupInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 300px;
  width: 1016px;
  height: 1100px;
  background-color: #fff;
  box-shadow: 0px 18px 60px rgba(24, 24, 24, 0.7);
  border-radius: 50px 10px 10px;
  transform: scale(0.5);
  transition: all 0.3s;

  ${(props) =>
    props.active &&
    css`
      transform: scale(1);
    `}
`;

export const Img = styled.img`
  width: 445px;
  height: 663px;
  border-radius: 50px 0px 10px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Content = styled.div`
  margin-top: 65px;
  width: 531px;
  height: 603px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperTitleAuthor = styled.div`
  width: 400px;
  height: 134px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.p`
  font-size: 40px;
  line-height: 48px;
  color: #181818;
  font-family: "Montserrat-Bold", sans-serif;
`;

export const Author = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: #ffbc01;
  font-family: "Nunito-SemiBold", sans-serif;
`;

export const Description = styled.div`
  ${"" /* margin-top: 32px; */}
  width: 475px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DescriptionTitle = styled.h2`
  font-size: 20px;
  line-height: 24px;
  color: #181818;
  font-family: "Montserrat-SemiBold", sans-serif;
`;

export const DescriptionText = styled.p`
  height: 110px;
  overflow: hidden;
  font-size: 14px;
  line-height: 22px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;
`;

export const WrapperDirectionsIngredients = styled.div`
  ${"" /* margin-top: 32px; */}
  width: 410px;
  height: 192px;
  display: flex;
  justify-content: space-between;
`;

export const Directions = styled.div`
  ${"" /* margin-top: 32px; */}
  height: 192px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const DirectionTitle = styled.h2`
  font-size: 20px;
  line-height: 24px;
  color: #181818;
  font-family: "Montserrat-SemiBold", sans-serif;
`;

export const DirectionStep = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;

  &span {
    font-family: "Nunito-Bold", sans-serif;
  }
`;

export const Ingredients = styled.div`
  ${"" /* margin-top: 32px; */}
  height: 192px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const IngredientTitle = styled.h2`
  font-size: 20px;
  line-height: 24px;
  color: #181818;
  font-family: "Montserrat-SemiBold", sans-serif;
`;

export const IngredientStep = styled.p`
  position: relative;
  margin-left: 12px;
  font-size: 14px;
  line-height: 22px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;

  &span {
    font-family: "Nunito-Bold", sans-serif;
  }

  &:before {
    content: "";
    background-image: url(../../../../../../static/icons/circle-yellow.svg);
    display: block;
    width: 5px;
    height: 5px;
    position: absolute;
    top: 50%;
    left: -12px;
    transform: translateY(-50%);
    transition: all 0.3s;
  }
`;

export const ViewsLikesComments = styled.div`
  width: 400px;
  height: 19px;
  display: flex;
  justify-content: space-between;
`;

export const View = styled.p`
  margin: 0 24px 0 25px;
  position: relative;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;

  &:before {
    content: "";
    background-image: url("../../../../../../static/icons/views.svg");
    display: block;
    width: 16px;
    height: 11px;
    position: absolute;
    left: -25px;
    top: 4px;
    transition: all 0.3s;
`;

export const Like = styled.p`
  margin: 0 24px 0 25px;
  position: relative;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;

  &:before {
    content: "";
    background-image: url("../../../../../../static/icons/likes.svg");
    display: block;
    width: 17px;
    height: 15px;
    position: absolute;
    left: -27px;
    top: 2px;
    transition: all 0.3s;
  }
`;

export const Comment = styled.p`
  margin: 0 24px 0 25px;
  position: relative;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;

  &:before {
    content: "";
    background-image: url("../../../../../../static/icons/comments.svg");
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    left: -27px;
    top: 2px;
    transition: all 0.3s;
  }
`;
