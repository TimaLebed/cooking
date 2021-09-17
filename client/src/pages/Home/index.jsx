import React from "react";
import HomeIntro from "./copmonents/HomeIntro";
import PopularRecipes from "./copmonents/PopularRecipes";
import PopularBooks from "./copmonents/PopularBooks";
import TrendingRecipes from "./copmonents/TrendingRecipes";

import { Wrapper } from "./Home.styled";

function Home() {
  return (
    <Wrapper>
      <HomeIntro></HomeIntro>
      <PopularRecipes></PopularRecipes>
      <PopularBooks></PopularBooks>
      <TrendingRecipes></TrendingRecipes>
    </Wrapper>
  )
}

export default Home;
