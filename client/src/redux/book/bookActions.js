import bookApi from "../../api/BookApi";
import {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
  CREATE_BOOK_REQUEST,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAILURE,
} from "./bookTypes";

export const fetchBooksRequest = () => ({
  type: FETCH_BOOKS_REQUEST,
});

export const fetchBooksSuccess = (books) => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: books,
});

export const fetchBooksFailure = (error) => ({
  type: FETCH_BOOKS_FAILURE,
  payload: error,
});

export const fetchBooks = () => (dispatch) => {
  dispatch(fetchBooksRequest());
  bookApi
    .getBooks()
    .then((data) => dispatch(fetchBooksSuccess(data)))
    .catch(({ message }) => dispatch(fetchBooksFailure(message)));
};

export const createBookRequest = () => ({
  type: CREATE_BOOK_REQUEST,
});

export const createBookSuccess = (book) => ({
  type: CREATE_BOOK_SUCCESS,
  payload: book,
});

export const createBookFailure = (error) => ({
  type: CREATE_BOOK_FAILURE,
  payload: error,
});

export const createOneBook = () => (dispatch) => {
  dispatch(createBookRequest());
  bookApi
    .createBook()
    .then((data) => dispatch(createBookSuccess(data)))
    .catch(({ message }) => dispatch(createBookFailure(message)));
};
