import React, {Fragment} from "react";
import HomeIntro from "./copmonents/HomeIntro";
import PopularRecipes from "./copmonents/PopularRecipes";
import PopularBooks from "./copmonents/PopularBooks";
import TrendingRecipes from "./copmonents/TrendingRecipes";
import "./index.css";

function Home() {
  return (
    <Fragment>
      <HomeIntro></HomeIntro>
      <PopularRecipes></PopularRecipes>
      <PopularBooks></PopularBooks>
      <TrendingRecipes></TrendingRecipes>
    </Fragment>
  )
}

export default Home;
