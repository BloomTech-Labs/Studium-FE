import AxiosWithAuth from '../utils/axiosWithAuth'

export const GET_USER = 'GET_USER'
export const SET_ERROR = 'SET_ERROR'
export const SET_USER_DECKS = 'SET_USER_DECKS'
export const LOGOUT = 'LOGOUT'
export const POST_NEW_DECK = 'POST_NEW_DECK'

export const getUser = () => dispatch => {
   AxiosWithAuth()
      .get('/users/me')
      .then(res => {
         dispatch({ type: GET_USER, payload: res.data })
         AxiosWithAuth()
            .get(`/users/${res.data.id}/decks`)
            .then(res => {
               console.log(res)
               dispatch({ type: SET_USER_DECKS, payload: res.data })
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

export const postNewDeck = (deckToPost) => dispatch => {
   AxiosWithAuth()
      .post('/decks', deckToPost)
      .then(res => {
         console.log('from postNewDeck-->', res)
         dispatch({ type: POST_NEW_DECK, payload: deckToPost })
      })
      .catch(err => {
			console.log('NOOOOO!!!!', err);
			dispatch({ type: SET_ERROR, payload: 'error creating deck' });
		});
}

export const postNewCard = cardToPost => dispatch => {
   AxiosWithAuth()
      .post('/cards', cardToPost) 
      .then(res => {
         console.log(res)
      })
      .catch(err => {
			console.log('NOOOOO!!!!', err);
			dispatch({ type: SET_ERROR, payload: 'error creating card' });
		});
}

export const logout = () => dispatch => {
   dispatch({ type: LOGOUT })
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