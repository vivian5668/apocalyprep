import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from "./actions/index";
import { liftTokenToState } from './actions/index';
import { logout } from './actions/index';
import { Grid, Row, Col } from 'react-flexbox-grid';

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
      <Grid fluid>
        <Row center='sm'>
          <Col sm={12}>
            <div className='container'>
              <form className='locationform'>
                <input id='location' type='text' />
                <label htmlFor='location'>Enter city & state</label>
              </form>
              <div className='videowrapper'>
                <video id='background-video' loop autoPlay>
                  <source src='img/starrySky.mp4' type='video/mp4' />
                </video>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const Home = connect(null, mapDispatchToProps)(ConnectedHome)

export default Home
