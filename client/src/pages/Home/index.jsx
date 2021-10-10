import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import HomeIntro from "./children/HomeIntro";
import PopularRecipes from "./children/PopularRecipes";
import PopularBooks from "./children/PopularBooks";
import TrendingRecipes from "./children/TrendingRecipes";
import Wrapper from "./index.styled";
import { fetchRecipes } from "../../redux";

const Home = ({ fetchRecipes, recipesData }) => {
  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <Wrapper>
      <HomeIntro />
      {recipesData.loading ? (
        "loading..."
      ) : (
        <PopularRecipes recipes={recipesData.recipes} />
      )}
      <PopularBooks />
      {recipesData.loading ? (
        "loading..."
      ) : (
        <TrendingRecipes recipes={recipesData.recipes} />
      )}
    </Wrapper>
  );
};

Home.propTypes = {
  fetchRecipes: PropTypes.func,
  recipesData: PropTypes.exact({
    recipes: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string,
  }),
};

Home.defaultProps = {
  fetchRecipes: () => {},
  recipesData: {
    recipes: [],
    loading: false,
    error: "",
  },
};

const mapStateToProps = (state) => ({
  recipesData: state.recipes,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRecipes: () => dispatch(fetchRecipes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
