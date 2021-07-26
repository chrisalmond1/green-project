import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import About from "./inc/About";
import StrainGrower from "./inc/StrainGrower";
import Reviews from "../Reviews/Reviews";

const Strain = (props) => {
  const [strainTabSelected, setStrainTabSelected] = useState(0);
  const [strain, setStrain] = useState();
  const { match } = props;

  const handleChange = (event, newValue) => {
    setStrainTabSelected(newValue);
  };

  useEffect(() => {
    const token = localStorage.getItem("user_token");
    console.log("match", match);
    console.log("strain", props.strains[0]);
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
        // set manual override
        setStrain(props.strains[0]);
      });
  }, []);

  console.log("strainTabSelected", strainTabSelected);
  return (
    <>
      <AppBar style={{ marginTop: "56px" }}>
        <Tabs
          value={strainTabSelected}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label={"About"} />
          <Tab label="Growers Near You" />
          <Tab label="Reviews" />
        </Tabs>
      </AppBar>
      <div style={{ width: "100%", marginTop: 55 }}>
        {strainTabSelected === 0 && strain && <About strain={strain} />}
        {strainTabSelected === 1 && <StrainGrower />}
        {strainTabSelected === 2 && <Reviews />}
      </div>
    </>
  );
};

export default withRouter(Strain);
