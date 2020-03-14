import * as chalk from "chalk";

const log = console.log;

/**
 * Logs out a message or calls debug if env variable is set true.
 *
 * @category Utilities
 * @param {DebugLogMessage} message
 * @param [debug]
 */
export const logOutMessageOrDebug = ( message, debug ) => {
  
  if( process.env.REACT_APP_SHOW_LOGS === "true" ){
    
    if( process.env.NODE_ENV === "test" ){
      logToConsoleTest( message, debug );
    }else{
      logToBrowserTerminal( message );
    }
    
  }
};

export const logToBrowserTerminal = ( message ) => {
  
  if( message !== undefined ){
    let str = "";
    if( message.location ){
      str = `${ message.location }: `;
    }
    str += `${ message.message }`;
    let colotStr = "";
    if( message.logType === "info" ){
      colotStr = "background: blue;";
    }else if( message.logType === "error" ){
      colotStr = "background: red;";
    }
    colotStr += " font-size: large";
    log( `%c${ str }`, colotStr );
    
  }
};

const logToConsoleTest = ( message, debug ) => {
  if( debug !== false && debug !== undefined ){
    debug();
  }
  if( message !== undefined ){
    let str = "";
    if( message.location ){
      str = `${ message.location }: `;
    }
    str += `${ message.message }`;
    
    if( message.logType === "error" ){
      
      log( chalk.bgRed.bold( str ) );
    }else if( message.logType === "info" ){
      let blue = chalk.bgBlue( str );
      log( chalk.bgBlue( str ) );
    }else{
      log( str );
    }
  }
};

/**
 *
 * @param {string} message
 * @param {("error" | "info")} logType
 * @param {string} location
 * @return {DebugLogMessage}
 */
export const createMessage = ( message, logType = "error",
  location = "unknown" ) => {
  return { message, logType, location };
};

/**
 * @typedef DebugLogMessage
 * @property {string} message
 * @property {string} location
 * @property {("error" | "info")} logType
 */