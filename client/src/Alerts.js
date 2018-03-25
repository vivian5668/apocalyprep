import React, { Component } from 'react';
import { connect } from 'react-redux';
import Geocode from "react-geocode";
import { setPoint } from './actions/index';
import { setAlerts } from './actions/index';
import  { Redirect } from 'react-router-dom';
import LocationEnter from './LocationEnter';
import {Row, Col, Button, Icon, Label, Input, Form, Collapsible, CollapsibleItem} from 'react-materialize';
import axios from 'axios';

// Geocode.setApiKey("GOOGLE_CLIENT_SECRET");

function mapStateToProps(state) {
  console.log('in alerts map', state)
  return {alerts: state.alerts}
}


// {this.props.alerts.data.data.features[0].properties.headline}
const Alerts = (props) => {
    console.log("in alerts:", props.alerts)

    if (props.alerts === "undefined") {
      return (
        <div className="yourBrotherFromAnotherMother">
          <h3>Nothing Entered, re-enter</h3>
      		<LocationEnter />
        </div>
      )
    }


    if (props.alerts === null || props.alerts === undefined) {
      return(
        <div className="returnNullForm">
      		<LocationEnter />
        </div>

      )
    } else {
      return(

          <div className="collapsBox">
            <h3>alerts</h3>
            {
              props.alerts.map( (data, index) => {
                {/*if (data.properties.severity === 'Severe') {*/}
                  return (
                    <div key={index}>
                      <Collapsible className='collapsDivs black-text'>
                        <CollapsibleItem header={data.properties.headline} icon='warning'>
                          <p className='white-text'>Severity:<br />{data.properties.severtity}</p>
                          <p className='white-text'>Description:<br />{data.properties.description}</p>
                          <p className='white-text'>Instruction:<br />{data.properties.instruction}</p>
                          <p className='white-text'>Response:<br />{data.properties.response}</p>
                        </CollapsibleItem>
                      </Collapsible>
                    </div>
                  )
                {/*}*/}
              })
            }
          </div>
          // console.log({this.props.alerts})
        )
    }
}

export default connect(mapStateToProps)(Alerts);
