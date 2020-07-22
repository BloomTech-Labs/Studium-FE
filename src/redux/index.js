import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { GET_USER, SET_ERROR, SET_USER_DECKS } from './actions';

const initialState = {
   user: {},
   error: '',
   userDecks: [],
}

const reducer = (state = initialState, action) => {
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
      default:
         return state;
   }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log('THIS IS THE STORE -->', store.getState()))
export default store