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
        <p className="trending-suptitle">Our choice</p>
        <h2 className="trending-title">Most Popular CookBooks</h2>
        <div className="trending-cards">
        {data.cards.map((item) => (
            <Card card={item}></Card>
          ))}
          {/* <Card card={data.cards[0]}></Card> */}
          {/* <Card card={data.cards[0]}></Card> */}
          {/* <Card card={data.cards[0]}></Card> */}
        </div>
        <div className="swiper-pagination"></div>
        <Button>Show All Recipies</Button>
      </div>
    </div>
  )
}

export default TrendingRecipes;
