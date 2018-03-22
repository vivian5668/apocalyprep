import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, NavItem, Icon, Dropdown } from 'react-materialize';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Nav = props => {
  //console.log(props)

  if (props.user !== null) {
    return (
      <Navbar brand='apocalyprep' right id='navbar'>
        <NavItem href='/'>Home Page</NavItem>
        <NavItem href='/location'>My Location</NavItem>
        <NavItem href='/ImageAccordion'>ImageAccordion</NavItem>
        <NavItem href='/supplylist'>Supply List</NavItem>
        <li>
          <Dropdown trigger={<a><Icon>person</Icon></a>}>
            <NavItem>Hello, {props.user.name}!</NavItem>
            <NavItem href='/user'>User</NavItem>
            <NavItem divider />
            <li class="no-padding">
              <a href='/' onClick={props.logout}>Log Out</a>
            </li>
          </Dropdown>
        </li>
      </Navbar>
    )
  } else if (props.user === null){
    return (
      <Navbar brand='apocalyprep' right id='navbar'>
        <NavItem href='/'>Home Page</NavItem>
        <NavItem href='/location'>My Location</NavItem>
        <NavItem href='/ImageAccordion'>ImageAccordion</NavItem>
        <NavItem href='/login'>Login</NavItem>
        <NavItem href='/signup'>Signup</NavItem>
      </Navbar>
      )
  }
}

export default Nav;
