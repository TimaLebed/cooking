import { SET_USER, SET_AUTH} from "./userTypes";

const initialState = {
  user: null,
  isAuth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
