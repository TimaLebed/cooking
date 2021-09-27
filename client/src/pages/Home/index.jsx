import React, { useEffect } from "react";
import { connect } from "react-redux";

import { HomeIntro } from "./children/HomeIntro";
import { PopularRecipes } from "./children/PopularRecipes";
import { PopularBooks } from "./children/PopularBooks";
import { TrendingRecipes } from "./children/TrendingRecipes";
import { fetchRecipes } from "../../redux";

import { Wrapper } from "./index.styled";

const Home = ({ fetchRecipes, recipesData }) => {
  useEffect(() => {
    return () => fetchRecipes();
  }, []);

  return (
    <Wrapper>
      <HomeIntro></HomeIntro>
      {recipesData.loading ? (
        "loading..."
      ) : (
        <PopularRecipes recipes={recipesData.recipes}></PopularRecipes>
      )}

      <PopularBooks></PopularBooks>
      {recipesData.loading ? (
        "loading..."
      ) : (
        <TrendingRecipes recipes={recipesData.recipes}></TrendingRecipes>
      )}
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    recipesData: state.recipes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
