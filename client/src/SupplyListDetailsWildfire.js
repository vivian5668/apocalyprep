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
                    <img src="./image/wildfire.gif" alt="wildfire" />
                  </Col>
              </Row>
              <Row>
                  <Col s={12}>
                      <EventWildfire />
                  </Col>
              </Row>
          </Col>
      </Row>
    )
  }
}

export default SupplyListDetailsWildfire;
