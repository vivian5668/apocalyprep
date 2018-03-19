import { ADD_ITEM } from "../constants/action-types";

const initialState = {
  items: []
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return state;
    default:
      return state;
  }
}


export default rootReducer
