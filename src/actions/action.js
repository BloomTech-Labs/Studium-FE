//May need to add axios import in future.

/**
 * Create Action
 *
 * @function
 * @param {String} type
 * @param {*} [payload]
 * @returns {Action} action - action for reducer
 */
export const action = ( type, payload ) => {
  if( payload ){
    return { type, payload };
  }
  return { type };
};