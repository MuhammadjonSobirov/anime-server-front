import axios from "axios";

const BASEURL = "https://anime-server-d9k9.onrender.com";

export const request = axios.create({
    baseURL: BASEURL,
    headers: {
        "Content-Type": "application/json"
    }
})