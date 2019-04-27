import React, { Component } from "react";
// import "./styles.css";
import AddFriendContainer from "../containers/AddFriendContainer";


class AddFriend extends Component {
    render() {
      return (
          <div className="container">
            <h3>Add a Friend</h3>
            <AddFriendContainer />
          </div>
          )
      }
  }
  
  export default AddFriend;
  