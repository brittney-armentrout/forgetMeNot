import React, { Component } from "react";
// import "./styles.css";
import FormContainer from "../containers/FormContainer";


class Signup extends Component {
  render() {
    return (
        <div className="container">
          <h3>Sign Up Form</h3>
          <FormContainer />
        </div>
        )
    }
}

export default Signup;
