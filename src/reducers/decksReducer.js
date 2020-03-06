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
  UPDATING_DECK_START,
  UPDATING_DECK_SUCCESS,
  UPDATING_DECK_FAILURE,
  RETRIEVE_USER_DECKS_START,
  RETRIEVE_USER_DECKS_SUCCESS,
  RETRIEVE_USER_DECKS_FAILURE,
} from '../actions';

const initialState = {
  decks: [],
  fetchingDecks: false,
  errorDecksMessage: undefined,
};

export const deckReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_DECKS:
      return {
        ...state,
        fetchingDecks: true,
        errorDecksMessage: undefined,
      };
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
      return {
        ...state,
        fetchingDecks: true,
        errorDecksMessage: undefined,
      };
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
      return {
        ...state,
        fetchingDecks: true,
        errorDecksMessage: undefined,
      };
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

    //Edits single deck
    case UPDATING_DECK_START:
      return {
        ...state,
        fetchingDecks: true,
        errorDecksMessage: undefined,
      };
    case UPDATING_DECK_SUCCESS:
      return {
        ...state,
        fetchingDecks: false,
        decks: action.payload,
        errorDecksMessage: undefined,
      };
    case UPDATING_DECK_FAILURE:
      return {
        ...state,
        fetchingDecks: false,
        decks: [],
        errorDecksMessage: action.error,
      };

    // Retrieves all current User's decks
    case RETRIEVE_USER_DECKS_START:
      return {
        ...state,
        fetchingDecks: true,
        errorDecksMessage: undefined,
      };
    case RETRIEVE_USER_DECKS_SUCCESS:
      return {
        ...state,
        fetchingDecks: false,
        decks: action.payload,
        errorDecksMessage: undefined,
      };
    case RETRIEVE_USER_DECKS_FAILURE:
      return {
        ...state,
        fetchingDecks: false,
        decks: action.payload,
        errorDecksMessage: undefined,
      };
    default:
      return state;
  }
};
