/**
 * Logs out a message or calls debug if env variable is set true.
 *
 * @category Utilities
 * @param message
 * @param debug
 */
export const logOutMessageOrDebug = ( { message, debug } ) => {
  if( process.env.SHOW_LOGS === 'true' ){
    if( debug !== false ){
      debug();
    }
    if( message !== undefined ){
      console.log( message );
    }
  }
};