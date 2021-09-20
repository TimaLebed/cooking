import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CommentsWrapper = styled.div`
  margin-top: 100px;
  width: 904px;
  height: 304px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: #181818;
  font-family: "Montserrat-SemiBold", sans-serif;
`;

export const Form = styled.form`
  margin-top: 24px;
  width: 100%;
  max-width: 904px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 800px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #dadada;
  border-radius: 10px;
  outline: none;
  padding-left: 16px;
  font-size: 14px;
  line-height: 19px;
  color: #dadada;
`;

export const Button = styled.button`
  width: 88px;
  height: 40px;
  background: #ffbc01;
  border-radius: 10px;
  cursor: pointer;
  border: 0;
  background-image: url("../../../../assets/icons/details-send.svg");
  background-repeat: no-repeat;
  background-position: center;
`;

export const WrapperComments = styled.div`
  width: 100%;
  max-width: 800px;
  height: 256px;
  overflow: scroll;
`;
