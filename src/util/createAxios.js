import axios from "axios";

//user Axios_React App
export const userAxios = () => {
    return axios.create( {
        baseURL: process.env.REACT_APP_BASE_URL
    }) ;  
}
//connects to uid be
export const connectAxiosAuth = (uid) => {
    debugger;
    return axios.create({
        baseURL: process.env.REACT_APP_BASE_URL, headers: {'auth': uid},
    })
}