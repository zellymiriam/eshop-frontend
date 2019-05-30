import axios from 'axios';
import { GET_ITEMS_SUCCESS, GET_ITEMS_FAILURE } from './types';

const getItemsType = (type, payload)=> ({
  type,
  payload,
});

export const getAllItems = ()=>dispatch=>{

  return axios.get('/api/items').then((response)=>{
    dispatch(getItemsType(GET_ITEMS_SUCCESS, response.data));
  }).catch((error) =>{
    return dispatch(getItemsType(GET_ITEMS_FAILURE, error.response.statusText));
  });
};

const itemInitialState ={
  items:null,
  error:null,
  message:null
};

const itemReducer = (state = itemInitialState, action) => {
  switch (action.type){
  case GET_ITEMS_SUCCESS:
    return {...state, items: action.payload.data.reverse(), message:action.payload.message };
  case GET_ITEMS_FAILURE:
    return { ...state, error: action.payload };
  default:
    return state;
  }
};

export default itemReducer;
