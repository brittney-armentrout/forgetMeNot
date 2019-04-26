import React, { Component } from "react";
import API from "../utils/API";
import { FavBox, FavFriend } from "../components/Favorites";
import { UpcomingBox, UpcomingItem } from "../components/Upcoming";

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
        // API.getFriendDetail()
        //     .then(res => this.setState
    }

    //handle giftBought checkbox event
    // handleGiftCheckBox(event) {
    //     const giftBought = e.target.value;
    //     let giftBoughtArray;
    // }

    handleUpcomingClick = () => {
        //when someone clicks on an occasion, should go to friend detail page
        //API.getOccasionDetail
        //or friend detail
        //can probably combine this function with handlefavclick to just handleclick
    }

    render() {
        return (
            <div className="flex-container" id="favoritesFlex">
                    <h2>Friends</h2>
                        {this.state.friends.length ? (
                            <FavBox>
                                {this.state.friends.map(friend => {
                                    return (
                                        <FavFriend key={friend._id}>
                                            <span className="name">{friend.name}</span>
                                            {/* <img className="img">{friend.img}</img> */}
                                        </FavFriend>
                                    );
                                })}
                            </FavBox>
                        ) : (
                            <h3>No Friends Yet!</h3> 
                        )}
                    
                    <h2>Upcoming Occasions</h2>
                        {/* {this.state.occasions.length ? (
                            <UpcomingBox>
                                {this.state.upcoming.map(upcoming => (
                                    <UpcomingItem  
                                        key = {upcoming.id}
                                        id = {upcoming.id}
                                        date = {upcoming.date}
                                        handleClick = {this.handleUpcomingClick}
                                    >
                                    </UpcomingItem>
                                ))}
                            </UpcomingBox>
                        ) : (
                            <h3>No Upcoming Occasions Yet!</h3>
                        )} */}
            </div>
        )
    }
}


export default MainContainer;



