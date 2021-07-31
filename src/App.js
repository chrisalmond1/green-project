import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import StrainsList from "./components/StrainsList/StrainsList";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./components/Home/Home";
import Growers from "./components/Growers/Growers";
import GreenHouse from "./components/GreenHouse/GreenHouse";
import Account from "./components/Account/Account"
import Container from "@material-ui/core/Container";

class App extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: false,
      isLoggedIn: false,
      strains: [
        // {
        //   id: 1,
        //   name: "100 Og",
        //   type: "hybrid",
        //   effect: "Creative,Energetic,Tingly,Euphoric,Relaxed",
        //   flavor: "Earthy,Sweet,Citrus",
        //   description:
        //     "$100 OG is a 50/50 hybrid strain that packs a strong punch. The name supposedly refers to both its strength and high price when it first started showing up in Hollywood. As a plant, $100 OG tends to produce large dark green buds with few stems. Users report a strong body effect of an indica for pain relief with the more alert, cerebral feeling thanks to its sativa side.",
        //   created_at: null,
        //   updated_at: null,
        // },
        // {
        //   id: 2,
        //   name: "98 White Widow",
        //   type: "hybrid",
        //   effect: "Relaxed,Aroused,Creative,Happy,Energetic",
        //   flavor: "Flowery,Violet,Diesel",
        //   description:
        //     "The '98 Aloha White Widow is an especially potent cut of White Widow that has grown in renown alongside Hawaiian legends like Maui Wowie and Kona Gold. This White Widow phenotype reeks of diesel and skunk and has a rich earthy taste with intermittent notes of hash. Its buds are coated in trichomes, giving its dark foliage a lustrous glint to go along with its room-filling odor. This one-hitter-quitter uplifts the mind with mind-bending euphoria that materializes in the body as airy relaxation. '98 Aloha White Widow is available from Pua Mana 1st Hawaiian Pakal_l_ Seed Bank.",
        //   created_at: null,
        //   updated_at: null,
        // },
        // {
        //   id: 3,
        //   name: "1024",
        //   type: "sativa",
        //   effect: "Uplifted,Happy,Relaxed,Energetic,Creative",
        //   flavor: "Spicy/Herbal,Sage,Woody",
        //   description:
        //     "1024 is a sativa-dominant hybrid bred in Spain by Medical Seeds Co. The breeders claim to guard the secret genetics due to security reasons, but regardless of its genetic heritage, 1024 is a THC powerhouse with a sweet and spicy bouquet. Subtle fruit flavors mix with an herbal musk to produce uplifting sativa effects. One specific phenotype is noted for having a pungent odor that fills a room, similar to burning incense.",
        //   created_at: null,
        //   updated_at: null,
        // },
        // {
        //   id: 4,
        //   name: "13 Dawgs",
        //   type: "hybrid",
        //   effect: "Tingly,Creative,Hungry,Relaxed,Uplifted",
        //   flavor: "Apricot,Citrus,Grapefruit",
        //   description:
        //     "13 Dawgs is a hybrid of G13 and Chemdawg genetics bred by Canadian LP Delta 9 BioTech. The two potent strains mix to create a balance between indica and sativa effects. 13 Dawgs has a sweet earthy musk that brings a blend of woody citrus flavors. The effects of 13 Dawgs induce a happy, relaxed body buzz with a creative and focused mind that counters depression and stimulates the appetite.",
        //   created_at: null,
        //   updated_at: null,
        // },
        // {
        //   id: 5,
        //   name: "24K Gold",
        //   type: "hybrid",
        //   effect: "Happy,Relaxed,Euphoric,Uplifted,Talkative",
        //   flavor: "Citrus,Earthy,Orange",
        //   description:
        //     "Also known as Kosher Tangie, 24k Gold is a 60% indica-dominant hybrid that combines the legendary LA strain Kosher Kush with champion sativa Tangie to create something quite unique. Growing tall in its vegetative cycle and very stretchy in flower, this one will need an experienced hand when grown indoors. Most phenotypes will exhibit a sweet orange aroma from the Tangie along with the dark coloration of the Kosher Kush, and will offer a strong citrus flavor when smoked or vaped. THC levels range from 18% to 24%| definitely not for novice users!",
        //   created_at: null,
        //   updated_at: null,
        // },
      ],
      growers: [{ id: 1, name: "Dave the farmer" }],
    };

    // needs to use setState
    if (localStorage.getItem("user_token") != null) {
      this.state.isLoggedIn = true;
    } else {
      this.state.isLoggedIn = false;
    }
  }

  loginAction = () => {
    console.log("this is a login");
    this.setState({
      isLoggedIn: true,
    });
  };

  logoutAction = () => {
    console.log("loggin out");
    localStorage.removeItem("user_token");
    this.setState({ anchorEl: false, isLoggedIn: false });
  };

  doSetStrains = (strains) => {
    this.setState({ strains: strains });
  };

  doSetStrain = (strain) => {
    this.setState({ strain });
  };

  handleMenuOpen = () => {
    this.setState({ anchorEl: true });
  };

  handleMenuClose = (anchor) => {
    this.setState({ anchorEl: false });
  };

  changeStrainTab = (event) => {
    // this.setState
  };

  render() {
    return (
      <React.Fragment>
        <Router basename={"/."}>
          <Header menuClick={this.handleMenuOpen} />
          <Drawer
            anchor={this.state.anchorEl}
            closeMenu={this.handleMenuClose}
            logoutClick={this.logoutAction}
            isLoggedIn={this.state.isLoggedIn}
          />
          <div style={{ width: "100%", height: 55 }}></div>
          <Container>
            <Switch>
              <Route path={`${process.env.PUBLIC_URL}/login`}>
                <Login loginAction={this.loginAction} />
              </Route>

              <Route path={`${process.env.PUBLIC_URL}/register`}>
                <Register />
              </Route>

              {/* Strains */}
              <Route path={`${process.env.PUBLIC_URL}/strains`}>
                {this.state.isLoggedIn ? (
                  <StrainsList
                    setStrain={this.doSetStrains}
                    strains={this.state.strains}
                    loadStrains={this.doSetStrains}
                    doStrain={this.doSetStrain}
                    strain={this.state.strain}
                    selectedStrainTab={this.state.selectedStrainTab}
                  />
                ) : (
                  <Login loginAction={this.loginAction} />
                )}
              </Route>

              <Route path={`${process.env.PUBLIC_URL}/growers`}>
                {this.state.isLoggedIn ? (
                  <Growers />
                ) : (
                  <Login loginAction={this.loginAction} />
                )}
              </Route>

              <Route path={`${process.env.PUBLIC_URL}/greenhouse`}>
                {this.state.isLoggedIn ? (
                  <GreenHouse />
                ) : (
                  <Login loginAction={this.loginAction} />
                )}
              </Route>

              <Route path={`${process.env.PUBLIC_URL}/account`}>
                {this.state.isLoggedIn ? (
                  <Account />
                ) : (
                  <Login loginAction={this.loginAction} />
                )}
              </Route>

              <Route path={`${process.env.PUBLIC_URL}/home`}>
                {this.state.isLoggedIn ? (
                  <Home />
                ) : (
                  <Login loginAction={this.loginAction} />
                )}
              </Route>
            </Switch>
          </Container>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
