import React, {useState, useEffect} from "react";
import Button from "../../../../components/Button";
import Card from "../../../../components/Card";
import "./index.css";

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

  return (
    <div className="trending-wrapper">
      <div className="trending-context">
        <p className="trending-suptitle">Top 10</p>
        <h2 className="trending-title">Trending Recepies</h2>
        <div className="trending-cards">
        {data.cards.map((item, index) => {
          if(index === 3) return null;
          return <Card trending card={item}></Card>
          })}
        </div>
        <button className="slider__btn-left">&lt;</button>
        <button className="slider__btn-right">&gt;</button>
        <div className="slider-pagination"></div>
        <Button>Show All Recipies</Button>
      </div>
    </div>
  )
}

export default TrendingRecipes;
