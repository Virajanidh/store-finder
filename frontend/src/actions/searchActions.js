import { SEARCH_PRODUCT, FETCH_PRODUCTS, FETCH_PRODUCT, LOADING } from './types';
import axios from 'axios';

export const searchProduct = text => dispatch => {
  dispatch({
    type: SEARCH_PRODUCT,
    payload: text
  });
};

export const fetchProducts = text => dispatch => {
  axios
    .get(`http://127.0.0.1:5000/products/`+text)
    .then(response =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchProduct = id => dispatch => {
  axios
    .get(`http://127.0.0.1:5000/products/`+id)
    .then(response =>
      dispatch({
        type: FETCH_PRODUCT,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};
