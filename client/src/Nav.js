import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavItem, Icon, Dropdown, Button } from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = props => {
  //console.log(props)

  if (props.user !== null) {
    return (
      <Navbar brand='apocalyprep' right id='navbar'>
        <NavItem><Link to="/">Home</Link></NavItem>

        <NavItem><Link to="/ImageAccordion">Disasters</Link></NavItem>

        <NavItem><Dropdown className="dropdown-button" trigger={
          <li>Disaster Details</li>
          }>
          <NavItem><Link to="/tsunami">Tsunami</Link></NavItem>
          <NavItem><Link to="/hurricane">Hurricane</Link></NavItem>
          <NavItem><Link to="/tornado">Tornado</Link></NavItem>
          <NavItem><Link to="/earthquake">Earthquake</Link></NavItem>
          <NavItem><Link to="/wildfire">Wildfire</Link></NavItem>

        </Dropdown></NavItem>

        <NavItem><Link to="/userlist">My Supplies</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>

        <NavItem>
          <Dropdown className='dropdown-button' trigger={<li><Icon>person</Icon></li>}>
            <NavItem>Hello, {props.user.name}!</NavItem>
            <NavItem divider />
            <li>
              <a href='/' onClick={props.logout}>Log Out</a>
            </li>
          </Dropdown>
        </NavItem>
      </Navbar>
    )
  } else if (props.user === null){
    return (
        <Navbar brand='apocalyprep' right id='navbar'>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/ImageAccordion">Disasters</Link></NavItem>

        <NavItem><Dropdown className="dropdown-button" trigger={
          <li>Disaster Details</li>
          }>
          <NavItem><Link to="/tsunami">Tsunami</Link></NavItem>
          <NavItem><Link to="/hurricane">Hurricane</Link></NavItem>
          <NavItem><Link to="/tornado">Tornado</Link></NavItem>
          <NavItem><Link to="/earthquake">Earthquake</Link></NavItem>
          <NavItem><Link to="/wildfire">Wildfire</Link></NavItem>

        </Dropdown></NavItem>


        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/login">Login</Link></NavItem>
        <NavItem><Link to="/signup">Signup</Link></NavItem>
      </Navbar>
      )
  }
}

export default Nav;
