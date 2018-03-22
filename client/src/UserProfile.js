import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const UserProfile = props => {
  if (props.user) {
    return (
        <div>
          <div>
            <h2>Login and Logout!</h2>
            <p>Hello, {props.user.name}!</p>
            <button onClick={props.logout}>Log Out!</button>
          </div>
            <Row>
              <Col className="grey" sm={4}>
              </Col>
              <Col className="grey" sm={4}>
                <Col sm={12}> <h2>emergency prep: to do</h2> </Col>
              </Col>
              <Col className="grey" sm={4}>
                <Col sm={12}> <h2>emergency prep: done</h2> </Col>
              </Col>
            </Row>
        </div>
    )
  }
  return <div />
}

export default UserProfile;
