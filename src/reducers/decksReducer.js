import {
  GETTING_DECKS,
  RECEIVE_DECKS,
  RECEIVE_DECKS_FAIL,
  POSTING_DECKS_START,
  POSTING_DECKS_SUCCESS 
} from '../actions';

const initialState = {
  decks: [],
  fetchingDecks: false,
  errorDecksMessage: undefined,
};

export const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_DECKS:
      return {...state, fetchingDecks: true, errorDecksMessage: undefined};
    case RECEIVE_DECKS:
      return {
        ...state,
        fetchingDecks: false,
        decks: action.payload,
        errorDecksMessage: undefined,
      };
    case RECEIVE_DECKS_FAIL:
      return {
        ...state,
        fetchingDecks: false,
        decks: [],
        errorDecksMessage: action.error,
      };

    // Creates a new deck
    case POSTING_DECKS_START:
      return {...state, fetchingDecks: true, errorDecksMessage: undefined};
    case POSTING_DECKS_SUCCESS:
    return {...state, iFetching: false, decks: action.payload, errorDecksMessage: undefined};
    default:
      return state;
  }
};
