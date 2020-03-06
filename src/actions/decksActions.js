import {createAxiosAuth} from '../utilities/createAxios';

// Retrieves all public decks
export const GETTING_DECKS = 'GETTING_DECKS';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECKS_FAIL = 'RECEIVE_DECKS_FAIL';

export const getDecks = (uid, dispatch) => {
  dispatch({type: GETTING_DECKS});
  createAxiosAuth(uid)
    .get('/decks')
    .then(res => {
      debugger;
    console.log("getDecks -> res", res)        
      dispatch({type: RECEIVE_DECKS, payload: res.data});
    })
    .catch(error => {
      debugger;
      dispatch({
        type: RECEIVE_DECKS_FAIL,
        error: 'Failed to receive your decks.',
      });
    });
};

// Creates a new deck
export const POSTING_DECKS_START = 'POSTING_DECKS_START';
export const POSTING_DECKS_SUCCESS = 'POSTING_DECKS_SUCCESS';
export const POSTING_DECKS_FAILURE = 'POSTING_DECKS_SUCCESS';

export const createDecks = (uid, dispatch) => {
    dispatch({type: POSTING_DECKS_START});
    createAxiosAuth(uid)
    .get('/dicks')
    .then(res => {
        dispatch({type: POSTING_DECKS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({
        type: POSTING_DECKS_FAILURE,
        error: ''
      })

    })
}
