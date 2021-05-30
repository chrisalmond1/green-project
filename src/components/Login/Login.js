import React from "react";
import { withRouter } from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = (props) => {
  return (
    <div style={{ padding: "0 15px" }}>
      <LoginForm {...props} />
    </div>
  );
};

export default withRouter(Login);
