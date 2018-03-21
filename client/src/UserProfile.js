import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


export const UserProfile = props => {
  return (
      <div>
         <div>
              <h2>Login and Logout!</h2>
              <p>Hello, {props.user}!</p>
              <button onClick={props.logout}>Log Out!</button>
            </div>
        <Grid fluid>
          <Row>


           


            <Col className="grey" sm={4}>
                  <Col sm={12}> <h2>Detroit, MI</h2> </Col>
                  <Col sm={12}> <h2>alert</h2> </Col>
                  <Col sm={12}> <h2>alert</h2> </Col>
                  <Col sm={12}> <h2>alert</h2> </Col>
                  <Col sm={12}> <h2>alert</h2> </Col>
            </Col>
            <Col className="grey" sm={4}>
                  <Col sm={12}> <h2>emergency prep: to do</h2> </Col>
            </Col>
            <Col className="grey" sm={4}>
                  <Col sm={12}> <h2>emergency prep: done</h2> </Col>
            </Col>
          </Row>
        </Grid>
      </div>
  )
}
