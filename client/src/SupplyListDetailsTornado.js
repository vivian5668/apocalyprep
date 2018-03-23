import React, { Component } from 'react';
import SupplyList from './SupplyList';
import {Row, Col, Button, Icon} from 'react-materialize';
import EventTornado from './eventtornado';

class SupplyListDetailsTornado extends Component {
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
                      <h2 className="location-title">Tornado</h2>
                      <div className="location-image-overlay"></div>
                      <img className="location-image" src="./image/tornado.gif" alt="Tornado" />
                    </Row>
                  </Col>
              </Row>
              <Row>
                  <Col s={12}>
                    <Row className="event-text">
                      <EventTornado />
                    </Row>
                  </Col>
              </Row>
          </Col>
      </Row>
    )
  }
}

export default SupplyListDetailsTornado;
