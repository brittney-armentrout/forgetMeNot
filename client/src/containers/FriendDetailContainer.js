import React, { Component } from "react";
import API from "../utils/API";
import { FeatureBox } from "../components/FeatureBox";
import Thumbnail from "../components/Thumbnail/Thumbnail";

class FriendDetailContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Friend: {
                name: "",
                address: "",
                img: "",
                gifts: [],
                occasions: []
            }
        }
        // this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        // this.handleClearLogin = this.handleClearLogin.bind(this);
        // this.handleLoginInput = this.handleLoginInput.bind(this);
    }

    componentDidMount() {
        this.loadFriendDetail()
    }

    loadFriendDetail = () => {
        API.getFriendDetail()
            .then(res => this.setState({ friends: res.data }))
            .catch(err => console.log(err))
    } 

    render() {
        return (
            <div>
                <Thumbnail />
                <FeatureBox />
            </div>
            
        )
    }





}

export default FriendDetailContainer;
