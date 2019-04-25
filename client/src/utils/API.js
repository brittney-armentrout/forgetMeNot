import axios from "axios";

export default {
    //Will get favorites (not sure if this will work...)
    getFriends: function() {
        return axios.get("/api/friends")
    },
    //Gets friend detail
    getFriendDetail: function() {
        return axios.get("/api/detail")
    }
    
}