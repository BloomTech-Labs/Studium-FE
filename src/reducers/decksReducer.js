import {
  GETTING_DECKS,
  RECEIVE_DECKS,
  RECEIVE_DECKS_FAIL,
  POSTING_DECK_START,
  POSTING_DECK_SUCCESS,
  POSTING_DECK_FAILURE,
  DELETING_DECK_START,
  DELETING_DECK_SUCCESS,
  DELETING_DECK_FAILURE,
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
    case POSTING_DECK_START:
      return {...state, fetchingDecks: true, errorDecksMessage: undefined};
    case POSTING_DECK_SUCCESS:
      return {
        ...state,
        fetchingDecks: false,
        decks: action.payload,
        errorDecksMessage: undefined,
      };
    case POSTING_DECK_FAILURE:
      return {
        ...state,
        fetchingDecks: false,
        decks: [],
        errorDecksMessage: action.error,
      };

    // Deletes a single deck
    case DELETING_DECK_START:
      return {...state, fetchingDecks: true, errorDecksMessage: undefined};
    case DELETING_DECK_SUCCESS:
      return {
        state,
        fetchingDecks: false,
        decks: action.payload,
        errorDecksMessage: undefined,
      };
    case DELETING_DECK_FAILURE:
      return {
        ...state,
        fetchingDecks: false,
        decks: [],
        errorDecksMessage: action.error,
      };
    default:
      return state;
  }
};
