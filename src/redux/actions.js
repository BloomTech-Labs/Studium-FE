import AxiosWithAuth from '../utils/axiosWithAuth'

export const GET_USER = 'GET_USERS'
export const SET_ERROR = 'SET_ERROR'
export const SET_USER_DECKS = "SET_USER_DECKS"

export const getUser = () => dispatch => {
   AxiosWithAuth()
      .get('/users/me')
      .then(res => {
         dispatch({ type: GET_USER, payload: res.data })
         AxiosWithAuth()
            .get(`/users/${res.data.id}/decks`)
            .then(res => {
               console.log(res)
               dispatch({ type: SET_USER_DECKS, payload: res })
            })
            .catch(err => {
               console.log('NOOOOO!!!!', err)
               dispatch({ type: SET_ERROR, payload: 'There was an error retrieving the user decks' })
            })
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'There was an error retrieving the user' })
      })
}

// export const getUserDecks = (user) => dispatch => {
//    AxiosWithAuth()
//       .get(`/users/${user.id}/decks`)
//       .then(res => {
//          console.log(res)
//          dispatch({ type: SET_USER_DECKS, payload: res.data })
//       })
//       .catch(err => {
//          console.log('NOOOOO!!!!', err)
//          dispatch({ type: SET_ERROR, payload: 'There was an error retrieving the user decks' })
//       })
// }