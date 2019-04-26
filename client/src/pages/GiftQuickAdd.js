import React, { Component } from "react";
// import "./styles.css";
import GiftAddContainer from "../containers/GiftAddContainer";


class GiftAdd extends Component {
    render() {
      return (
          <div className="container">
            <h3>Add a Gift</h3>
            <GiftAddContainer />
          </div>
          )
      }
  }
  
  export default GiftAdd;
  