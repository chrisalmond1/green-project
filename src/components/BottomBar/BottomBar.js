import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import { useParams } from "react-router-dom";

import { Toolbar, Icon, ToolbarButton, BackButton } from "react-onsenui";

class BottomBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.showMenu = this.props.show.bind(this);
  // }
  showMenu = () => {
    this.props.showMenuClick();
  };

  render() {
    return (
      <Toolbar modifier="material">
        <div className="left">
          <BackButton onClick={() => this.props.history.goBack()} />
        </div>
        <div className="center" style={{ textAlign: "center" }}>
          Green Project
        </div>
        <div className="right">
          <ToolbarButton onClick={this.showMenu}>
            <Icon icon="md-menu" />
          </ToolbarButton>
        </div>
      </Toolbar>
    );
  }
}

export default withRouter(BottomBar);
