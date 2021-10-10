import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 97px;
  max-width: 1680px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #181818;
`;

export const FooterInner = styled.div`
  width: 100%;
  max-width: 1224px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterNav = styled.nav`
  width: 100%;
  height: 23px;
  max-width: 357px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito-Regular", sans-serif;
  text-decoration: none;
  line-height: 22px;
  color: #f7f7f7;
`;

export const FooterLinkEmail = styled.a`
  font-size: 16px;
  line-height: 22px;
  color: #ffbc01;
  font-family: "Nunito-Regular", sans-serif;
`;

export const FooterAuthor = styled.p`
  line-height: 22px;
  color: #dadada;
  font-family: "Nunito-Regular", sans-serif;

  &span {
    margin-left: 16px;
    font-family: "Nunito-Bold", sans-serif;
  }
`;
