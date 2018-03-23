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
                    <img src="./image/tsunami.gif" alt="tsunami" />
                  </Col>
              </Row>
              <Row>
                  <Col s={12}>
                      <EventTsunami />
                  </Col>
              </Row>
          </Col>
      </Row>
    )
  }
}

export default SupplyListDetailsTsunami;
