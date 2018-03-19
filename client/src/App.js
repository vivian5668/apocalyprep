import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Home from './Home';
import Location from './Location';
import Login from './Login';
import { UserProfile } from './UserProfile';
import axios from 'axios';
import { 
           BrowserRouter as Router,
           Route,
           Link 
        } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      token: '',
      user: null,
      googleUser: null
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
    this.checkForLocalToken = this.checkForLocalToken.bind(this)
    this.checkForGoogleUser = this.checkForGoogleUser.bind(this)
  }

  liftTokenToState(data) {
    console.log("THIS LIFTS TOKEN TO STATE")
    this.setState({
      token: data.token,
      user: data.user
    })
  }

  logout() {
    console.log("Logging out")
    localStorage.removeItem('mernToken')
    this.setState({token: '', user: null, googleUser: null})
    axios.get('/auth/logout', result => console.log(result))
  }

  checkForLocalToken() {
    var token = localStorage.getItem('mernToken')
    if (token === 'undefined' || token === null || token === '' || token === undefined) {
      localStorage.removeItem('mernToken')
      this.setState({
        token: '',
        user: {}
      })
    } else {
      axios.post('/auth/me/from/token', {
        token: token
      }).then( result => {
        localStorage.setItem('mernToken', result.data.token)
        this.setState({
          token: result.data.token,
          user: result.data.user
        })
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
        this.setState({
          googleUser
        })
      } else {
        // we did not find a google user!
        this.setState({
          googleUser: null
        })
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
    let theUser = this.state.user || this.state.googleUser
    if (theUser) {
      return (
        <Router>
            <div>
              <nav>
                  <Link to='/'>Home Page</Link> {' '}
                  <Link to='/location'>location</Link>{' '}
              </nav>
              <Route exact path = '/' component={Home} />
              <Route path = '/location' component={Location} />
              <UserProfile user={theUser} logout={this.logout} />
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
              </nav>
              <Route exact path = '/' component={Home} />
              <Route path = '/location' component={Location} />
              <Signup liftToken={this.liftTokenToState} />
              <Login liftToken={this.liftTokenToState} />
            </div>
        </Router>
      )
    }
  }
}

export default App;
