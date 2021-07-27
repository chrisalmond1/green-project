import React, { Component } from "react";
import Strain from "../Strain/Strain";
import StrainSingle from "./strainSingle";
import { Switch, Route } from "react-router-dom";

import axios from "axios";

class StrainsList extends Component {
  makeAcronymn = (str) => {
    if (!str) {
      return null;
    }
    return str
      .split(/\b(?=[a-z])/gi) // split on word boundaries
      .map((token) => token[0]) // get first letter of each token
      .join("")
      .toLowerCase(); // convert to lowercase string
  };

  componentDidMount() {
    var token = localStorage.getItem("user_token");
    // console.log("match", params);
    if (this.props.strains.length === 0) {
      // var self = this;
      axios
        .get("https://api.almondfactory.app/strains/get/all", {
          // TODO: get from url parameter
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("test");
          console.log("main repsonse", response.data.data);
          const strains = response.data.data;
          this.props.setStrain(strains);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("strains have been set");
    }
  }

  render() {
    var strains = "";
    console.log("strains", this.props.strains);
    // show loading while waiting
    if (this.props.strains.length > 0) {
      // loop strains
      strains = this.props.strains.map((item) => {
        return (
          <StrainSingle
            key={item.id}
            strain={item}
            makeAcr={this.makeAcronymn}
          />
        );
      });
    } else {
      strains = <div>Loading the goodies...</div>;
    }

    return (
      <div>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/strains`}>
            <h1>Strains</h1>
            <div>{strains}</div>
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/strains/:strainID`}>
            <Strain {...this.props} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default StrainsList;
