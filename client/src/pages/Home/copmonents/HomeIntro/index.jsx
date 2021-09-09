import React from "react";
import Button from "../../../../components/Button";
// import "./index.css";
import {
  HomeWrapper,
  HomeInner,
  HomeContent,
  HomeTitle,
  Form,
  Input,
  Svg,
  HomeNav,
} from "./HomeIntro.styled";

function HomeIntro() {
  return (
    <HomeWrapper>
      <HomeInner>
        <HomeContent>
          <HomeTitle>
            Find Recipies and Сreate Your Favourite Сookbooks
          </HomeTitle>
          <Form>
            <Input
              type="text"
              placeholder="Find Best Recipes..."
              // value={props.searchValue}
              // onChange={props.onSearchInput}
            />
            <Svg height="16" version="1.1" viewBox="0 0 16 16" width="16">
              <path
                fillRule="evenodd"
                d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"
              />
            </Svg>
            <Button inputHome>SEARCH</Button>
          </Form>
          <HomeNav>
            <a href="#">Vegeterian</a>
            <a href="#">Mexican</a>
            <a href="#">Greece Kithcen</a>
            <a href="#">Italy Pizza</a>
            <a href="#">Philippines</a>
            <a href="#">Japan Sushi</a>
          </HomeNav>
        </HomeContent>
      </HomeInner>
    </HomeWrapper>
  );
}

export default HomeIntro;
