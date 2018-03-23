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
            // Object.keys(obj).map(e => console.log(`key=${e}  value=${obj[e]}`));
            //
            // Object.keys(obj).forEach(function(key,index) {
              // key: the name of the object key
              // index: the ordinal position of the key within the object
            });
            <p>Alert: {props.alerts.features[0].properties.headline}</p>
            <p>Alert: {props.alerts.features[1].properties.headline}</p>
            <p>Alert: {props.alerts.features[2].properties.headline}</p>
            <p>Alert: {props.alerts.features[3].properties.headline}</p>
            <p>Alert: {props.alerts.features[4].properties.headline}</p>
          </div>
          // console.log({this.props.alerts})
        )
    }
}

export default connect(mapStateToProps)(Alerts);
