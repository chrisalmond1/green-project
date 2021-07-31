import React from "react";
import { Drawer as UIDrawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InfoIcon from "@material-ui/icons/Info";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { withRouter } from "react-router-dom";

// type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Drawer = (props) => {
  const { history } = props;
  console.log(history);
  const handleMenuClick = (url) => {
    props.closeMenu();
    history.push(`${process.env.PUBLIC_URL}` + url);
  };

  var anchorEl = props.anchor;
  console.log("props.isLoggedIn", props.isLoggedIn);
  const menuItems = props.isLoggedIn
    ? [
        {
          text: "About",
          icon: <InfoIcon />,
          url: "/about",
        },
        {
          text: "Strains",
          icon: <FilterVintageIcon />,
          url: "/strains",
        },
        {
          text: "Growers",
          icon: <LocalFloristIcon />,
          url: "/growers",
        },
        {
          text: "Green House",
          icon: <LocalFloristIcon />,
          url: "/greenhouse",
        },
        {
          text: "Account",
          icon: <AccountCircleIcon />,
          url: "/account",
        },
      ]
    : [];

  return (
    <UIDrawer anchor={"left"} open={anchorEl} onClose={props.closeMenu}>
      <List>
        {menuItems.length > 0 &&
          menuItems.map((item, index) => {
            const { text, icon, url } = item;
            return (
              <ListItem button key={index} onClick={() => handleMenuClick(url)}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}

                <ListItemText primary={text} />
              </ListItem>
            );
          })}
      </List>
      {!props.isLoggedIn && (
        <ListItem button onClick={() => handleMenuClick("/login")}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>

          <ListItemText primary="Login" />
        </ListItem>
      )}

      {props.isLoggedIn && (
        <ListItem button onClick={props.logoutClick}>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItem>
      )}
    </UIDrawer>
  );
};

export default withRouter(Drawer);
