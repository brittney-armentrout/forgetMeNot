import axios from "axios";

export default {
    //Will get favorites (not sure if this will work...)
    getFavorites: function() {
        return axios.get("/api/favorites")
    },
    //Gets friend detail
    getFriendDetail: function() {
        return axios.get("/api/detail")
    }
    
}