import {createAxiosAuth} from '../utilities/createAxios';

// Retrieves all public decks
export const RETRIEVE_DECKS_START = 'RETRIEVE_DECKS_START';
export const RETRIEVE_DECKS_SUCCESS = 'RETRIEVE_USER_DECKS_SUCCESS';
export const RETRIEVE_DECKS_FAILURE = 'RETRIEVE_DECKS_FAILURE';

export const getDecks = uid => dispatch => {
  dispatch({type: RETRIEVE_DECKS_START});
  createAxiosAuth(uid)
    .get('/api/decks')
    .then(res => {
      dispatch({type: RETRIEVE_DECKS_SUCCESS, payload: res.data});
    })
    .catch(error => {
      dispatch({
        type: RETRIEVE_DECKS_FAILURE,
        error: 'Failed to receive your decks.',
      });
    });
};

// Creates a new deck
export const POSTING_DECK_START = 'POSTING_DECK_START';
export const POSTING_DECK_SUCCESS = 'POSTING_DECK_SUCCESS';
export const POSTING_DECK_FAILURE = 'POSTING_DECK_FAILURE';

export const postDeck = (uid, newDeck) => dispatch => {
  dispatch({type: POSTING_DECK_START});
  createAxiosAuth(uid)
    .post('/api/decks', newDeck)
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

export const deleteDeck = (uid, deck_id) => dispatch => {
  dispatch({type: DELETING_DECK_START});
  createAxiosAuth(uid)
    .delete(`/api/decks/${deck_id}`)
    .then(res => {
      dispatch({type: DELETING_DECK_SUCCESS, payload: res.data});
    })
    .catch(error => {
      dispatch({
        type: DELETING_DECK_FAILURE,
        error: 'Failed to delete you deck.',
      });
    });
};

//Edits single deck
export const UPDATING_DECK_START = 'UPDATING_DECK_START';
export const UPDATING_DECK_SUCCESS = 'UPDATING_DECK_SUCCESS';
export const UPDATING_DECK_FAILURE = 'UPDATING_DECK_FAILURE';

export const updateDeck = (uid, deck_id, changes) => dispatch => {
  dispatch({type: UPDATING_DECK_START});
  createAxiosAuth(uid)
    .update(`/api/decks/${deck_id}`, changes)
    .then(res => {
      dispatch({type: UPDATING_DECK_SUCCESS, payload: res.data});
    })
    .catch(error => {
      dispatch({
        type: UPDATING_DECK_FAILURE,
        error: 'Failed to update you decks',
      });
    });
};

//Retrieves all current User's decks
export const RETRIEVE_USER_DECKS_START = 'RETRIEVE_USER_DECKS_START';
export const RETRIEVE_USER_DECKS_SUCCESS = 'RETRIEVE_USER_DECKS_SUCCESS';
export const RETRIEVE_USER_DECKS_FAILURE = 'RETRIEVE_USER_DECKS_FAILURE';

export const getUserDecks = uid => dispatch => {
  console.log('|||getting user Decks|||');

  dispatch({type: RETRIEVE_USER_DECKS_START});
  createAxiosAuth(uid)
    .get('/api/decks/user')
    .then(res => {
      dispatch({type: RETRIEVE_USER_DECKS_SUCCESS, payload: res.data});
    })
    .catch(error => {
      dispatch({
        type: RETRIEVE_USER_DECKS_FAILURE,
        error: 'Failed to retrieve all your decks.',
      });
    });
};

//Retrieve single deck
export const RETRIEVE_DECK_START = 'RETRIEVE_DECK_START';
export const RETRIEVE_DECK_SUCCESS = 'RETRIEVE_DECK_SUCCESS';
export const RETRIEVE_DECK_FAILURE = 'RETRIEVE_DECK_FAILURE';

export const getDeck = uid => dispatch => {
  dispatch({type: RETRIEVE_DECK_START});
  createAxiosAuth(uid)
    .get('/api/decks/:id')
    .then(res => {
      dispatch({type: RETRIEVE_DECK_SUCCESS, payload: res.data});
    })
    .catch(error => {
      dispatch({
        type: RETRIEVE_DECK_FAILURE,
        error: 'Failed to retrieve you deck.',
      });
    });
};
