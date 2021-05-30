import React from "react";
import Card from "../../Cards/Card";

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
      <h1>Growers</h1>
      {growers &&
        growers.map((item) => {
          return (
            <div key={item.key}>
              <Card post={item} />
            </div>
          );
        })}
    </div>
  );
}
