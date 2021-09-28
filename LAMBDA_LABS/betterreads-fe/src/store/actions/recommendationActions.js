import {
  FETCH_RECOMMEDATIONS_START,
  FETCH_RECOMMEDATIONS_SUCCESS,
  FETCH_RECOMMEDATIONS_FAILURE,
  FETCH_SHELF_RECOMMENDATIONS,
  FETCH_BOOK_RECOMMENDATIONS,
  ADD_BASED_ON,
  ADD_RECOMMENDATIONS,
} from './types';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

const DS_API = process.env.REACT_APP_API_URL || 'https://api.readrr.app';

export const fetchShelfRecommendations = (books) => (dispatch, getState) => {
  dispatch({ type: FETCH_RECOMMEDATIONS_START });
  const state = getState();
  const userID = state.authentication.user.subject;
  axiosWithAuth()
    .post(`${DS_API}/api/${userID}/recommendations`, { books: books })
    .then((response) => {
      const newBookArray = response.data.recommendations.recommendations.map(
        (book) => {
          return {
            authors: book.authors && book.authors.toString(),
            averageRating: book.averageRating || null,
            categories: book.categories || null,
            description: book.description || null,
            googleId: book.googleId,
            isEbook: book.isEbook || null,
            isbn10: book.isbn10 || null,
            isbn13: book.isbn13 || null,
            language: book.language || null,
            pageCount: book.pageCount || null,
            publishedDate: book.publishedDate || null,
            publisher: book.publisher || null,
            smallThumbnail: book.smallThumbnail
              ? book.smallThumbnail.replace('http://', 'https://')
              : null,
            textSnippet: book.textSnippet || null,
            title: book.title || null,
            thumbnail: book.thumbnail
              ? book.thumbnail.replace('http://', 'https://')
              : null,
            webReaderLink: book.webReaderLink || null,
          };
        }
      );
      dispatch({ type: FETCH_SHELF_RECOMMENDATIONS, payload: newBookArray });
      dispatch({ type: FETCH_RECOMMEDATIONS_SUCCESS });
    })
    .catch((error) => console.log('Shelf Recs: ', error));
};

export const fetchBookRecommendations = (book) => (dispatch, getState) => {
  dispatch({ type: FETCH_RECOMMEDATIONS_START });
  const state = getState();
  const userID = state.authentication.user.subject;
  axiosWithAuth()
    .post(`${DS_API}/api/${userID}/recommendations`, { books: [book] })
    .then((response) => console.log(''))
    .catch((error) => console.log('Book Recs: ', error));
};

export const addBookRecommendations = (books) => (dispatch, getState) => {
  dispatch({ type: FETCH_RECOMMEDATIONS_START });
  console.log(books);
  dispatch({ type: FETCH_BOOK_RECOMMENDATIONS, payload: books });
};

export const fetchRecommendations = () => (dispatch, getState) => {
  dispatch({ type: FETCH_RECOMMEDATIONS_START });
  const state = getState();
  const userID = state.authentication.user.subject;
  axiosWithAuth()
    .get(`${DS_API}/api/${userID}/recommendations`)
    .then((response) => {
      const newBookArray = response.data.recommendations.recommendations.map(
        (book) => {
          return {
            authors: book.authors && book.authors.toString(),
            averageRating: book.averageRating || null,
            categories: book.categories || null,
            description: book.description || null,
            googleId: book.googleId,
            isEbook: book.isEbook || null,
            isbn10: book.isbn10 || null,
            isbn13: book.isbn13 || null,
            language: book.language || null,
            pageCount: book.pageCount || null,
            publishedDate: book.publishedDate || null,
            publisher: book.publisher || null,
            smallThumbnail: book.smallThumbnail
              ? book.smallThumbnail.replace('http://', 'https://')
              : null,
            textSnippet: book.textSnippet || null,
            title: book.title || null,
            thumbnail: book.thumbnail
              ? book.thumbnail.replace('http://', 'https://')
              : null,
            webReaderLink: book.webReaderLink || null,
          };
        }
      );
      dispatch({
        type: FETCH_RECOMMEDATIONS_SUCCESS,
      });
      dispatch({
        type: ADD_BASED_ON,
        payload: response.data.recommendations.based_on,
      });
      dispatch({ type: ADD_RECOMMENDATIONS, payload: newBookArray });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: FETCH_RECOMMEDATIONS_FAILURE, payload: error.response });
    });
};
