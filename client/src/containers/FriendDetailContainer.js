import React, { Component } from "react";
import API from "../utils/API";
import { FeatureBox } from "../components/FeatureBox";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import { List, ListItem } from "../components/List";

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
                <div className="friendInfo">
                    <div className="row">
                        <div className="col s6">
                            <Thumbnail />
                        </div>
                        <div className="col s6">
                            <h4>Jolene Bakerschmidt</h4>
                            <p>123 Gingerbread Lane</p>
                        </div>
                    </div>
                </div>
                <FeatureBox>
                    <List>
                        <h5>Occasions</h5>
                        {/* This is probably the wrong way to grab it but just to get an idea */}
                        {/* <ListItem key = {friend.occasion._id}></ListItem> */}
                        <ListItem>
                            <p>Anniversary: 10/10/2010</p>
                        </ListItem>
                        <ListItem>
                            <p>Birthday: 04/04/1975</p>
                        </ListItem>
                    </List>
                </FeatureBox> 

                <div className="giftCarousel">
                    <FeatureBox>
                        <h5>Gift Carousel goes here</h5>
                    </FeatureBox>
                </div>
            </div>
            
        )
    }





}

export default FriendDetailContainer;
