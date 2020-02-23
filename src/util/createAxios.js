import axios from "axios";


export const userAxios = () => {
    return axios.user()
        baseURL: process.env.REACT_APP_BASE_URL
}