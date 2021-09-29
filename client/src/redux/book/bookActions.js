import bookApi from "../../api/BookApi";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from "./bookTypes";

export const fetchBooks = () => {
  return (dispatch) => {
    dispatch(fetchBooksRequest());
    bookApi
      .getBooks()
      .then((data) => dispatch(fetchBooksSuccess(data)))
      .catch(({ message }) => dispatch(fetchBooksFailure(message)));
  };
};

export const fetchBooksRequest = () => {
  return {
    type: FETCH_BOOKS_REQUEST,
  };
};

export const fetchBooksSuccess = (books) => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

export const fetchBooksFailure = (error) => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error,
  };
};
