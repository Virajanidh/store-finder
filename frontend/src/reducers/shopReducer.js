import { LOGGEDIN, REGFORM, REGISTER,ERROR_LOGIN } from "../actions/types";

const initialState = {
    data : [],
    isSuccessfullregister : false,
    isloggedin :false,
    error_msg: ''
  };

  const shopReducer = (state = initialState, action)=> {
    switch (action.type) {
      case REGFORM:
        return {
          ...state,
          data : action.payload,
        };
      case REGISTER:
        return {
          ...state,
          isSuccessfullregister: action.payload
        };
        case LOGGEDIN:
          return {
            ...state,
            data : action.payload,
            isloggedin : true

          };
        case ERROR_LOGIN:
          return{
            ...state,
            error_msg : action.payload,
            isloggedin : false,
          };

      default:
        return state;
    }
  }
   export default shopReducer;