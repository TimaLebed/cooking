import React, {Fragment} from "react";
import HomeIntro from "./copmonents/HomeIntro";
import PopularRecipes from "./copmonents/PopularRecipes";
import PopularBooks from "./copmonents/PopularBooks";
import "./index.css";

function Home() {
  return (
    <Fragment>
      <HomeIntro></HomeIntro>
      <PopularRecipes></PopularRecipes>
      <PopularBooks></PopularBooks>
    </Fragment>
  )
}

export default Home;
