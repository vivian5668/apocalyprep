import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);

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
