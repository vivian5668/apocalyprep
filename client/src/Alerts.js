import React, { Component } from 'react';
import { connect } from 'react-redux';
import Geocode from "react-geocode";
import { setPoint } from './actions/index';
import { setAlerts } from './actions/index';
import  { Redirect } from 'react-router-dom';
import LocationEnter from './LocationEnter';
import {Row, Col, Button, Icon, Label, Input, Form, Collapsible, CollapsibleItem} from 'react-materialize';
import axios from 'axios';


function mapStateToProps(state) {
  console.log('in alerts map', state)
  return {alerts: state.alerts}
}


// {this.props.alerts.data.data.features[0].properties.headline}
const Alerts = (props) => {
    console.log("in alerts:", props.alerts)
    if (props.alerts === null) {
      return(
        <Row id="videoRow">
          <Col s={8}>
        		<LocationEnter />
            <h6>Error, please re-enter city and state </h6>
          </Col>
      	</Row>

      )
    } else {
      return(

          <div>
            <h3>alerts</h3>
            {
              props.alerts.map( (data, index) => {
                if (data.properties.severity === 'Severe') {
                  return (
                    <div key={index}>
                      {
                        // <button
                        //   data-alert={data.properties.headline}
                        //   data-area={data.properties.areaDesc}
                        //   data-instruct={data.properties.instruction}
                        //   data-response={data.properties.response}
                        // >
                        //   {data.properties.headline}
                        // </button>
                      // <p>Alert: {data.properties.headline}</p>
                      // <p>Area: {data.properties.areaDesc}</p>
                      // <p>Description: {data.properties.description}</p>
                      // <p>Instruction: {data.properties.instruction}</p>
                      // <p>Response: {data.properties.response}</p>
                      }
                      <Collapsible className='black-text'>
                        <CollapsibleItem header={data.properties.headline} icon='warning'>
                          <p className='white-text'>Area:<br />{data.properties.areaDesc}</p>
                          <p className='white-text'>Description:<br />{data.properties.description}</p>
                          <p className='white-text'>Instruction:<br />{data.properties.instruction}</p>
                          <p className='white-text'>Response:<br />{data.properties.response}</p>
                        </CollapsibleItem>
                      </Collapsible>
                    </div>
                  )
                }
              })
            }
          </div>
          // console.log({this.props.alerts})
        )
    }
}

export default connect(mapStateToProps)(Alerts);
