import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Card, CardTitle } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const About = props => {
  return (
    <Row>
      <Col s={12}>
        <Row>
          <Col s={1}></Col>
          <Col s={10}>
            <h1 className='aboutheader'>About Apocalyprep</h1>
            <h3 className='aboutsubheader'>Things happen. Be prepared.</h3>
            <p>Disasters sound scary. Preparing for one doesn’t have to be! View comprehensive, real time severe weather alerts for your city. Current data from the National Weather Service includes warnings, advisements and possible evacuation info if necessary.</p>
            <p>View common natural disasters in the United States and expert tips on how to prepare your home and your family for each event.</p>
            <p>Next, get emergency-ready for any possible disaster using our interactive to-do lists. Emergency kits can be compiled easily for yourself, your family, and pets. It’s as easy as checking a box for each supply item you need. </p>
            <p>Please sign up for a free account to access all our features and find resources for creating your own supply kits. Your supply checklist will be conveniently saved so you can access your list on any device.</p>
          </Col>
          <Col s={1}></Col>
        </Row>
        <Row>
          <Col s={3} className='center aboutcol'>
              <img src='./img/emily.png' />
              <p className='abouttext'>Emily Hannan</p>
              <div className='iconlist'>
                <a href='https://github.com/hannan-emily'>
                  <i className='fab fa-github fa-lg'></i>
                </a>
                <a href='https://www.linkedin.com/in/emilyhannan'>
                  <i className='fab fa-linkedin-in fa-lg'></i>
                </a>
              </div>
            </Col>
            <Col s={3} className='center aboutcol'>
              <img src='./img/chelsea.png' />
              <p className='abouttext'>Chelsea Zhu</p>
              <div className='iconlist'>
                <a href='https://github.com/vivian5668'>
                  <i className='fab fa-github fa-lg'></i>
                </a>
                <a href='https://www.linkedin.com/in/chelsea-qianwei-zhu'>
                  <i className='fab fa-linkedin-in fa-lg'></i>
                </a>
              </div>
            </Col>
            <Col s={3} className='center aboutcol'>
              <img src='./img/mike.png' />
              <p className='abouttext'>Michael Hammer</p>
              <div className='iconlist'>
                <a href="https://github.com/HamMike">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/michael-a-hammer">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </div>
            </Col>
            <Col s={3} className='center aboutcol'>
              <img src='./img/scott.png' />
              <p className='abouttext'>Scott Molsness</p>
              <div className='iconlist'>
                <a href="https://github.com/smolsn13">
                  <i className="fab fa-github fa-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/scottmolsness">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </a>
              </div>
            </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default About;
