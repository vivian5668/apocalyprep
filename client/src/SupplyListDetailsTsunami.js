import React, { Component } from 'react';
import SupplyList from './SupplyList';
import {Row, Col, Button, Icon} from 'react-materialize';
import EventTsunami from './eventtsunami';

class SupplyListDetailsTsunami extends Component {
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
                      <h2 className="location-title">Tsunami</h2>
                      <div className="location-image-overlay"></div>
                      <img className="location-image" src="./image/tsunami.gif" alt="Tsunami" />
                    </Row>
                  </Col>
              </Row>
              <Row>
                  <Col s={12}>
                    <Row className="event-text">
                      <EventTsunami />
                    </Row>
                  </Col>
              </Row>
          </Col>
      </Row>
    )
  }
}

export default SupplyListDetailsTsunami;
