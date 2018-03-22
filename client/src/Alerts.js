import React, { Component } from 'react';
import { connect } from 'react-redux';
import Geocode from "react-geocode";
import { setPoint } from './actions/index';
import { setAlerts } from './actions/index';
import  { Redirect } from 'react-router-dom';
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
  console.log(state.alerts)
  return {
    alerts: state.alerts
  }
}

const ConnectedAlerts = ({alerts}) => (
  <div>
    <h3>alerts:</h3>
    <ul>
      {alerts.map((alerts) => (
        <li >{alerts.data.feeatures.properties.headlines}</li>
        ))}
      </ul>
      )
  </div>
)
// {
//
//
//   render() {
//
//     return (
//       <div>
//         <h3>alerts:</h3>
//         <ul>
//           {alerts.map((data) => (
//             <li >{data.feeatures.properties.headlines}</li>
//             ))}
//           </ul>
//           )
//       </div>
//     );
//   }
// }

const Alerts = connect(mapStateToProps, mapDispatchToProps)(ConnectedAlerts)

export default Alerts;
