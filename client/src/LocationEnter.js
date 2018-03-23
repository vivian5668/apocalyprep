import React, { Component } from 'react';
import { connect } from 'react-redux';
import Geocode from "react-geocode";
import { setPoint } from './actions/index';
import { setAlerts } from './actions/index';
import  { Redirect } from 'react-router-dom';
import {Row, Col, Button, Icon, Label, Input, Form} from 'react-materialize';
import axios from 'axios';


const mapDispatchToProps = dispatch => { //dispatch here is a function
  //this is a closure, it returns on object, it has a property addArticle
  //this property is a function that turns article to a function
  //this is a programming techinique, a func takes multiple parameters
  //now it is reduced to one
  return {
    setPoint: (point) => dispatch(setPoint(point)),
    setAlerts: (alerts) => dispatch(setAlerts(alerts))
  }
}


const mapStateToProps = state => {
  console.log('map state 2 prop', state)
  return {
    point: state.point,
    alerts: state.alerts
  }
}

class ConnectedLocationEnter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      // point: ''
      redirect: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({address: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("address: " + this.state.address)
    Geocode.fromAddress(this.state.address).then(
       response => {
         const { lat,lng } = response.results[0].geometry.location;
         var point = lat + ',' + lng
         this.props.setPoint(point)
         // this.setState({
         //   point: point
         // })
         // console.log(response.results[0].geometry.location)
         // console.log(lat,lng);
         console.log('AFTER SET POINT', this.props.point)
       }
     ).then(() => {
       axios.get('https://api.weather.gov/alerts?point=' + this.props.point + '&status=actual').then(result => {
         this.props.setAlerts(result.data.features)
         console.log("AFTER SET RESULT", result)
       })
     })
     .then(() => {
       this.setState({
         redirect: true
       })
     })


  }

  // getstate = () => {
  //   console.log(this.props.point)
  // }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/ImageAccordion'  />
    }
    return (
      <form className='locationform' onSubmit={this.handleSubmit} >
        <label>
          <Input  type="text" label="city, st" value={this.state.address} onChange={this.handleChange} />
          <Input className='btn waves-effect grey darken-4 white-text' type="submit" value="submit" />
        </label>
      </form>
    );
  }
}

const LocationEnter = connect(mapStateToProps, mapDispatchToProps)(ConnectedLocationEnter)

export default LocationEnter;
