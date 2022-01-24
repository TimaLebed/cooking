import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PopupWrapper = styled.div`
  width: 100%;
  background-color: rgba(24, 24, 24, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
  z-index: 2;
  backdrop-filter: blur(5px);

  ${(props) =>
    props.active &&
    css`
      height: 100%;
      opacity: 1;
      pointer-events: all;
    `}
`;

export const PopupContent = styled.div`
  padding: 72px 56px 0;
  width: 808px;
  max-height: 1492px;
  margin-top: 5%;
  background-color: #fff;
  box-shadow: 0px 18px 60px rgba(24, 24, 24, 0.7);
  border-radius: 10px;
  overflow-y: scroll;
  transform: scale(0.5);
  transition: all 0.3s;

  ${(props) =>
    props.active &&
    css`
      transform: scale(1);
    `}
`;

export const Title = styled.p`
  font-size: 40px;
  line-height: 48px;
  color: #181818;
  font-family: "Montserrat-Bold", sans-serif;
`;

export const InputField = styled.div`
  margin-top: 74px;
  position: relative;
`;

export const TitleRecipe = styled.p`
  margin-top: 40px;
  color: #181818;
  line-height: 20px;
  font-family: "Montserrat-SemiBold", sans-serif;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  color: #494949;
  font-size: 18px;
  font-family: "Nunito-Regular", sans-serif;
  padding-left: 20px;
  border: 1px solid #dadada;
  border-radius: 8px;
  outline: none;
`;

export const Label = styled.label`
  position: absolute;
  top: -37px;
  left: 0;
  color: #181818;
  line-height: 20px;
  font-family: "Montserrat-SemiBold", sans-serif;
`;

export const Textarea = styled.textarea`
  width: 100%;
  max-width: 696px;
  min-height: 100px;
  max-height: 215px;
  padding-top: 10px;
  color: #494949;
  font-size: 18px;
  font-family: "Nunito-Regular", sans-serif;
  padding-left: 20px;
  border: 1px solid #dadada;
  border-radius: 8px;
  outline: none;
`;

export const Button = styled.button`
  margin-top: 24px;
  height: 62px;
  display: flex;
  justify-content: center;
  padding: 16px 32px;
  border: 2px solid #ffbc01;
  background-color: #ffbc01;
  border-radius: 10px;
  color: #181818;
  font-size: 20px;
  line-height: 30px;
  font-family: "Nunito-Bold", sans-serif;
  cursor: pointer;
`;

export const Select = styled.select`
  width: 224px;
  height: 40px;
  padding: 11px 16px;
  margin-top: 16px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;
  font-size: 14px;
  line-height: 19px;
  border: 1px solid #dadada;
  border-radius: 4px;
  appearance: none;
  background-image: url("../../../../../static/icons/filter-arrow.svg");
  background-repeat: no-repeat;
  background-size: 14px;
  background-position: right 16px top 50%;

  &:focus,
  :hover {
    outline: none;
    border: 1px solid #bdc3c7;
  }
`;

export const WrapperCards = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 448px;
`;
