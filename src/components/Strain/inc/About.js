import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const About = (props) => {
  var strain = props.strain;
  var flavors = strain.flavor ? strain.flavor.split(",") : 0;
  var effects = strain.effect ? strain.effect.split(",") : 0;
  return (
    <Container maxWidth="sm">
      <Grid container spacing={1} style={{ paddingTop: 70 }}>
        <Grid container item xs={12}>
          <Typography component="h2" variant="h3">
            {strain.name}
          </Typography>
          <Card></Card>
        </Grid>
        <Grid container item xs={12}>
          <Typography color="textSecondary">
            Flavour:{" "}
            {flavors && flavors.map((flav) => <span key={flav}>{flav}, </span>)}
          </Typography>
          <Typography variant="body2" component="p">
            Mood:{" "}
            {effects &&
              effects.map((effect) => <span key={effect}>{effect}, </span>)}
          </Typography>
        </Grid>
      </Grid>
      <hr />
      <Grid container>
        <Grid container item xs={12}>
          <Typography component="p" variant="p">
            {strain.description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
