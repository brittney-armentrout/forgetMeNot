import axios from "axios";

export default {
    //Will get favorites (not sure if this will work...)
    getFriends: function(userID) {
        console.log("hitting API get friends with userid: " + userID);
        return axios.get(`/api/friends/${userID}`)
    },
    //Gets friend detail
    getFriendDetail: function() {
        return axios.get("/api/detail")
    },
    // Saves a book to the database
    saveFriend: function(userID, friendData) {
        return axios.post(`/api/friends/${userID}`, friendData);
    },
    uploadImg: function(imgData) {
        return axios.post("/api/upload", imgData)
    },
    saveGift: function(giftData) {
        return axios.post("/api/gift", giftData);
    }
    
}