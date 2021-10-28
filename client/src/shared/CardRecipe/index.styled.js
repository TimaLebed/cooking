import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  width: 912px;
  height: 212px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 50px 10px 10px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;

export const CardImg = styled.img`
  width: 288px;
  height: 212px;
  border-radius: 50px 10px;
  background-image: url(${({ cardImg }) => cardImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 24px 24px 0;
  align-items: flex-end;
`;

export const CardViews = styled.p`
  position: relative;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;
  text-align: left;

  &:before {
    content: "";
    background-image: url("../../../static/icons/views.svg");
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
  border: none;
  outline: none;
  background-image: url(../../../../../static/icons/edit.svg);
  background-color: initial;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const WrapperTitleAuthor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 576px;
`;

export const CardDescription = styled.p`
  display: block;
  width: 576px;
  height: 57px;
  margin-top: 16px;
  font-family: "Nunito-Regular", sans-serif;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Wrapper = styled.div`
  width: 576px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

export const WrapperViewsLikesComments = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  width: 345px;
  margin-left: 24px;
`;

export const CardLikes = styled.p`
  margin: 0 47px 0 40px;
  position: relative;
  font-size: 14px;
  line-height: 19px;
  color: #181818;
  font-family: "Nunito-Regular", sans-serif;

  &:before {
    content: "";
    background-image: url("../../../static/icons/likes.svg");
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
    background-image: url("../../../static/icons/comments.svg");
    display: block;
    width: 15px;
    height: 15px;
    position: absolute;
    left: -27px;
    top: 2px;
    transition: all 0.3s;
  }
`;
