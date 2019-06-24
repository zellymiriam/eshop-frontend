import axios from 'axios';
import { REGISTER_USER_SUCCESS,
  REGISTER_USER_FALIURE,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE } from './types';

const authType = (type, payload)=> ({
  type,
  payload,
});

export const registerUser = (data)=>dispatch=>{

  return axios.post('/api/register', data).then((response)=>{

    dispatch(authType(REGISTER_USER_SUCCESS, response.data));
  }).catch((error) =>{
    return dispatch(authType(REGISTER_USER_FALIURE, error.response.data.error));
  });
};

export const loginUser = (data)=>dispatch=>{

  return axios.post('/api/login', data).then((response)=>{
      if(response.data){
        localStorage.setItem('token',response.data.data.token);

    dispatch(authType(LOGIN_USER_SUCCESS, response.data));

      }



  }).catch((error) =>{
    return dispatch(authType(LOGIN_USER_FAILURE, error.response));
  });
};

const authInitialState ={
  user:null,
  message:null,
  error:null
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type){
  case REGISTER_USER_SUCCESS:
    return {...state, user: action.payload.data, message:action.payload.message };
  case REGISTER_USER_FALIURE:
    return { ...state, error: action.payload };
  case LOGIN_USER_SUCCESS:
    return {...state, user: action.payload.data, message:action.payload.message };
  case LOGIN_USER_FAILURE:
    return { ...state, error: action.payload };
  default:
    return state;
  }
};

export default authReducer;
