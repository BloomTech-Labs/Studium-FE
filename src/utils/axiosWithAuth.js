import axios from 'axios'

const AxiosWithAuth = () => {
   const token = localStorage.getItem("token");

   return axios.create({
     headers: {
       Authorization: token,
     },
      baseURL: 'https://studium-be.herokuapp.com/api'
   })
}

export default AxiosWithAuth