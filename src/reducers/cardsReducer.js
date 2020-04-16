import {
  GET_ALL_CARDS_FOR_DECK_FAIL,
  GET_ALL_CARDS_FOR_DECK_INIT,
  GET_ALL_CARDS_FOR_DECK_SUCCESS,
  CREATE_CARD_FAIL,
  CREATE_CARD_SUCCESS,
  CREATE_CARD_INIT,
  UPDATE_CARD_FAIL,
  UPDATE_CARD_SUCCESS,
  UPDATE_CARD_INIT,
  DELETE_CARD_FAIL,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_INIT,
} from '../actions/cardActions.js';

/**
 * @typedef {object} CardsState
 * @category Reducers
 * @property {Card[]} cards
 * @property {boolean} isLoading
 * @property {Error | null} error
 * @property {boolean} creatingCard
 * @property {boolean} updatingCard
 * @property {boolean} deletingCard
 */
const initialState = {
  cards: [],
  isLoading: false,
  error: null,
  creatingCard: false,
  updatingCard: false,
  deletingCard: false,
};

/**
 * @typedef  {object} Card
 * @property {number} card_id
 * @property {number} deck_id
 * @property {string} question
 * @property {string} answer
 * @property {string} [tags]
 * @property {string} [background]
 * @property {string} [text]
 * @property {string} [image_front]
 * @property {string} [image_back]
 *
 */

/**
 * Cards Reducer
 * @category Reducers
 *
 * @function
 * @name cardsReducer
 * @param {CardsState} state
 * @param {Action} action
 * @returns {CardsState} state
 */
export const cardsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'SET_INIT_STATE':
      if(
        action.payload &&
        action.payload.name &&
        action.payload.name.includes('cards') &&
        action.payload.value
      ){
        return action.payload.value;
      }
      return state;
    case GET_ALL_CARDS_FOR_DECK_INIT:
      return {...state, isLoading: true, error: null};
    case GET_ALL_CARDS_FOR_DECK_SUCCESS:
      return {
        ...state,
        cards: action.payload,
        isLoading: false,
        error: null,
      };
    case GET_ALL_CARDS_FOR_DECK_FAIL:
      return {...state, isLoading: false, error: action.payload};
    case CREATE_CARD_INIT:
      return {...state, creatingCard: true, error: null};
    case CREATE_CARD_SUCCESS:
      return {
        ...state,
        cards: [...state.cards, action.payload],
        creatingCard: false,
        error: null,
      };
    case CREATE_CARD_FAIL:
      return {...state, creatingCard: false, error: action.payload};
    case DELETE_CARD_INIT:
      return {...state, deletingCard: true, error: null};
    case DELETE_CARD_SUCCESS:
      return {
        ...state,
        cards: state.cards.filter(card => {
          return card.card_id !== action.payload;
        }),
        deletingCard: false,
        error: null,
      };
    case DELETE_CARD_FAIL:
      return {...state, deletingCard: false, error: action.payload};
    case UPDATE_CARD_INIT:
      return {...state, updatingCard: true, error: null};
    case UPDATE_CARD_SUCCESS:
      return {
        ...state,
        cards: state.cards.filter(card => {
          if(card.card_id === action.payload.card_id){
            return action.payload;
          }
          return card;
        }),
        updatingCard: false,
        error: null,
      };
    case UPDATE_CARD_FAIL:
      return {...state, updatingCard: false, error: action.payload};
    default:
      return state;
  }
};
