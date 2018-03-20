import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from "./actions/index";
import { liftTokenToState } from './actions/index';
import { logout } from './actions/index';

import axios from 'axios';



const mapDispatchToProps = dispatch => { //dispatch here is a function
  //this is a closure, it returns on object, it has a property addArticle
  //this property is a function that turns article to a function
  //this is a programming techinique, a func takes multiple parameters
  //now it is reduced to one
  return {
    addItem: item => dispatch(addItem(item)),
    liftTokenToState: (token, user) => dispatch(liftTokenToState(token, user)),
    logout: () => dispatch(logout()),

  }
}


const mapStateToProps = state => {
  return {
    items: state.items,
    token: state.token,
    user: state.user,
    googleUser: state.googleUser
  }
}

class ConnectedHome extends Component {
  //this is a local state, we don't have to use it
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return (
    <div className='row'>
      <div className='row'>
        <div className='col s2'></div>
        <div className='col s8'>
          <h1>Apocalyprep Home</h1>
        </div>
        <div className='col s2'></div>
      </div>
      <div className='row'>
        <form className='col s12'>
          <div className='col s3'></div>
          <div className='input-field col s6'>
            <input id="zip" type="text" className="validate" />
            <label htmlFor="zip">Enter your Zip Code</label>
          </div>
          <div className='col s3'></div>
        </form>
      </div>
   </div>
    )
  }
}

const Home = connect(null, mapDispatchToProps)(ConnectedHome)

export default Home