import { ADD_ITEM } from "../constants/action-types";
import { LIFT_TOKEN_TO_STATE } from "../constants/action-types";
import { LOGOUT } from "../constants/action-types";
import { REMOVE_TOKEN} from "../constants/action-types";
import { SET_GOOGLE_USER} from "../constants/action-types";
import { REMOVE_GOOGLE_USER} from "../constants/action-types";
import { SET_POINT } from "../constants/action-types";
import { SET_ALERTS } from "../constants/action-types";


// actions are objs, build an action with a simple function that takes 1 parameter
//it returns a new ready to dispatch action obj with a "type" and "payload"
export const addItem = item => (
  { type: ADD_ITEM, payload: item }
)

export const liftTokenToState = (data) => (
  { type: LIFT_TOKEN_TO_STATE, payload: {token: data.token, user: data.user} }
)

export const logout = () => (
  { type: LOGOUT, payload: null }
)

export const removeToken = () => (
  { type: REMOVE_TOKEN, payload: null }
)

export const setGoogleUser = (googleUser) => (
  { type: SET_GOOGLE_USER, payload: googleUser }
)

export const removeGoogleUser = () => (
  { type: REMOVE_GOOGLE_USER, payload: null }
)

export const setPoint = (point) => (
  { type: SET_POINT, payload: point }
)

export const setAlerts = (alerts) => (
  { type: SET_ALERTS, payload: alerts }
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
