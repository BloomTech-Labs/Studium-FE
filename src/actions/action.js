//May need to add axios import in future.

/**
 * @typedef Action
 * @property {string} type  The type of action to be performed.
 * @property {any} payload  Data to be sent to the reducer.
 */

/**
 * Create Action
 *
 * @function
 * @param {String} type
 * @param {*} [payload]
 * @returns {{type: String}} action - action for reducer
 */
export const action = (type, payload) => {
  if (payload) {
    return { type, payload };
  }
  return { type };
};
