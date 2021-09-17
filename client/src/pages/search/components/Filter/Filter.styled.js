import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const FilterWrapper = styled.div`
  width: 272px;
  height: 372px;
  background-color: #fff;
  padding: 32px 24px 0 24px;
  position: relative;
`;

export const FilterTitle = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: #181818;
  font-family: "Montserrat-SemiBold", sans-serif;
`;

export const ButtonClear = styled.button`
  position: absolute;
  top: 37px;
  right: 24px;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 19px;
  color: #ffbc01;
  font-family: "Nunito-Regular", sans-serif;
  background-color: inherit;
  cursor: pointer;
`;

export const FilterSubtitle = styled.p`
  margin-top: 32px;
  font-size: 16px;
  line-height: 20px;
  color: #181818;
  font-family: "Montserrat-SemiBold", sans-serif;
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
  background-image: url("../../../../assets/icons/filter-arrow.svg");
  background-repeat: no-repeat;
  background-size: 14px;
  background-position: right 16px top 50%;

  &:focus,
  :hover {
    outline: none;
    border: 1px solid #bdc3c7;
  }
`;

export const TitleType = styled.p`
  margin-top: 24px;
  margin-bottom: 18px;
  font-size: 16px;
  line-height: 20px;
  font-family: "Montserrat-SemiBold", sans-serif;
  color: #181818;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  &:last-child {
    margin-top: 20px;
  }
`;

export const Checkbox = styled.input`
  display: none;

  &:checked + ${SpanFake}::before {
    opacity: 1;
  }
`;

export const SpanFake = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #dadada;
  border-radius: 2px;
  position: relative;
  margin-right: 8px;
  text-align: center;

  &::before {
    content: url("../../../../assets/icons/vector.svg");
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: block;
    width: 20px;
    height: 20px;
    background-color: #FFBC01;
    opacity: 0;
    transition: 0.2s;
  }
`;

export const Span = styled.span`
  color: #181818;
  font-size: 14px;
  line-height: 19px;
  font-family: "Nunito-Regular", sans-serif;
`;
