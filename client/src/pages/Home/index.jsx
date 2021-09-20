import React from "react";
import { connect } from "react-redux";

import { HomeIntro } from "./children/HomeIntro";
import { PopularRecipes } from "./children/PopularRecipes";
import { PopularBooks } from "./children/PopularBooks";
import { TrendingRecipes } from "./children/TrendingRecipes";
import { fetchCards } from "../../api";
import { useReduxApi } from "../../hooks/useReduxApi";

import { Wrapper } from "./index.styled";

const Home = ({ fetchCards }) => {
  // const { data } = useFetch("./dataCards.json");
  // const cards = data || [];

  const { data } = useReduxApi(fetchCards, "cardsReducer");
  const cards = data.cards || [];

  return (
    <Wrapper>
      <HomeIntro></HomeIntro>
      <PopularRecipes cards={cards}></PopularRecipes>
      <PopularBooks></PopularBooks>
      <TrendingRecipes cards={cards}></TrendingRecipes>
    </Wrapper>
  );
};

const mapDispatchToProps = {
  fetchCards,
};

export default connect(null, mapDispatchToProps)(Home);
