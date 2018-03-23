import React, { Component } from 'react';
import SupplyList from './SupplyList';
import {Row, Col, Button, Icon} from 'react-materialize';
import Eventearthquake from './eventearthquake';

class SupplyListDetailsEarthquake extends Component {
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
                    <img src="./image/tsunami.gif" alt="Tornado" />
                  </Col>
              </Row>
              <Row>
                  <Col s={12}>
                      <Eventearthquake />
                  </Col>
              </Row>
          </Col>
      </Row>
    )
  }
}

export default SupplyListDetailsEarthquake;
