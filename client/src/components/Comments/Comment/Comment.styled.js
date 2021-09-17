import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CommentWrapper = styled.div`
  width: 100%;
  max-width: 792px;
  height: 68px;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

export const Img = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 55px;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperAuthorTime = styled.div`
  width: 100%;
  max-width: 716px;
  height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Author = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: #494949;
  font-family: "Nunito-SemiBold", sans-serif;
`;

export const Time = styled.p`
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;
`;

export const Description = styled.p`
  width: 716px;
  height: 38px;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  overflow: hidden;
  font-family: "Nunito-Regular", sans-serif;
`;
