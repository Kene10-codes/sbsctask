import axios from "axios"
const LOGIN_API_URL = 'https://reqres.in/api'

const login = (email, password) => {
    return axios 
    .post(LOGIN_API_URL + '/login', {
        email, 
        password
    })
    .then(response => {
        if(response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data.token))
        }

        return response.data
    })
}

const logout = () => {
    localStorage.removeItem("user")
}

const getCurrentUser  = () => {
    return JSON.parse(localStorage.getItem("user"))
}

const authService = {
    login,
    logout,
    getCurrentUser
}

export default authService