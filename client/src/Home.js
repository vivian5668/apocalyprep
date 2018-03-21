import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from "./actions/index";
import { liftTokenToState } from './actions/index';
import { logout } from './actions/index';
import {Row, Col, Button, Icon} from 'react-materialize';
import LocationEnter from './LocationEnter';

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
      <Row>
        <Row>
          <Col s={12}>
            <div className='container'>
              <LocationEnter />
              <div className='videowrapper'>
                <video id='background-video' loop autoPlay>
                  <source src='img/starrySky.mp4' type='video/mp4' />
                </video>
              </div>
            </div>
          </Col>
        </Row>
      </Row>
    )
  }
}

const Home = connect(null, mapDispatchToProps)(ConnectedHome)

export default Home
