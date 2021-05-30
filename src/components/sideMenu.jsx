import React, { Component } from "react";

class SideMenu extends Component {
  state = {};
  render() {
    return (
      <div>
        <ons-splitter>
          <ons-splitter-side
            id="menu"
            side="left"
            width="220px"
            collapse
            swipeable
          >
            <ons-page>
              <ons-list>
                <ons-list-item onClick="fn.load('home.html')" tappable>
                  Home
                </ons-list-item>
                <ons-list-item onClick="fn.load('settings.html')" tappable>
                  Settings
                </ons-list-item>
                <ons-list-item onClick="fn.load('about.html')" tappable>
                  About
                </ons-list-item>
              </ons-list>
            </ons-page>
          </ons-splitter-side>
          <ons-splitter-content
            id="content"
            page="home.html"
          ></ons-splitter-content>
        </ons-splitter>
      </div>
    );
  }
}

export default SideMenu;
