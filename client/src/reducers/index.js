import { ADD_ITEM } from "../constants/action-types";
import { LIFT_TOKEN_TO_STATE } from "../constants/action-types";
import { LOGOUT } from "../constants/action-types";
import { REMOVE_TOKEN } from "../constants/action-types";
import { SET_GOOGLE_USER } from "../constants/action-types";
import { REMOVE_GOOGLE_USER } from "../constants/action-types";
import axios from 'axios';


const initialState = {
  items: [],
  token: '',
  user: null,
  googleUser: null
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return Object.assign({}, state, {items: initialState.items.push(action.payload)})

    case LIFT_TOKEN_TO_STATE:
      console.log("LIFT_TOKEN_TO_STATE")
      console.log(action.payload)
      return Object.assign({}, state, {token: action.payload.token, user: action.payload.user})
    case LOGOUT:
      console.log("LOGOUT");
      localStorage.removeItem('mernToken');
      return Object.assign({}, state, {token: '', user: null, googleUser: null})
    case REMOVE_TOKEN:
      console.log('REMOVE_TOKEN');
      return Object.assign({}, state, {token: '', user: null})
    case SET_GOOGLE_USER:
      console.log('SET_GOOGLE_USER');
      return Object.assign({}, state, {googleUser: action.payload})
    case REMOVE_GOOGLE_USER:
      console.log('REMOVE_GOOGLE_USER');
      return Object.assign({}, state, {googleUser: null})

    default:
      return state;
  }
}


export default rootReducer













