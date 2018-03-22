import React, { Component } from 'react';
import { connect } from 'react-redux';
import Geocode from "react-geocode";
import { setPoint } from './actions/index';
import { setAlerts } from './actions/index';
import  { Redirect } from 'react-router-dom';
import axios from 'axios';

// componentDidUpdate() {
//   const mapStateToProps = state => {
//     console.log('alerts in alerts:', state.alerts)
//     return {
//       alerts: state.alerts
//     }
//   }
// }
// const mapStateToProps = state => {
//   console.log('alerts in alerts:', state.alerts)
//   return {
//     alerts: state.alerts
//   }
// }
function mapStateToProps(state) {
  return {alerts: state.alerts}
}


// {this.props.alerts.data.data.features[0].properties.headline}
const Alerts = (props) => {
    console.log("in alerts:", props.alerts)
    if (props.alerts === null) {
      return(
        <p>Alerts is equal </p>
      )
    } else {
      return(
          <div>
            <h3>alerts</h3>
            <p>Alert: {props.alerts.data.features[0].properties.headline}</p>
          </div>
          // console.log({this.props.alerts})
        )
    }
}

export default connect(mapStateToProps)(Alerts);
