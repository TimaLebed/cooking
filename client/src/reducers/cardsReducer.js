const defaultState = {
  cards: [],
};

const ADD_CARDS = "ADD_CARDS";

export const cardsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_CARDS:
      return { ...state, cards: [...state.cards, ...payload] };
    default:
      return state;
  }
};
