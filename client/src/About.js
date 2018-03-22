import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, CardTitle } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const About = props => {
  return (
    <div>
      <Row>
        <Col s={3}>
          <Card horizontal header={<CardTitle image="./img/Emily.jpeg"></CardTitle>}>
            <p className='abouttext'>Emily Hannan</p>
            <div className='iconlist'>
              <a href="https://github.com/hannan-emily">
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a href="https://www.linkedin.com/in/emilyhannan">
                <i className="fab fa-linkedin-in fa-3x"></i>
              </a>
            </div>
          </Card>
        </Col>
        <Col s={3}>
          <Card horizontal header={<CardTitle image="./img/Chelsea.jpeg"></CardTitle>}>
            <p className='abouttext'>Chelsea Zhu</p>
            <div className='iconlist'>
              <a href="https://github.com/vivian5668">
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a href="https://www.linkedin.com/in/chelsea-qianwei-zhu">
                <i className="fab fa-linkedin-in fa-3x"></i>
              </a>
            </div>
          </Card>
        </Col>
        <Col s={3}>
          <Card horizontal header={<CardTitle image="./img/Mike.jpeg"></CardTitle>}>
            <p className='abouttext'>Michael Hammer</p>
            <div className='iconlist'>
              <a href="https://github.com/HamMike">
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a href="https://www.linkedin.com/in/michael-a-hammer">
                <i className="fab fa-linkedin-in fa-3x"></i>
              </a>
            </div>
          </Card>
        </Col>
        <Col s={3}>
          <Card horizontal header={<CardTitle image="./img/Scott.png"></CardTitle>}>
            <p className='abouttext'>Scott Molsness</p>
            <div className='iconlist'>
              <a href="https://github.com/smolsn13">
                <i className="fab fa-github fa-3x"></i>
              </a>
              <a href="https://www.linkedin.com/in/scottmolsness">
                <i className="fab fa-linkedin-in fa-3x"></i>
              </a>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default About;
