import React, { Component } from "react";
import API from "../utils/API";
import { FavBox, FavFriend } from "../components/Favorites";
// import { UpcomingBox, UpcomingItem } from "../components/Upcoming";
// import CheckBox from "../components/Form/checkbox";

class MainContainer extends Component {
    // constructor(props) {
    //     super(props);
        //this state is definitely not correct, needs to be fixed but no energy tonight
        // this.state = {
        state = {
            friends: [],
            name: "",
            address: "",
            img: ""
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

    handleUpcomingClick = () => {
        //when someone clicks on an occasion, should go to friend detail page
        //API.getOccasionDetail
        //or friend detail
        //can probably combine this function with handlefavclick to just handleclick
    }

    render() {
        return (
            <div className="flex-container" id="favoritesFlex">
                    <h2>Favorites</h2>
                        {this.state.friends.length ? (
                            <FavBox>
                                {this.state.friends.map(friend => {
                                    return (
                                        <FavFriend key={friend._id}>
                                            <span className="name">{friend.name}</span>
                                        </FavFriend>
                                            // key = {friend._id}
                                            // id = {friend.id}
                                            // img = {friend.img}
                                            // handleClick = {this.handleFriendClick}
                                        // />
                                    );
                                })}
                            </FavBox>
                        ) : (
                            <h3>No Favorites Yet!</h3> 
                        )}
                    
                    {/* <h2>Upcoming Occasions</h2>
                        {this.state.occasions.length ? (
                            <UpcomingBox>
                                {this.state.upcoming.map(upcoming => (
                                    <UpcomingItem   
                                        key = {upcoming.id}
                                        id = {upcoming.id}
                                        date = {upcoming.date}
                                        handleClick = {this.handleUpcomingClick}
                                    >
                                    <CheckBox />
                                    </UpcomingItem>
                                ))}
                            </UpcomingBox>
                        ) : (
                            // {/* <h3>No Upcoming Occasions Yet!</h3> */}
                        )} */}
            </div>
        )
    }
}


export default MainContainer;



