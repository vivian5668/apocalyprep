import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';

import { IconButton } from 'material-ui';


const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Navbar (props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static">

          <IconButton color="inherit" aria-label="Menu">
            Test Text
          </IconButton>



      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Navbar;
