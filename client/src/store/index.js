import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../reducers/index";


const initialState = {
  items: [],
  token: '',
  user: null,
  googleUser: null,
  // address: '',   // lowercase city and state *mah
  point: '',      // lat and long location *mah
  alert: null    // object containing the alert data
}

const store = createStore(rootReducer, /* Our reducers */
                          initialState, /* Initial State is needed when using the third parameter below */
                          applyMiddleware(thunk), /* Optional parameter for middleware */
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// The last parameter above is for linking up with the Redux DevTools for Chrome



export default store;

//notes on store
//store is the brain of your app
//it has all versions of state, they are kept here like memories

//methods for accessing store:
//store.getState()  --return an object of your current store
//store.getState()  --{ articles: Array(0) }

//store.dispatch()  --pass in a payload to 'create action' function
//  payload is whatever you send to the Store's state, it's data

//store.dispatch( addArticle( {title: 'article', id:1 }))

//store.subscribe() ---listens for store updates, takes a callback
//that does sth when store is updated
//store.subscribe(() => {console.log('redux is happening')})
