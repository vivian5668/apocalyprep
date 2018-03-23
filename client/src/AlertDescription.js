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

// Object.keys(obj).map(e => console.log(`key=${e}  value=${obj[e]}`));
//
// Object.keys(obj).forEach(function(key,index) {
  // key: the name of the object key
  // index: the ordinal position of the key within the object
// });

// {this.props.alerts.data.data.features[0].properties.headline}
const AlertDescription = (props) => {
      return(

          <div>
            <h3>alerts</h3>
            {
            }
          </div>
          // console.log({this.props.alerts})
        )
    }
}

export default connect(mapStateToProps)(AlertDescription);
