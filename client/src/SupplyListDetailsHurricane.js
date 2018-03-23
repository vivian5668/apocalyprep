import React, { Component } from 'react';
import SupplyList from './SupplyList';
import {Row, Col, Button, Icon} from 'react-materialize';
import EventHurricane from './eventhurricane';

class SupplyListDetailsHurricane extends Component {
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
                    <img src="./image/hurricane.gif" alt="hurricane" />
                  </Col>
              </Row>
              <Row>
                  <Col s={12}>
                      <EventHurricane />
                  </Col>
              </Row>
          </Col>
      </Row>
    )
  }
}

export default SupplyListDetailsHurricane;
