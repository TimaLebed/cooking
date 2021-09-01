import React from "react";
import Button from "../../../../components/Button"
import "./index.css";

function PopularBooks() {
  return (
    <div className="books-wrapper">
      <div className="books-context">
        <p className="books-suptitle">Our choice</p>
        <h2 className="books-title">Most Popular CookBooks</h2>
        <div className="books-cards">
          <div className="books-cards__card large">
            <button className="books-cards-btn" type="button">Its All About Pancakes</button>
            <button className="edit-btn" type="button"></button>
          </div>
          <div className="container-three-cards">
            <div className="books-cards__card medium">
              <button className="books-cards-btn" type="button">Iccceeesream Dream</button>
              <button className="edit-btn" type="button"></button>
            </div>
            <div className="books-cards__card left">
              <button className="books-cards-btn" type="button">Fast Breakfast</button>
              <button className="edit-btn" type="button"></button>
            </div>
            <div className="books-cards__card right">
              <button className="books-cards-btn" type="button">Fruits and Vegetables</button>
              <button className="edit-btn" type="button"></button>
            </div>
          </div>
        </div>
        <Button>Show More</Button>
      </div>
    </div>
  )
}

export default PopularBooks;
