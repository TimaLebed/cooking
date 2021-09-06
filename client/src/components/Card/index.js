import React from "react";
import "./index.css";

import {CardWrapper, CardImg, WrapperTitleAuthor, WrapperLikesComments} from "./Card.styled";

function Card(props) {
  return (
    <CardWrapper {...props}>
      <p className="card__views">{props.card.views} views</p>
      <button className="edit-btn"></button>
      <CardImg {...props} alt=""></CardImg>
      <WrapperTitleAuthor {...props}>
        <p className="card__title">{props.card.title}</p>
        <p className="card__author">{props.card.author}</p>
      </WrapperTitleAuthor>
      <WrapperLikesComments {...props}>
        <p className="card__likes">{props.card.likes} likes</p>
        <p className="card__comments">{props.card.comments} comments</p>
      </WrapperLikesComments>
    </CardWrapper>
  )

  // return (
  //   <div className="card" key={card.id}>
  //     <p className="card__views">{card.views} views</p>
  //     <img className="card__img" src={card.img} alt=""></img>
  //     <div className="wrapper-title-author">
  //       <p className="card__title">{card.title}</p>
  //       <p className="card__author">{card.author}</p>
  //     </div>
  //     <div className="wrapper-likes-comments">
  //       <p className="card__likes">{card.likes} likes</p>
  //       <p className="card__comments">{card.comments} comments</p>
  //     </div>
  //   </div>
  // )
}

export default Card;
