import AxiosWithAuth from '../utils/axiosWithAuth'

export const GET_USER = 'GET_USER'
export const SET_ERROR = 'SET_ERROR'
export const SET_USER_DECKS = 'SET_USER_DECKS'
export const RESET_USER_DECKS = 'RESET_USER_DECKS'
export const LOGOUT = 'LOGOUT'
export const POST_NEW_DECK = 'POST_NEW_DECK'
export const SET_CARDS = 'SET_CARDS'
export const POST_NEW_CARD = 'POST_NEW_CARD'
export const EDIT_CARD = 'EDIT_CARD'
export const EDIT_DECK = 'EDIT_DECK'
export const SET_EDITED_CARD = 'SET_EDITED_CARD'
export const DELETE_CARD = 'DELETE_CARD'
export const SET_EDITED_DECK = 'SET_EDITED_DECK'
export const AUTOGEN_RES = 'AUTOGEN_RES'
export const CLEAR_AUTOGEN_RES = 'CLEAR_AUTOGEN_RES'
export const SET_CURRENT_SESSION = 'SET_CURRENT_SESSION'
export const GET_DECK_SESSIONS = 'GET_DECK_SESSIONS'
export const GET_METRICS = 'GET_METRICS'

export const getUser = () => dispatch => {
   AxiosWithAuth()
      .get('/users/me')
      .then(res => {
         dispatch({ type: GET_USER, payload: res.data })
         AxiosWithAuth()
            .get(`/users/${res.data.id}/decks`)
            .then(res => {
               dispatch({ type: SET_USER_DECKS, payload: res.data })
            })
            .catch(err => {
               dispatch({ type: SET_ERROR, payload: 'There was an error retrieving the user decks' })
            })
      })
      .catch(err => {
         dispatch({ type: SET_ERROR, payload: 'There was an error retrieving the user' })
      })
}

export const resetUserDecks = (id) => dispatch => {
   AxiosWithAuth()
      .get(`/users/${id}/decks`)
      .then(res => {
         dispatch({ type: RESET_USER_DECKS, payload: res.data })
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err)
         dispatch({ type: SET_ERROR, payload: 'There was an error retrieving the user decks' })
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
         dispatch({ type: RESET_USER_DECKS, payload: deckToEdit})
      })
      .catch(err => {
         console.log('NOOOOO!!!!', err);
         console.log('deckToEdit', deckToEdit);
			dispatch({ type: SET_ERROR, payload: 'error editing deck' });
		});
}

export const setDeckBeingEdited = (deckToEdit) => dispatch => {
   dispatch({ type: SET_EDITED_DECK, payload: deckToEdit })
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
   if (cardToEdit.id) {
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
   } else if (cardToEdit.card_id) {
      console.log(cardToEdit.card_id)
      AxiosWithAuth()
         .put(`/cards/${cardToEdit.card_id}`, cardToEdit)
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
}

export const setCardBeingEdited = (cardToEdit) => dispatch => {
   dispatch({ type: SET_EDITED_CARD, payload: cardToEdit })
}

export const autoGenerate = (term) => dispatch => {
   AxiosWithAuth()
      .get(`https://studium-ds.herokuapp.com/search?word=${term}`)
      .then(res => {
         console.log(res.data)
         dispatch({ type: AUTOGEN_RES, payload: res.data })
      })
      .catch(err => {
			console.log('NOOOOO!!!!', err);
			dispatch({ type: SET_ERROR, payload: 'error auto-generating card' });
		});
}

export const clearAutoGenRes = () => dispatch => {
   dispatch({ type: CLEAR_AUTOGEN_RES })
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

export const deleteCard = id => dispatch => {
   console.log('id of deleted Card', parseInt(id))
   AxiosWithAuth()
      .delete(`/cards/${id}`)
      .then(res => {
         console.log('deleted card:', res)
         console.log('id of deleted Card', id)
         dispatch({ type: DELETE_CARD, payload: parseInt(id)})
      })
      .catch(err => {
			console.log('NOOOOO!!!!', err);
			dispatch({ type: SET_ERROR, payload: 'error deleting card' });
		});
}

export const setCurrentSession = sessionToPost => dispatch => {
   dispatch({ type: SET_CURRENT_SESSION, payload: sessionToPost})
}

export const postNewSession = sessionToPost => dispatch => {
   console.log('sessionToPost(from actions):', sessionToPost)
   dispatch({ type: SET_CURRENT_SESSION, payload: sessionToPost})
   AxiosWithAuth()
      .post('/sessions', sessionToPost)
      .then(res => {
         console.log(res)
      })
      .catch(err => {
			console.log('NOOOOO!!!!', err);
			dispatch({ type: SET_ERROR, payload: 'error posting session' });
		});
}

export const getDeckSessions = deckId => dispatch => {
   AxiosWithAuth()
      .get(`/decks/${deckId}/sessions`)
      .then(res => {
         console.log('getSessions:',res)
         dispatch({ type: GET_DECK_SESSIONS, payload: res.data})
      })
      .catch(err => {
			console.log('NOOOOO!!!!', err);
			dispatch({ type: SET_ERROR, payload: 'error getting sessions' });
		});
}

export const getMetrics = sessionData => dispatch => {
   AxiosWithAuth()
      .post('https://studium-ds.herokuapp.com/metrics', sessionData)
      .then(res => {
         dispatch({ type: GET_METRICS, payload: res.data})
         console.log('statsData:', res.data)
      })
      .catch(err => console.log('statsData-->', err))
}