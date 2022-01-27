import { REGISTER, REGFORM ,ERROR_LOGIN,LOGGEDIN} from './types';
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
        if(response.data =="The email already registered!!!" ){
            alert("The email already registered!!!")
        }
        else if (response.status == 200){
            dispatch({
              type : REGISTER,
              payload : true
             });
             dispatch({
                type : LOGGEDIN,
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

export const login = data => dispatch => {

    axios
    .post('http://127.0.0.1:5000/login', data )
    .then((response) => {
        console.log(response)
        if (response.data == true){
            dispatch({
              type : LOGGEDIN ,
              payload : true
             });
             alert("login successfull")
        }
     /*   else if (response.status == 208){
            alert('user email already exist')
        }
        */else {
            dispatch({
                type : ERROR_LOGIN ,
                payload : response.data
               });
            alert(response.data)
        }
    })
    .catch(error => {
        alert(error);
    });
};

/*

export const preferenceAdd = data => dispatch => {

    axios
    .post('http://127.0.0.1:5000/login', data )
    .then((response) => {
        console.log(response)
        if (response.status == 200){
             alert("login successfull")
        }
     else {
            
        
            alert(response.data)
        }
    })
    .catch(error => {
        alert(error);
    });
};
*/
