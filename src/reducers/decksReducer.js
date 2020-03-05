import {
    GETTING_DECKS,
    RECEIVE_DECKS,
    RECEIVE_DECKS_FAIL
} from '../actions'

const initialState = {
 decks:  [],
 fetchingDecks: false,
 errorDecksMessage: undefined
}

export const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_DECKS: 
        return {...state, fetchingDecks: true, errorDecksMessage: undefined}
        case RECEIVE_DECKS: 
        return {...state, fetchingDecks: false, decks: action.payload, errorDecksMessage: undefined}
        case RECEIVE_DECKS_FAIL: 
        return {...state, fetchingDecks: false, decks: [], errorDecksMessage: action.error}
        
        default: 
        return state;
        }
}