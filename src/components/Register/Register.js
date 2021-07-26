// import { Component } from "react";
// import { Page, Input } from "react-onsenui";
import React, { useRef , useState} from "react";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const axios = require("axios");

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const usernameEl = useRef(null);
  const emailEl = useRef(null);
  const phoneEl = useRef(null);
  const passwordEl = useRef(null);

  const [usernameError,setUsernameError] = useState('')
  const [emailError,setEmailError] = useState('')
  const [phoneError,setPhoneError] = useState('')
  const [passwordError,setPasswordError] = useState('')


  const inputProps = {
    username: {
      ref: usernameEl,
    },
    email: {
      ref: emailEl,
    },
    phone: {
      ref: phoneEl,
    },
    password: {
      ref: passwordEl,
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsernameError(false)
    setPasswordError(false)
    setEmailError(false)
    setPhoneError(false)


    const data = {
      username: usernameEl.current.value,
      password: passwordEl.current.value,
      phone: phoneEl.current.value,
      email: emailEl.current.value,
    };

    axios
      .post("https://api.almondfactory.app/signup", {
        username: data.username,
        password: data.password,
        phone: data.phone,
        email: data.email,
        type: "user",
      })
      .then(function (response) {
        console.log(response);
        history.push(`${process.env.PUBLIC_URL}/login`);
      })
      .catch(function (error) {
        setUsernameError(true)
        setPasswordError(true)
        setEmailError(true)
        setPhoneError(true)
        console.log(error);
      });

    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  };

  return (
    <div style={{ padding: "0 15px" }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  inputProps={inputProps.username}
                  autoFocus
                  error={usernameError}
                  helperText={usernameError ? 'Invalid User  Name':''}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  inputProps={inputProps.email}
                  type="email"
                  error={emailError}
                  helperText={emailError ? 'Invalid Email Address':''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="number"
                  label="Phone Number"
                  name="number"
                  autoComplete="number"
                  inputProps={inputProps.phone}
                  error={phoneError}
                  helperText={phoneError ? 'Invalid Phone Number':''}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputProps={inputProps.password}
                  error={passwordError}
                  helperText={passwordError ? 'Invalid Password':''}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href={`${process.env.PUBLIC_URL}/login`} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default Register;
