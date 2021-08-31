import React from "react";
import "./index.css";

function Card({ card }) {
  return (
    <div className="card" key={card.id}>
      <p className="card__views">{card.views} views</p>
      <img className="card__img" src={card.img} alt=""></img>
      <div className="wrapper-title-author">
        <p className="card__title">{card.title}</p>
        <p className="card__author">{card.author}</p>
      </div>
      <div className="wrapper-likes-comments">
        <p className="card__likes">{card.likes} likes</p>
        <p className="card__comments">{card.comments} comments</p>
      </div>
      </div>
  )
}

export default Card;
