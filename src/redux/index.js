import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { GET_USERS, SET_ERROR, SET_ACTIVE_USER } from './actions';

const initialState = {
   user: [],
   error: '',
   activeUser: {},
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_USERS:
         return {
            ...state,
            users: action.payload
         }
      case SET_ERROR:
         return {
            ...state,
            error: action.payload
         }
      case SET_ACTIVE_USER:
         return {
            ...state,
            activeUser: action.payload
         }
      default:
         return state;
   }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => console.log('THIS IS THE STORE -->', store.getState()))
export default store