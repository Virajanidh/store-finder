import {SEARCH_NAME, SEARCH_PRODUCT, FETCH_PRODUCTS, FETCH_PRODUCT, LOADING, SEARCH_DISTRICT } from './types';
import axios from 'axios';

export const searchProduct = text => dispatch => {
  dispatch({
    type: SEARCH_PRODUCT,
    payload: text
  });
};
export const searchDistrict =text  => dispatch => {
  dispatch({
    type: SEARCH_DISTRICT,
    payload: text
  });
};
export const searchName =text  => dispatch => {
  dispatch({
    type: SEARCH_NAME,
    payload: text
  });
};

export const fetchOnDistrict = (district,sname)  => dispatch => {
  axios
    .get(`http://127.0.0.1:5000/product/`+district)
    .then(response =>{
      if(response.data.information != null){
        let content=[]
        const options =response.data.information
        
        for (let item of options){
            let responsename=item.name
            if(responsename.includes(sname) || sname.includes(responsename)){
              content.push(item)
            }
        }

      dispatch({
        type: FETCH_PRODUCTS,
        payload:{"information":content}
      })
    }
   
      })
    .catch(err => console.log(err));
};



export const fetchProducts =text  => dispatch => {
  axios
    .get(`http://127.0.0.1:5000/users/products/`+text)
    .then(response =>{
      if(response.data.information != null){
      dispatch({
        type: FETCH_PRODUCTS,
        payload: response.data
      })
    }
   
      })
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
