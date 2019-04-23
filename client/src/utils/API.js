import axios from "axios";

export default {
    getFavorites: function() {
        return axios.get("/api/favorites")
    }
}