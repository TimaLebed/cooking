import { addCards } from "../actions";

export const fetchCards = () => {
  return (dispatch) => {
    fetch("./dataCards.json")
      .then((response) => response.json())
      .then((json) => dispatch(addCards(json)));
  };
};
