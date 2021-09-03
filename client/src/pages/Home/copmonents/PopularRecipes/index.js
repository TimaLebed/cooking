import React, {useState, useEffect} from "react";
import Card from "../../../../components/Card";
import Button from "../../../../components/Button"
import "./index.css";

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

  return (
    <div className="recipes-wrapper">
      <div className="recipes-context">
        <p className="recipes-suptitle">users choice</p>
        <h2 className="recipes-title">20 Highest-Rated Recipes</h2>
        <div className="recipes-cards">
          {data.cards.map((item) => (
            <Card card={item}></Card>
          ))}
        </div>
        <Button>Show More</Button>
      </div>
    </div>
  )
}

export default PopularRecipes;
