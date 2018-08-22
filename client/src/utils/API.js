import axios from "axios";


const BASEURL = "https://www.omdbapi.com/?s=star-trek&apikey=trilogy";
export default {
  getPicture: function() {
    return axios.get(BASEURL);
  }
};
