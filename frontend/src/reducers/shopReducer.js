import { REGFORM, REGISTER } from "../actions/types";

const initialState = {
    data : [],
    isSuccessfullregister : false
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

      default:
        return state;
    }
  }
   export default shopReducer;