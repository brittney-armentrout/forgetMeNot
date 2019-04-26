import React, { Component } from "react";
import API from "../utils/API";
import { FeatureBox } from "../components/FeatureBox";
import { Thumbnail } from "../components/Thumbnail";

class MainContainer extends Component {
    // constructor(props) {
    //     super(props);
        //this state is definitely not correct, needs to be fixed but no energy tonight
        // this.state = {
        state = {
            friends: [],
            name: "",
            address: "",
            img: "",
            gifts: [],
            occasions: []
        }
        // this.populateFavorites = this.populateFavorites.bind(this);
    // }

    componentDidMount() {
        this.loadFriends()
    }

    //not sure if this is functional or not
    //will need to change to Favorites once we get that functionality going, for now just load friends
    loadFriends = () => {
        API.getFriends()
            .then(res => this.setState({ friends: res.data }))
            .catch(err => console.log(err))
    }

    handleFriendClick = () => {
        //when someone clicks on a fav picture, should go to friend detail page
    }

    handleUpcomingClick = () => {
        //when someone clicks on an occasion, should go to friend detail page 
    }

    render() {
        return (
            <div className="flex-container" id="favoritesFlex">
                    <h2>Friends</h2>
                        {this.state.friends.length ? (
                            <FeatureBox>
                                {this.state.friends.map(friend => {
                                    return (
                                        <Thumbnail key={friend._id} />
                                    );
                                })}
                            </FeatureBox>
                        ) : (
                            <h3>No Friends Yet!</h3> 
                        )}
                    
                    <h2>Upcoming Occasions</h2>
                        {/* {this.state.occasions.length ? (
                            <FeatureBox>
                                {this.state.upcoming.map(upcoming => (
                                    <UpcomingItem  
                                        key = {upcoming.id}
                                        id = {upcoming.id}
                                        date = {upcoming.date}
                                        handleClick = {this.handleUpcomingClick}
                                    >
                                    </UpcomingItem>
                                ))}
                            </FeatureBox>
                        ) : (
                            <h3>No Upcoming Occasions Yet!</h3>
                        )} */}
            </div>
        )
    }
}


export default MainContainer;



