import axios from "axios";

export default {
    //Will get favorites (not sure if this will work...)
    getFriends: function() {
        return axios.get("/api/friends")
    },
    //Gets friend detail
    getFriendDetail: function() {
        return axios.get("/api/detail")
    },
    // Saves a book to the database
    saveFriend: function(friendData) {
        return axios.post("/api/friends", friendData);
    },
    uploadImg: function(imgData) {
        return axios.post("/api/upload", imgData)
    },
    saveGift: function(giftData) {
        console.log('gift API Hit!')
        return axios.post("/api/gift", giftData);
    }
    
}