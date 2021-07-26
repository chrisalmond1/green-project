import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={this.props.menuClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Green Project</Typography>
          <button onClick={this.props.history.goBack}>Back</button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);
