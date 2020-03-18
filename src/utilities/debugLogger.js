import chalk from "chalk";
import moment from "moment";
import { SYNAPS_CONFIG } from "../synapsConfig.js";
import { LOG_TYPES } from "./constants.js";

const log = console.log;
const debugTextSize = SYNAPS_CONFIG.debugLogTextSize;

/**
 * Logs out a message or calls debug if env variable is set true.
 *
 * @category Utilities
 * @param {DebugLogMessage} message
 * @param [debug]
 */

let currentGroup = null;
export const logOutMessageOrDebug = ( message, debug ) => {
  // if we were unable to load the config in the beginnig then we don't
  // handle any logging.
  if( SYNAPS_CONFIG.debugError && message.logType !== LOG_TYPES.ERROR ){
    return;
  }
  
  if( process.env.REACT_APP_SHOW_LOGS || message.logType === LOG_TYPES.ERROR ){
    
    if( !message.location ){
      return logToConsoleTest(
        createMessage( "You must provide debug logger with a" +
          " app location so debug logger can conditionally log info messages" +
          " from only the parts of the app that are being debugged. You will" +
          " also need to add your app location to the" +
          " REACT_APP_DEBUG_LOCATIONS array in the env variables.",
          LOG_TYPES.WARNING,
          "Debug Logger",
        ) );
    }
    groupConsole( message, debug );
  }
};

const groupConsole = ( message, debug ) => {
  if( SYNAPS_CONFIG.appsToDebbug.includes( message.location ) ||
    message.location === "Debug Logger" || message.location === "App" ){
    let colotStr = "background: #0C2545; color: white; padding: 5px 2px;";
    if( currentGroup === null ){
      currentGroup = message.location;
      console.groupCollapsed( `%c ${ currentGroup }`, colotStr );
    }else if( currentGroup !== message.location ){
      console.groupEnd( currentGroup );
      currentGroup = message.location;
      console.groupCollapsed( `%c ${ currentGroup }`, colotStr );
      
    }
    checkForAndLogOutObject( message, debug );
  }
};

/**
 * Check for and log out objects if the mesagee type is of object.
 * @param message
 * @param debug
 */
const checkForAndLogOutObject = ( message, debug ) => {
  
  if( message.logType === LOG_TYPES.OBJECT || message.logType === undefined ){
    console.groupCollapsed( "Object from " + message.location );
    if( message.logType === undefined ){
      console.dir( message );
    }else{
      console.dir( message.message );
    }
    console.groupEnd();
    return;
  }
  
  if( process.env.NODE_ENV === "test" ){
    logToConsoleTest( message, debug );
  }else{
    logToBrowserTerminal( message );
  }
  
};

/**
 * Log message to the browser terminal
 * @param message
 */
export const logToBrowserTerminal = ( message ) => {
  if( message !== undefined ){
    let str = "";
    str += `${ message.message }  --->  ${ moment().format( "LLL" ) }`;
    let colotStr = "";
    if( message.logType === LOG_TYPES.INFO ){
      colotStr = "background: #7AD7F0; color: black; padding: 5px 2px;";
    }else if( message.logType === LOG_TYPES.ERROR ){
      colotStr = "background: red;";
    }else if( message.logType === LOG_TYPES.WARNING ){
      colotStr = "background: yellow;";
    }
    colotStr += ` font-size: ${ debugTextSize }`;
    log( `%c${ str }`, colotStr );
    console.groupCollapsed( "Debug" );
    console.trace( "Stack trace" );
    console.groupEnd( "Debug" );
    
  }
};

/**
 * Log message to the console.
 * @param message
 * @param debug
 */
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
      }else if( message.logType === "warning" ){
        log( chalk.bgYellow( str ) );
      }else{
        log( str );
      }
    }
  }
;

/**
 *
 * @param {string} message
 * @param {LogType} logType
 * @param {string} location
 * @return {DebugLogMessage}
 */
export const createMessage = ( message, logType = LOG_TYPES.ERROR,
  location = "unknown" ) => {
  if( location === "unknown" ){
    logOutMessageOrDebug(
      createMessage( "You must provider a location if you" +
        " are trying to use the debug logger. Pass in message, logType, and" +
        " location into the create message function.", LOG_TYPES.WARNING,
        "Debug Logger",
      ) );
  }
  
  return { message, logType, location };
};

/**
 * @typedef DebugLogMessage
 * @property {string} message
 * @property {string} location
 * @property {LogType} logType
 */