import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavItem, Icon } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Nav = props => {
  console.log(props)

  if (props.user !== null) {
    return (
      <Navbar brand='apocalyprep' right>
        <NavItem href='/'>Home Page</NavItem>
        <NavItem href='/location'>My Location</NavItem>
        <NavItem href='/ImageAccordion'>ImageAccordion</NavItem>
        <NavItem href='/user'>User</NavItem>
        <NavItem onClick={props.logout}>Log Out</NavItem>
        <NavItem><Icon class="material-icons">person_outline</Icon>Hello, {props.user.name}!</NavItem>
      </Navbar>
    )
  } else if (props.user === null){
    return (
      <Navbar brand='logo' right>
        <NavItem href='/'>Home Page</NavItem>
        <NavItem href='/location'>My Location</NavItem>
        <NavItem href='/ImageAccordion'>ImageAccordion</NavItem>
        <NavItem href='/user'>User</NavItem>
        <NavItem href='/login'>Login</NavItem>
        <NavItem href='/signup'>Signup</NavItem>
      </Navbar>
      )
  }
}

export default Nav;
