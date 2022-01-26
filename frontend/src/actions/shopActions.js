import { REGISTER, REGFORM } from './types';
import axios from 'axios';

export const regformFilling = data => dispatch => {
    dispatch({
      type: REGFORM,
      payload: data
    });
  };


export const registerStore = data => dispatch => {

    axios
    .post('http://127.0.0.1:5000/register', data )
    .then((response) => {
        console.log(response)
        if (response.status == 200){
            dispatch({
              type : REGISTER,
              payload : true
             });
             alert("registration successfull")
        }
     /*   else if (response.status == 208){
            alert('user email already exist')
        }
        */else {
            alert(response.status)
        }
    })
    .catch(error => {
        alert(error);
    });
};