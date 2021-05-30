import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import About from "./inc/About";
import StrainsList from "../StrainsList/StrainsList";
import Reviews from "../Reviews/Reviews";

const Grower = (props) => {
  const [strainTabSelected, setStrainTabSelected] = useState(0);
  const [strain, setStrain] = useState();
  const { match } = props;

  const handleChange = (event, newValue) => {
    setStrainTabSelected(newValue);
  };

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    console.log("match", match);
    axios
      .get(
        "https://api.almondfactory.app/strains/get/" + match.params.strainID,
        {
          // TODO: get from url parameter
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        const responseStrain = response.data.data;
        setStrain(responseStrain);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <AppBar style={{ marginTop: "56px" }}>
        <Tabs
          value={strainTabSelected}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label={"About"} />
          <Tab label="Strains" />
          <Tab label="Reviews" />
        </Tabs>
      </AppBar>
      <div style={{ width: "100%", marginTop: 55 }}>
        {strainTabSelected === 0 && strain && <About strain={strain} />}
        {strainTabSelected === 1 && <StrainsList />}
        {strainTabSelected === 2 && <Reviews />}
      </div>
    </>
  );
};

export default withRouter(Grower);
