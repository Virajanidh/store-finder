import {
  SEARCH_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  LOADING,
  LOGGEDIN, REGFORM, REGISTER,ERROR_LOGIN, LOGOUT, REG_ERROR,SEARCH_DISTRICT, SEARCH_NAME
} from '../actions/types';

const initialState = {
  text: '',
  products: [],
  loading: false,
  product: [],
  isUserIn:false,
  data : [],
  isSuccessfullregister : false,
  isloggedin :false,
  error_msg: '',
  reg_error : '',
  searchdistrict :'',
  searchname:''
};

const searchReducer = (state = initialState, action)=> {
  switch (action.type) {
    case SEARCH_PRODUCT:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isUserIn : true,
        loading: false
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };

      case REGFORM:
        return {
          ...state,
          data : action.payload,
        };
      case REGISTER:
        return {
          ...state,
          isSuccessfullregister: action.payload,
          data:action.payload,
          reg_error:'Successfully registered',
          error_msg : ""
        };
        case LOGGEDIN:
          return {
            ...state,
            data : action.payload,
            isloggedin : true,
            error_msg : ""


          };
        case ERROR_LOGIN:
          return{
            ...state,
            error_msg : action.payload,
            isloggedin : false,
          };
        case LOGOUT:
          return{
            ...state,
            isloggedin : action.payload,
            isSuccessfullregister :action.payload,
            error_msg : ""
          };
    case REG_ERROR:
      return {
        ...state,
        isSuccessfullregister: false,
        reg_error:action.payload
      };
    case SEARCH_DISTRICT:
      return{
      ...state,
      searchdistrict: action.payload,
      loading: false
    };
    case SEARCH_NAME:
      return{
        ...state,
        searchname: action.payload,
        loading: false
      };
      
    default:
      return state;
  }
}
 export default searchReducer;