import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavItem, Icon, Dropdown } from 'react-materialize';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Nav = props => {
  //console.log(props)

  if (props.user !== null) {
    return (
      <Navbar brand='apocalyprep' right id='navbar'>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/location">Disasters</Link></NavItem>
        <NavItem><Link to="/ImageAccordion">Alerts</Link></NavItem>
        <NavItem><Link to="/supplylist">Supplies</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
        <li>
          <Dropdown trigger={<a><Icon>person</Icon></a>}>
            <NavItem>Hello, {props.user.name}!</NavItem>
            <NavItem><Link to="/">User</Link></NavItem>
            <NavItem divider />
            <li>
              <a href='/' onClick={props.logout}>Log Out</a>
            </li>
          </Dropdown>
        </li>
      </Navbar>
    )
  } else if (props.user === null){
    return (
      <Navbar brand='apocalyprep' right id='navbar'>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/location">Disasters</Link></NavItem>
        <NavItem><Link to="/ImageAccordion">Alerts</Link></NavItem>
        <NavItem><Link to="/supplylist">Supplies</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/login">Login</Link></NavItem>
        <NavItem><Link to="/signup">Signup</Link></NavItem>
      </Navbar>
      )
  }
}

export default Nav;
