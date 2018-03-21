import React from 'react';
import PropTypes from 'prop-types';
import {NavItem} from 'react-materialize';

const Navbar = () => {
  return (
    <Navbar brand='logo' right>
      <NavItem href='get-started.html'>Getting started</NavItem>
      <NavItem href='components.html'>Components</NavItem>
    </Navbar>
  );
}

export default Navbar;
