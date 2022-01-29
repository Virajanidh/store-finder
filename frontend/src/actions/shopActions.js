import { REGISTER, REGFORM ,ERROR_LOGIN,LOGGEDIN,LOGOUT,REG_ERROR} from './types';
import axios from 'axios';

export const regformFilling = data => dispatch => {
    dispatch({
      type: REGFORM,
      payload: data
    });
  };
export const logout = () => {
    return {
        type: LOGOUT,
        payload: false
      };
}



export const registerStore = data => dispatch => {

    axios
    .post('http://127.0.0.1:5000/register', data )
    .then((response) => {
        console.log(response)
        if(response.data =="The email already registered!!!" ){
            //alert("The email already registered!!!")
            dispatch({
                type : REG_ERROR,
                payload : response.data
               });

        }
        else if(response.data=='Non of the feilds can be empty!!!!'){
            dispatch({
                type : REG_ERROR,
                payload : response.data
               });
        }
        else if(response.data== 'The feilds name, city, district cannot be numeric !!!!'){
            dispatch({
                type : REG_ERROR,
                payload : response.data
               });
        }
        else if(response.data =='The passowrd should contain atleast 8 charcters with !!!!'){
            dispatch({
                type : REG_ERROR,
                payload : response.data
               });
        }
        else if(response.data=='The password ahould contain atleast one upper case letter !!!!'){
            dispatch({
                type : REG_ERROR,
                payload : response.data
               });
        }
        else if(response.data=='The password ahould contain atleast one integer !!!!'){
            dispatch({
                type : REG_ERROR,
                payload : response.data
               });
        }
        else if (response.status == 200){
            dispatch({
              type : REGISTER,
              payload : response.data
             });
             dispatch({
                type : LOGGEDIN,
                payload : true
               });
             
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
        if(response.data ==="Email or password is incorrect!"){
            alert("Email or password is incorrect!")

        }
        else if (response.status == 200){
            dispatch({
              type : LOGGEDIN ,
              payload : response.data
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
