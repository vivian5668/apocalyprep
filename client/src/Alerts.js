import React, { Component } from 'react';
import { connect } from 'react-redux';
import Geocode from "react-geocode";
import { setPoint } from './actions/index';
import { setAlerts } from './actions/index';
import  { Redirect } from 'react-router-dom';
import axios from 'axios';


// const mapDispatchToProps = dispatch => { //dispatch here is a function
//   //this is a closure, it returns on object, it has a property addArticle
//   //this property is a function that turns article to a function
//   //this is a programming techinique, a func takes multiple parameters
//   //now it is reduced to one
//   return {
//     setPoint: (point) => dispatch(setPoint(point)),
//     setAlerts: (alerts) => dispatch(setAlerts(alerts))
//   }
// }
//
//
// const mapStateToProps = state => {
//   console.log('map state 2 prop', state.point)
//   return {
//     point: state.point,
//     alerts: state.alerts
//   }
// }
//
class Alerts extends Component {


  render() {

    return (
      <div>
        <h1>Alerts</h1>
        <p></p>
      </div>
    );
  }
}

// const Alerts = connect(mapStateToProps, mapDispatchToProps)(ConnectedLocationEnter)

export default Alerts;
