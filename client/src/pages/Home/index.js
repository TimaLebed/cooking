import React, {Fragment} from "react";
import HomeIntro from "./copmonents/HomeIntro";
import PopularRecipes from "./copmonents/PopularRecipes";
import "./index.css";

function Home() {
  return (
    <Fragment>
      <HomeIntro></HomeIntro>
      <PopularRecipes></PopularRecipes>
    </Fragment>
  )
}

export default Home;
