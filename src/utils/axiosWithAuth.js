import { useOktaAuth } from '@okta/okta-react'
import axios from 'axios'

const AxiosWithAuth = () => {
   const { authState } = useOktaAuth()
   const token = authState.accessToken

   return axios.create({
      headers: {
         'Content-Type': 'application/json',
         Authorization: `Bearer ${token}`,
      },
      baseURL: 'https://studium-be.herokuapp.com/api'
   })
}

export default AxiosWithAuth