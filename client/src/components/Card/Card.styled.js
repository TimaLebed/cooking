import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CardWrapper = styled.div`
  width: 288px;
  height: 414px;
  position: relative;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: #fff;

  ${(props) =>
    props.trending &&
    css`
      width: 392px;
      height: 460px;
    `}

    ${(props) =>
    props.description &&
    css`
      height: 487px;
    `}
`;

export const CardViews = styled.p`
  margin: 24px 0 16px 48px;
  position: relative;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;
  text-align: left;

  &:before {
    content: "";
    background-image: url("../../assets/icons/views.svg");
    display: block;
    width: 16px;
    height: 11px;
    position: absolute;
    left: -25px;
    top: 4px;
    transition: all 0.3s;
  }
`;

export const ButtonEdit = styled.button`
  width: 19px;
  height: 10px;
  position: absolute;
  right: 24px;
  top: 28px;
  border: none;
  outline: none;
  background-image: url(../../../../assets/icons/edit.svg);
  background-color: initial;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const CardImg = styled.img`
  margin-left: 24px;
  width: 240px;
  height: 240px;
  border-radius: 50px 10px;
  background-image: url(${(props) => props.card.img});
  background-repeat: no-repeat;
  background-size: contain;

  ${(props) =>
    props.trending &&
    css`
      width: 344px;
      height: 344px;
    `}
`;

export const WrapperTitleAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 240px;
  margin: 16px auto 0;

  ${(props) =>
    props.trending &&
    css`
      width: 344px;
    `}
`;

export const CardDescription = styled.p`
  display: none;
  width: 240px;
  height: 57px;
  margin: 16px auto 0;
  font-family: "Nunito-Regular", sans-serif;
  font-size: 14px;
  line-height: 19px;
  color: #181818;

  ${(props) =>
    props.description &&
    css`
      display: block;
      margin: 16px auto 0px;
    `}
`;

export const CardTitle = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: #181818;
  font-family: "Montserrat-SemiBold", sans-serif;
  text-align: left;
`;

export const CardAuthor = styled.p`
  position: relative;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;
`;

export const WrapperLikesComments = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  width: 240px;
  margin: 32px auto 0;

  ${(props) =>
    props.trending &&
    css`
      display: none;
    `}
`;

export const CardLikes = styled.p`
  margin: 0 47px 0 25px;
  position: relative;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;

  &:before {
    content: "";
    background-image: url("../../assets/icons/likes.svg");
    display: block;
    width: 17px;
    height: 15px;
    position: absolute;
    left: -27px;
    top: 2px;
    transition: all 0.3s;
  }
`;

export const CardComments = styled.p`
  position: relative;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;

  &:before {
    content: "";
    background-image: url("../../assets/icons/comments.svg");
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    left: -27px;
    top: 2px;
    transition: all 0.3s;
  }
`;
