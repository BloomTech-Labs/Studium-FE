/**
 * Create Action
 *
 * @function
 * @name action
 * @param {String} type
 * @param {*} [payload]
 * @returns {Action} - action for reducer
 */
export const action = (type, payload) => {
  if (payload) {
    
    return { type, payload };
  }
  
  return { type };
};

/**
 * Action for dispatch, goes to reducer.
 * @typedef {object} Action
 * @property {string} type  The type of action to be performed.
 * @property [any] payload  Data to be sent to the reducer.
 *
 */