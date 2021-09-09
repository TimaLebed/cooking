import React, {useState, useEffect} from "react";
import Card from "../../../../components/Card";
import Button from "../../../../components/Button"
// import "./index.css";
import {
  RecipesWrapper,
  RecipesContent,
  RecipesSuptitle,
  RecipesTitle,
  CardsContainer
} from "./PopularRecipes.styled";

const urlCards = './dataCards.json';

function PopularRecipes() {
  const [data, setData] = useState({ cards: [] });

  useEffect(() => {
    const fetchCards = async () => {
      let response = await fetch(urlCards);
      response = await response.json();

      setData({cards: response});
    };

    fetchCards();
  }, []);

  const cards = data.cards.map((item) => (
    <Card key={item.id} card={item}></Card>
  ));

  return (
    <RecipesWrapper>
      <RecipesContent>
        <RecipesSuptitle>users choice</RecipesSuptitle>
        <RecipesTitle>20 Highest-Rated Recipes</RecipesTitle>
        <CardsContainer>
          {cards}
        </CardsContainer>
        <Button>Show More</Button>
      </RecipesContent>
    </RecipesWrapper>
  )
}

export default PopularRecipes;
