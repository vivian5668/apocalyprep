import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Location extends Component  {

  render() {

      return (
        <div>
          <Grid fluid>
            <Row>
              <Col className="grey" sm={4}>
                    <Col sm={12}> <h2>emergency prep list</h2> </Col>

              </Col>
              <Col className="grey" sm={8}>
                  <Row>
                    <Col className="location-image" sm={12}>
                        <Col sm={12}> <h2 className="location-title">Wildfire</h2></Col>
                        <Col sm={12}> <img className="image" src ="https://images.pexels.com/photos/633198/pexels-photo-633198.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" /></Col>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={6}>
                      <h2>first list of event content</h2>
                    </Col>
                    <Col sm={6}>
                      <h2>second list of event content</h2>
                    </Col>
                  </Row>
              </Col>
            </Row>
          </Grid>
        </div>
      )
  }
}

export default Location;
