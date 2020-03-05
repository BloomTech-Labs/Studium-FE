import {createAxiosAuth} from '../utilities/createAxios'

// Retrieves all public decks
export const GETTING_DECKS = "GETTING_DECKS";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const RECEIVE_DECKS_FAIL = "RECEIVE_DECKS_FAIL";

export const getDecks = (uid, dispatch) => {
    dispatch({type: GETTING_DECKS})
    createAxiosAuth(uid).get('/decks').then(res => {
    dispatch({type: RECEIVE_DECKS, payload: res.data})
    }).catch(error => {
        dispatch({type: RECEIVE_DECKS_FAIL, error: "Failed to receive your decks."})
    })
}


