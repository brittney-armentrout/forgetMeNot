import React, { Component } from "react";
// import "./styles.css";
import FriendDetailContainer from "../containers/FriendDetailContainer";


class FriendDetail extends Component {
    render() {
      return (
          <div className="container">
            <h3>Friend Name Here</h3>
            <FriendDetailContainer />
          </div>
          )
      }
  }
  
  export default FriendDetail;
  