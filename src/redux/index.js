import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { GET_USER, SET_ERROR, SET_USER_DECKS, RESET_USER_DECKS, LOGOUT, POST_NEW_DECK, SET_CARDS, POST_NEW_CARD, SET_EDITED_CARD, EDIT_CARD, SET_EDITED_DECK, EDIT_DECK } from './actions';

const initialState = {
   user: {},
   error: '',
   userDecks: [],
   deckCards: [],
   cardBeingEdited: {},
   deckBeingEdited: {},
}

const rootReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_USER:
         return {
            ...state,
            user: action.payload
         }
      case SET_ERROR:
         return {
            ...state,
            error: action.payload
         }
      case SET_USER_DECKS:
         return {
            ...state,
            userDecks: action.payload
         }
      case RESET_USER_DECKS:
         const updatedUserDecks = state.userDecks.filter(deck => deck.id !== action.payload.id)
         return {
            ...state,
            userDecks: [...updatedUserDecks, action.payload]
         }
      case SET_CARDS:
         return {
            ...state,
            deckCards: action.payload
         }
      case POST_NEW_CARD:
         return {
            ...state,
            deckCards: [...state.deckCards, action.payload]
         }
      case SET_EDITED_CARD:
         return {
            ...state,
            cardBeingEdited: action.payload
         }
      case EDIT_CARD:
         return {
            ...state,
            cardBeingEdited: {}
         }
      case POST_NEW_DECK:
         return {
            ...state,
            userDecks: [...state.userDecks, action.payload]
         }
      case SET_EDITED_DECK:
         return {
            ...state,
            deckBeingEdited: action.payload
         }
      case EDIT_DECK:
         return {
            ...state,
            deckBeingEdited: {}
         }
      case LOGOUT:
         return {
            user: {},
            error:'',
            userDecks: [],
         }
      default:
         return state;
   }
}

const persistConfig = {
   key: 'rootReducer',
   storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)
store.subscribe(() => console.log('THIS IS THE STORE -->', store.getState()))
export { store, persistor }