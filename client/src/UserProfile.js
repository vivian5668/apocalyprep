import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';


export const UserProfile = props => {
  return (
    <div>
      <div>
        <Grid fluid>
          <Row>
            <Col className="grey" sm={4}>
                  <Col sm={12}> <h2>Detroit, MI</h2> </Col>
                  <Col sm={12}> <h2>FIRE</h2> </Col>
                  <Col sm={12}> <h2>YOUTHS</h2> </Col>
                  <Col sm={12}> <h2>BUNNIES</h2> </Col>
                  <Col sm={12}> <h2>DINOSAURS</h2> </Col>
            </Col>
            <Col sm={4}>
                  Hello, world!
            </Col>
            <Col sm={4}>
                  Hello, world!
            </Col>
          </Row>
        </Grid>
      </div>
    </div>
  )
}
