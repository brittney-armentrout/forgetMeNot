import axios from "axios";

export default {
    //Will get favorites (not sure if this will work...)
    getFriends: function(id) {
        return axios.get("/api/users/" + id)
    },
    //Gets friend detail
    getFriendDetail: function() {
        return axios.get("/api/detail")
    },
    // Saves a book to the database
    saveFriend: function(friendData) {
    return axios.post("/api/friends", friendData);
  }
    
}