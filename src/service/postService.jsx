import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "https://reqres.in/api/users?page=2"


const homePage = () => {
    return axios.get(API_URL + '/')
}
const getProfilePrivatePage = () => {
    return axios.get(API_URL, { headers: authHeader() })
}

const getAccountPage = () => {
    return axios.get(API_URL, { headers: authHeader() })
}


const postService = {
    homePage,
    getProfilePrivatePage,
    getAccountPage
}

export default postService