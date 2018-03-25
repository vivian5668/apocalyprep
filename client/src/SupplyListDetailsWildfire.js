import React, { Component } from 'react';
import SupplyList from './SupplyList';
import {Row, Col, Button, Icon} from 'react-materialize';
import EventWildfire from './eventwildfire';

class SupplyListDetailsWildfire extends Component {
  constructor(props) {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <Row>
          <Col s={3}>
              <SupplyList />
          </Col>
          <Col s={9}>
              <Row>
                  <Col s={12}>
                    <Row className="location-image-div">
                      <h2 className="location-title">Wildfire</h2>
                      <div className="location-image-overlay"></div>
                      <img className="location-image" src="./image/wildfire.gif" alt="Wildfire" />
                    </Row>
                  </Col>
              </Row>
              <Row>
                  <Col s={12}>
                    <Row className="event-text">
                      <EventWildfire />
                    </Row>
                  </Col>
              </Row>
          </Col>
      </Row>
    )
  }
}

export default SupplyListDetailsWildfire;
