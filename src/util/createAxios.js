import axios from "axios";

//user Axios_React App
export const userAxios = () => {
    return axios.create( {
        baseURL: process.env.REACT_APP_BASE_URL
    }) ;  
}

export const connectAxiosAuth = (uid) => {
    return axios.create({
        baseURL: process.env.REACT_APP_BASE_URL, headers: {'Auth': uid},
    })
}