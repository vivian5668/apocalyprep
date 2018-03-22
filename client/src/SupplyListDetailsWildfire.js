import React, { Component } from 'react';
import SupplyList from './SupplyList';
import {Row, Col, Button, Icon} from 'react-materialize';

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
                    <img src="./image/tornado.gif" alt="Tornado" />
                  </Col>
              </Row>
              <Row>
                  <Col s={12}>
                      <h3> Hello Tornado </h3>
                  </Col>
              </Row>
          </Col>
      </Row>
    )
  }
}

export default SupplyListDetailsTornado;
