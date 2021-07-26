import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import About from "./inc/About";
import StrainsList from "../StrainsList/StrainsList";
import Reviews from "../Reviews/Reviews";

const Grower = (props) => {
  const [growerTabSelected, setGrowerTabSelected] = useState(0);
  const [grower, setGrower] = useState();
  const { match } = props;

  

  const handleChange = (event, newValue) => {
    setGrowerTabSelected(newValue);
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
        setGrower(responseStrain);
      })
      .catch(function (error) {
        console.log(error);
        const grower = {
          key: 1,
          title: "Bob Green House",
          area: "Randburg",
          image: "https://dummyimage.com/600x400/0f0/fff&text=LOGO",
          imageTitle: "logo",
        };
        setGrower(grower);
        
      });
  }, []);

  return (
    <>
      <AppBar style={{ marginTop: "56px" }}>
        <h1>{grower && grower.title}</h1>
        <Tabs
          value={growerTabSelected}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label={"About"} />
          <Tab label="Strains" />
          <Tab label="Reviews" />
        </Tabs>
      </AppBar>
      <div style={{ width: "100%", marginTop: 55 }}>
        {growerTabSelected === 0 && grower && <About strain={grower} />}
        {/* {growerTabSelected === 1 && <StrainsList />} */}
        {growerTabSelected === 2 && <Reviews />}
      </div>
    </>
  );
};

export default withRouter(Grower);
