import { useOktaAuth } from '@okta/okta-react'
import axios from 'axios'

const AxiosWithAuth = () => {
   const token = localStorage.getItem("token");

   console.log(token);
   return axios.create({
     headers: {
       Authorization: token,
     },
      baseURL: 'https://studium-be.herokuapp.com/api'
   })
}

export default AxiosWithAuth