import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Card from "../../Cards/Card";

const StrainGrower = (props) => {
  const [strainTabSelected, setStrainTabSelected] = useState(0);
  const [strain, setStrain] = useState();
  const { match } = props;

  const growers = [
    {
      key: 1,
      title: "Bob Green House",
      area: "Randburg",
      image: "https://dummyimage.com/600x400/0f0/fff&text=LOGO",
      imageTitle: "logo",
    },
    { key: 2, title: "Jeff  Green House", area: "Ferndale" },
    { key: 3, title: "Juuu  Green House", area: "Alberton" },
    { key: 4, title: "Hey  Green House", area: "Edenvale" },
    { key: 5, title: "Lekka  Green House", area: "Edenvale" },
    { key: 6, title: "420  Green House", area: "Edenvale" },
  ];
  

  console.log("strainTabSelected", strainTabSelected);
  return (
    <>
      <h1>Growers</h1>
          <div>
            {growers &&
              growers.map((item) => {
                return (
                  <Link
                    key={item.key}
                    to={`${process.env.PUBLIC_URL}/growers/${item.key}`}
                  >
                    <Card post={item} />
                  </Link>
                );
              })}
          </div>
    </>
  );
};

export default withRouter(StrainGrower);
