import React from "react";
import HomeIntro from "./copmonents/HomeIntro";
import PopularRecipes from "./copmonents/PopularRecipes";
import PopularBooks from "./copmonents/PopularBooks";
import TrendingRecipes from "./copmonents/TrendingRecipes";

import "./index.css";

function Home() {
  return (
    <div className="home-page__wrapper">
      <HomeIntro></HomeIntro>
      <PopularRecipes></PopularRecipes>
      <PopularBooks></PopularBooks>
      <TrendingRecipes></TrendingRecipes>
    </div>
  )
}

export default Home;
