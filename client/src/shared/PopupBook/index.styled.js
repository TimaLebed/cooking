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

export const PopupContent = styled.div`
  padding: 72px 56px 0;
  margin-top: 300px;
  width: 1016px;
  height: 1555px;
  background-color: #fff;
  box-shadow: 0px 18px 60px rgba(24, 24, 24, 0.7);
  border-radius: 10px;
  transform: scale(0.5);
  transition: all 0.3s;

  ${(props) =>
    props.active &&
    css`
      transform: scale(1);
    `}
`;

export const WrapperTitleAuthor = styled.div`
  width: 544px;
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

export const WrapperImgDescription = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  height: 246px;
  width: 440px;
  border-radius: 50px 10px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Description = styled.div`
  width: 424px;
  height: 246px;
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
  font-size: 14px;
  line-height: 22px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;
`;

export const WrapperLikesComments = styled.div`
  margin-top: 32px;
  width: 240px;
  height: 19px;
  display: flex;
  justify-content: space-between;
`;

export const Like = styled.p`
  margin: 0 47px 0 25px;
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

export const TitleRecipes = styled.p`
  margin-top: 72px;
  font-size: 20px;
  line-height: 24px;
  color: #181818;
  font-family: "Montserrat-SemiBold", sans-serif;
`;

export const WrapperCards = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 904px;
  height: 448px;
`;
