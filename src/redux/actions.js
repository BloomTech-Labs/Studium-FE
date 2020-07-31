import AxiosWithAuth from '../utils/axiosWithAuth'

export const GET_USER = 'GET_USER'
export const SET_ERROR = 'SET_ERROR'
export const SET_USER_DECKS = 'SET_USER_DECKS'
export const LOGOUT = 'LOGOUT'
export const POST_NEW_DECK = 'POST_NEW_DECK'
export const SET_CARDS = 'SET_CARDS'
export const POST_NEW_CARD = 'POST_NEW_CARD'
export const EDIT_CARD = 'EDIT_CARD'
export const EDIT_DECK = 'EDIT_DECK'
export const SET_EDITED_CARD = 'SET_EDITED_CARD'
export const SET_EDITED_DECK = 'SET_EDITED_DECK'

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

export const editDeck = (deckToEdit) => dispatch => {
   AxiosWithAuth()
      .put(`/decks/${deckToEdit.id}`, deckToEdit)
      .then(res => {
         console.log(res)
         dispatch({ type: EDIT_DECK, payload: deckToEdit})
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err);
         console.log('deckToEdit', deckToEdit);
			dispatch({ type: SET_ERROR, payload: 'error editing deck' });
		});
}

export const postNewCard = cardToPost => dispatch => {
   AxiosWithAuth()
      .post('/cards', cardToPost) 
      .then(res => {
         console.log(res)
         dispatch({ type: POST_NEW_CARD, payload: cardToPost})
      })
      .catch(err => {
			console.log('NOOOOO!!!!', err);
			dispatch({ type: SET_ERROR, payload: 'error creating card' });
		});
}

export const editCard = (cardToEdit) => dispatch => {
   AxiosWithAuth()
      .put(`/cards/${cardToEdit.id}`, cardToEdit)
      .then(res => {
         console.log(res)
         dispatch({ type: EDIT_CARD, payload: cardToEdit})
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err);
         console.log('cardToEdit', cardToEdit);
			dispatch({ type: SET_ERROR, payload: 'error editing card' });
		});
}

export const setCardBeingEdited = (cardToEdit) => dispatch => {
   dispatch({ type: SET_EDITED_CARD, payload: cardToEdit })
}

export const setDeckBeingEdited = (deckToEdit) => dispatch => {
   dispatch({ type: SET_EDITED_DECK, payload: deckToEdit })
}

export const logout = () => dispatch => {
   dispatch({ type: LOGOUT })
}

export const getAllCardsInDeck = (id) => dispatch => {
   AxiosWithAuth()
      .get(`/decks/${id}/cards`)
      .then(res => {
         console.log('CARDS-->', res)
         dispatch({ type: SET_CARDS, payload: res.data })
      })
      .catch(err => {
			console.log('NOOOOO!!!!', err);
			dispatch({ type: SET_ERROR, payload: 'error getting cards' });
		});
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