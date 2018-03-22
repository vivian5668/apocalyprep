import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Home from './Home';
import ImageAccordion from './ImageAccordion';
import Location from './Location';
import Login from './Login';
import { UserProfile } from './UserProfile';
import axios from 'axios';
import Nav from './Nav';
import SupplyList from './SupplyList';

import { removeToken } from './actions/index';
import { liftTokenToState } from './actions/index';
import { setGoogleUser } from './actions/index';
import { removeGoogleUser } from './actions/index';
import { logout } from './actions/index';


import {
           BrowserRouter as Router,
           Route,
           Link
        } from 'react-router-dom';

import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => {
  return {
    removeToken: () => dispatch(removeToken()),
    liftTokenToState: (data) => dispatch(liftTokenToState(data)),
    setGoogleUser: (googleUser) => dispatch(setGoogleUser(googleUser)),
    removeGoogleUser: () => dispatch(removeGoogleUser()),
    logout: () => dispatch(logout())
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

class ConnectedApp extends Component {
  constructor(props) {
    super()
  //   this.state = {
  //     token: '',
  //     user: null,
  //     googleUser: null
  //   }
    // this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.checkForGoogleUser = this.checkForGoogleUser.bind(this)
  }


  // liftTokenToState(data) {
  //   console.log("THIS LIFTS TOKEN TO STATE")
  //   this.setState({
  //     token: data.token,
  //     user: data.user
  //   })
  // }

  logout() {
    console.log("Logging out")
    localStorage.removeItem('mernToken')

    this.props.logoutRedux();
    axios.get('/auth/logout', result => console.log(result))
  }

  checkForLocalToken() {
    var token = localStorage.getItem('mernToken')
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken')
      this.props.removeToken();
    } else {
      axios.post('/auth/me/from/token', {
        token: token
      }).then( result => {
        localStorage.setItem('mernToken', result.data.token);
        console.log("this is the token and user:")
        console.log(result.data)
        this.props.liftTokenToState(result.data);
      }).catch( err => console.log(err) )
    }
  }

  checkForGoogleUser() {
    axios.get('/auth/user').then(response => {
      if (response.data.user) {
        //we found a google user in the session
        let googleUser = {
          googleId: response.data.user.googleId,
          displayName: response.data.user.displayName
        }

        this.props.setGoogleUser(googleUser);

      } else {
        // we did not find a google user!
       this.props.removeGoogleUser();
      }
    })
  }

  componentDidMount() {
    this.checkForGoogleUser()
    this.checkForLocalToken()
  }

  // if a user exists as a token or as a googler user, do this 'if'
  // or, if no logged in user exists send them to the signup/Login
  // can only accept user token OR user google NOT both
  render() {
    console.log(this.props)
    let theUser = this.props.user || this.props.googleUser
    if (theUser) {
      return (
        <Router>
            <div>
              <nav>
                  <Link to='/'>Home Page</Link> {' '}
                  <Link to='/location'>location</Link>{' '}
                  <Link to='/ImageAccordion'>ImageAccordion</Link>{' '}
                  <Link to='/user'>User</Link>{' '}
                  <Link to='/supplylist'>Supply List</Link>{' '}
              </nav>
              <Route exact path = '/' component={Home} />
              <Route path = '/location' component={Location} />
              <Route path = '/supplylist' component={SupplyList} />
              <UserProfile user={theUser} logout={this.logout} />
              <Route path = '/ImageAccordion' component={ImageAccordion} />

            </div>

        </Router>
      )
    } else {
      return (
        <Router>
            <div className="App">
              <nav>

                  <Link to='/'>Home Page</Link> {' '}
                  <Link to='/location'>location</Link>{' '}
                  <Link to='/user'>User</Link>{' '}
                  <Link to='/login'>Login</Link>{' '}
                  <Link to='/signup'>Signup</Link>{' '}
                  <Link to='/supplylist'>Supply List</Link>{' '}
                  <Link to='/ImageAccordion'>ImageAccordion</Link>{' '}
              </nav>
              <Route exact path = '/' component={Home} />
              <Route path = '/supplylist' component={SupplyList} />
              <Route path = '/location' component={Location} />
              <Route path = '/user' component={UserProfile} />
              <Route path = '/login' component={() => <Login liftToken={this.props.liftTokenToState} />} />
              <Route path = '/signup' component={() => <Signup liftToken={this.props.liftTokenToState} />} />
              <Route path = '/ImageAccordion' component={ImageAccordion} />

            </div>

        </Router>
      )
    }
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp)

export default App;
