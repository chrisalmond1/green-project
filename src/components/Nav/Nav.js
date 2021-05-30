import React, { Component } from "react";
import { Page, Button } from "react-onsenui";
import { Link, withRouter } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <Page>
        <h2>Logo Here</h2>
        <ul className="list">
          <li className="list-item">
            <div className="list-item__center">
              <Link
                onClick={this.props.hideClick}
                to={`${process.env.PUBLIC_URL}/home`}
              >
                Home
              </Link>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item__center">
              <Link
                onClick={this.props.hideClick}
                to={`${process.env.PUBLIC_URL}/strains`}
              >
                Stains
              </Link>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item__center">
              <Link
                onClick={this.props.hideClick}
                to={`${process.env.PUBLIC_URL}/login`}
              >
                Login
              </Link>
            </div>
          </li>
          <li className="list-item">
            <div className="list-item__center">
              <Button onClick={this.props.onLogout}>Logout</Button>
            </div>
          </li>
        </ul>
      </Page>
    );
  }
}

export default withRouter(Nav);
