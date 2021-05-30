import React from "react";
import Card from "../Cards/Card";
import Grower from "../Grower/Grower";
import { Link, Switch, Route } from "react-router-dom";

export default function Growers() {
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
  return (
    <div>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/growers`}>
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
        </Route>
        <Route path={`${process.env.PUBLIC_URL}/growers/:growerID`}>
          <Grower />
        </Route>
      </Switch>
    </div>
  );
}
