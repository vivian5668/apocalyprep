import { ADD_ITEM } from "../constants/action-types";


// actions are objs, build an action with a simple function that takes 1 parameter
//it returns a new ready to dispatch action obj with a "type" and "payload"
 export const addItem = item => (
  { type: ADD_ITEM, payload: item }
)


// Notes on actions
 
// The only way to change state is to send a signal to the Store
// dispatching that action is the process of sending that signal

// Actions are objects

// ex: 

// {
//  type: 'ACTION_HERE',
//  payload: thingthatYouSendToStore
// }