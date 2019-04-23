import React, { Component } from "react";
import API from "../utils/API";
import { FavBox, FavFriend } from "../components/Favorites";
import { UpcomingBox, UpcomingItem } from "../components/Upcoming";
import CheckBox from "../components/Form/checkbox";

class MainContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Favorites: []
        }
        // this.populateFavorites = this.populateFavorites.bind(this);
    }

    componentDidMount() {
        this.loadFavorites();
    }

    loadFavorites = () => {
        API.getFavorites()
            .then(res => this.setState({ friends: res.data }))
            .catch(err => console.log(err))
    }

    handleFavClick = () => {
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
                                {this.state.friends.map(fav => (
                                    <FavFriend  
                                        key = {fav.id}
                                        id = {fav.id}
                                        img = {fav.img}
                                        handleClick = {this.handleFavClick}
                                    />
                                ))}
                            </FavBox>
                        ) : (
                            <h3>No Favorites Yet!</h3>
                        )}
                    
                    <h2>Upcoming Occasions</h2>
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
                            <h3>No Upcoming Occasions Yet!</h3>
                        )}
            </div>
        )
    }
   
}

export default MainContainer;



