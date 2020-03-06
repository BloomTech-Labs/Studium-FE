import {createAxiosAuth} from '../utilities/createAxios';

// Retrieves all public decks
export const GETTING_DECKS = 'GETTING_DECKS';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const RECEIVE_DECKS_FAIL = 'RECEIVE_DECKS_FAIL';

export const getDecks = (uid, dispatch) => {
  dispatch({type: GETTING_DECKS});
  createAxiosAuth(uid)
    .get('/api/decks')
    .then(res => {
      debugger;
      console.log('getDecks -> res', res);
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
export const POSTING_DECK_START = 'POSTING_DECK_START';
export const POSTING_DECK_SUCCESS = 'POSTING_DECK_SUCCESS';
export const POSTING_DECK_FAILURE = 'POSTING_DECK_FAILURE';

export const postDeck = (uid, dispatch) => {
  dispatch({type: POSTING_DECK_START});
  createAxiosAuth(uid)
    .get('/api/decks')
    .then(res => {
      dispatch({type: POSTING_DECK_SUCCESS, payload: res.data});
    })
    .catch(error => {
      dispatch({
        type: POSTING_DECK_FAILURE,
        error: 'Failed to post your deck',
      });
    });
};

//Deletes a single deck
export const DELETING_DECK_START = 'DELETING_DECK_START';
export const DELETING_DECK_SUCCESS = 'DELETING_DECK_SUCCESS';
export const DELETING_DECK_FAILURE = 'DELETING_DECK_FAILURE';

export const deleteDeck = (uid, dispatch) => {
  dispatch({type: DELETING_DECK_START});
  createAxiosAuth(uid)
  .get('/api/dicks/:id')
  .then(res => {
    dispatch({type: DELETING_DECK_SUCCESS, payload: res.data});
  })
  .catch(error => {
    dispatch({
      type: DELETING_DECK_FAILURE, 
      error: 'Failed to delete you deck.'
    })
  })
  
}