import React, {useState, useEffect} from "react";
import Button from "../../../../components/Button";
import Card from "../../../../components/Card";
import {
  TrendingWrapper,
  TrendingContent,
  TrendingSuptitle,
  TrendingTitle,
  CardsSlider,
  Arrow,
  CardsPagination
} from "./TrendingRecipes.styled";

const urlCards = './dataCards.json';

function TrendingRecipes() {
  const [data, setData] = useState({ cards: [] });

  useEffect(() => {
    const fetchCards = async () => {
      let response = await fetch(urlCards);
      response = await response.json();

      setData({cards: response});
    };

    fetchCards();
  }, []);

  const cards = data.cards.map((item, index) => {
    if(index === 3) return null;

    return <Card trending key={item.id} card={item}></Card>
  });

  return (
    <TrendingWrapper>
      <TrendingContent>
        <TrendingSuptitle>Top 10</TrendingSuptitle>
        <TrendingTitle>Trending Recepies</TrendingTitle>
        <CardsSlider>
          {cards}
        </CardsSlider>
        <Arrow left>&lt;</Arrow>
        <Arrow right>&gt;</Arrow>
        <CardsPagination></CardsPagination>
        <Button>Show All Recipies</Button>
      </TrendingContent>
    </TrendingWrapper>
  )
}

export default TrendingRecipes;
