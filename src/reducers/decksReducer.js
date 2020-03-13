import {
  RETRIEVE_DECKS_START,
  RETRIEVE_DECKS_SUCCESS,
  RETRIEVE_DECKS_FAILURE,
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
  RETRIEVE_DECK_START,
  RETRIEVE_DECK_SUCCESS,
  RETRIEVE_DECK_FAILURE,
} from '../actions';

/**
 * @typedef DecksState
 * @property {} decks
 * @property {} fetchingDecks
 * @property {} errorDecksMessage
 *
 */
const initialState = {
  decks: [],
  fetchingDecks: false,
  errorDecksMessage: undefined,
};

export const decksReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_DECKS_START:
      return {
        ...state,
        fetchingDecks: true,
        errorDecksMessage: undefined,
      };
    case RETRIEVE_DECKS_SUCCESS:
      return {
        ...state,
        fetchingDecks: false,
        decks: action.payload,
        errorDecksMessage: undefined,
      };
    case RETRIEVE_DECKS_FAILURE:
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
        decks: [],
        errorDecksMessage: action.error,
      };
    
    //Retrieve single deck
    case RETRIEVE_DECK_START:
      return {
        ...state,
        fetchingDecks: true,
        errorDecksMessage: undefined,
      };
    case RETRIEVE_DECK_SUCCESS:
      return {
        ...state,
        fetchingDecks: false,
        errorDecksMessage: undefined,
      };
    case RETRIEVE_DECK_FAILURE:
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
