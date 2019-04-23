import React, { Component } from "react";
// import "./styles.css";
import LoginContainer from "../containers/LoginContainer";


class Login extends Component {
    render() {
      return (
          <div className="container">
            <h3>Login</h3>
            <LoginContainer />
          </div>
          )
      }
  }
  
  export default Login;
  