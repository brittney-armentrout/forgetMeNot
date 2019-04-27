import React, { Component } from "react";
// import "./styles.css";
import LoginContainer from "../containers/LoginContainer";
// import FullLogo from "../components/Logo"

const fullLogo = require("./Artboard5.png");

class Login extends Component {
    render() {
      return (
          <div className="container">
            <div className="imgContainer center" style={{marginTop: 40}}>
              <img src={fullLogo} alt="Logo" />
            </div>
            <LoginContainer />
          </div>
          )
      }
  }
  
  export default Login;
  