import React, { Component } from "react";

import Favorites from "../components/Favorites";
import Upcoming from "../components/Upcoming";

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


    // render() {
    //     return (

    //     )
    // }
   
}