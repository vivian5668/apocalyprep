import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {Row, Col, Button} from 'react-materialize';

class Signup extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      redirect: false
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value})
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value})
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value})
  }

  handleSubmit(e) {
    console.log("We are in handleSubmit...")
    e.preventDefault()
    axios.post('/auth/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }).then( result => {
      console.log("THIS IS THE USER AND TOKEN")
      console.log(result.data)
      localStorage.setItem('mernToken', result.data.token)
      this.props.liftToken(result.data)
    })
    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }

    return (
      <Row>
        <Col s={2}></Col>
        <Col className='center' s={8}>
          <form id='signupform' onSubmit={this.handleSubmit}>
            <input placeholder='Name:' type='text' value={this.state.name} onChange={this.handleNameChange} /><br />
            <input placeholder='Email:' type='text' value={this.state.email} onChange={this.handleEmailChange} /><br />
            <input placeholder='Password:' type='password' value={this.state.password} onChange={this.handlePasswordChange} /><br />
            <Button className='loginbutton white black-text' waves='light'>Sign Up</Button>
          </form>
        </Col>
        <Col s={2}></Col>
      </Row>
    )
  }
}
export default Signup;
