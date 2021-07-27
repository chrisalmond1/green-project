import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./GreenHouse.css";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const GreenHouse = (props) => {
  const classes = useStyles();

  var flowers = [
    {
      name: "98 white widow",
      id: 1,
    },
    {
      name: "Another strain",
      id: 2,
    },
  ];
  console.log(flowers);
  if (flowers.length > 0) {
    // loop strains
    var flowersList = flowers.map((item) => {
      return (
        <>
          <Grid item xs={6}>
            <Link href={`${process.env.PUBLIC_URL}/greenhouse/` + item.id}>
              <Paper className={classes.paper}>{item.name}</Paper>
            </Link>
          </Grid>
        </>
      );
    });
  } else {
    var flowersList = <div>Loading the goodies...</div>;
  }
  return (
    <div>
      <div>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/greenhouse`}>
            <div>
              <h2>
                Green House <span>2/4</span>
              </h2>
              <hr></hr>
              <p>Total PM: </p>
              <p>Next Harvest: </p>
              <div className={classes.root}>
                <Grid container spacing={3}>
                  {flowersList}
                </Grid>
              </div>
            </div>
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/greenhouse/:strainID`}>
            <>
              <h1>Strain Name</h1>
            </>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default GreenHouse;
