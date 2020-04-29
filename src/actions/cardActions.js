import {createAxiosAuth} from '../utilities/createAxios.js';
import {action} from './action';

export const GET_ALL_CARDS_FOR_DECK_SUCCESS = 'GET_ALL_CARDS_FOR_DECK_SUCCESS';
export const GET_ALL_CARDS_FOR_DECK_INIT = 'GET_ALL_CARDS_FOR_DECK_INIT';
export const GET_ALL_CARDS_FOR_DECK_FAIL = 'GET_ALL_CARDS_FOR_DECK_FAIL';

/**
 * Get all cards for a deck.
 * @category Actions
 * @param {number} deckId
 * @param {string} userUid
 * @returns {function(*): Promise<T>}
 */
export const getAllCardsForDeck = (deckId, userUid) => dispatch => {
  dispatch(action(GET_ALL_CARDS_FOR_DECK_INIT));
  return createAxiosAuth(userUid)
    .get(`/api/cards/from/deck/${deckId}`)
    .then(res => {
      dispatch(action(GET_ALL_CARDS_FOR_DECK_SUCCESS, res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(action(GET_ALL_CARDS_FOR_DECK_FAIL, err));
    });
};

export const CREATE_CARD_INIT = 'CREATE_CARD_INIT';
export const CREATE_CARD_SUCCESS = 'CREATE_CARD_SUCCESS';
export const CREATE_CARD_FAIL = 'CREATE_CARD_FAIL';

/**
 * Create Card
 * @category Actions
 * @param {Card} card
 * @param {string} uid
 * @returns {function(*): PromiseLike<any> | Promise<any> | *}
 */
export const createCard = (card, uid) => dispatch => {

  dispatch(action(CREATE_CARD_INIT));

  return createAxiosAuth(uid).post('/api/cards', card).then(res => {
    dispatch(action(CREATE_CARD_SUCCESS, res.data));
  }).catch(err => {
    console.log(err);
    dispatch(action(CREATE_CARD_FAIL, err));
  });
};

export const UPDATE_CARD_INIT = 'UPDATE_CARD_INIT';
export const UPDATE_CARD_SUCCESS = 'UPDATE_CARD_SUCCESS';
export const UPDATE_CARD_FAIL = 'UPDATE_CARD_FAIL';

/**
 * Update Card
 * @category Actions
 * @param {Card} card
 * @param {string} uid
 * @returns {function(*): PromiseLike<any> | Promise<any> | *}
 */
export const updateCard = (card, uid) => dispatch => {
  dispatch(action(UPDATE_CARD_INIT));

  return createAxiosAuth(uid)
    .put(`/api/cards/${card.card_id}`, card)
    .then(res => {
      dispatch(action(UPDATE_CARD_SUCCESS, res.data));
    })
    .catch(err => {
      console.log(err);
      dispatch(action(UPDATE_CARD_FAIL, err));
    });
};

export const DELETE_CARD_INIT = 'DELETE_CARD_INIT';
export const DELETE_CARD_SUCCESS = 'DELETE_CARD_SUCCESS';
export const DELETE_CARD_FAIL = 'DELETE_CARD_FAIL';

/**
 * Delete Card
 * @category Actions
 * @param {Card} card
 * @param {string} uid
 * @returns {function(*): PromiseLike<any> | Promise<any> | *}
 */
export const deleteCard = (card, uid) => dispatch => {

  dispatch(action(DELETE_CARD_INIT));

  return createAxiosAuth(uid)
    .put(`/api/cards/${card.card_id}`)
    .then(res => {

  return createAxiosAuth(uid).delete(`/api/cards/${card.card_id}`).then(
    res => {
      dispatch(action(DELETE_CARD_SUCCESS, card.card_id));
    })
    .catch(err => {
      console.log(err);
      dispatch(action(DELETE_CARD_FAIL, err));
    });
};
