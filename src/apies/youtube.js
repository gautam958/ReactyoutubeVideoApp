import axios from "axios";
export const KEY = 'AIzaSyDNAxqLmgn3OZlDuVn2OvqUNKm-2g7j5l4';
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 15,
        key: KEY
    }
});