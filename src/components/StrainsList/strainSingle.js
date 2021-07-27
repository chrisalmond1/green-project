import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class StrainSingle extends Component {
  constructor(props) {
    super(props);
    this.item = this.props.strain;
  }

  render() {
    var flavours = [];
    if (
      this.props.strain.flavor !== null &&
      this.props.strain.flavor.length > 0
    ) {
      flavours = this.props.strain.flavor.split(",");
    }
    var effects = [];

    // console.log("this.item ", this.item);
    // console.log("this.props.strain ", this.props.strain);
    if (
      this.props.strain.effect !== "None" &&
      this.props.strain.effect.length > 0
    ) {
      effects = this.props.strain.effect.split(",");
    }

    return (
      <Link to={`${process.env.PUBLIC_URL}/strains/${this.props.strain.id}`}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {this.props.strain.type}
            </Typography>
            <Typography variant="h5" component="h2">
              {this.props.strain.name}
            </Typography>
            <Typography color="textSecondary">
              {flavours.map((flav) => (
                <span key={flav}>{flav}, </span>
              ))}
            </Typography>
            <Typography variant="body2" component="p">
              {effects.map((effect) => (
                <span key={effect}>{effect}, </span>
              ))}
            </Typography>
          </CardContent>
        </Card>
        <br />
      </Link>
    );
  }
}

export default StrainSingle;
