import { axiosWithAuth } from '../utils/axiosWithAuth'

export const GET_USERS = 'GET_USERS'
export const SET_ERROR = 'SET_ERROR'

export const getUsers = () => dispatch => {
   axiosWithAuth()
      .get('/users')
      .then(res => {
         dispatch({ type: GET_USERS, payload: res.data })
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'There was an error retrieving the users' })
      })
}