import React, { useEffect, useState } from "react";
import {
  createMessage, logOutMessageOrDebug,
} from "../utilities/debugLogger.js";
import { LOG_TYPES } from "../utilities/constants.js";

/**
 * Use Logger
 *
 * @description Custom hook for logging debug messages. Only logs messages
 * when env variable REACT_APP_SHOW_LOGS is set to 'true'
 * @function
 * @name useLogger
 * @param {string} name Name of the component or function to log info about.
 */
export const useLogger = ( name = "App" ) => {
  const [ location, setLocation ] = useState( name );
  
  useEffect( () => {
    if( name === "App" ){
      logOut(
        "You should think about passing in the location of the logs being" +
        " conducted to better provide debug assistance. App will be used" +
        " instead for the time.", "info" );
    }
    
  }, [ name ] );
  
  /**
   * @typedef LogInfo
   *
   * @description Logs info to the console with a blue background.
   * @function
   * @param {string} message
   */
  const logInfo = ( message ) => {
    logOut( message, LOG_TYPES.INFO );
  };
  
  /**
   * @typedef LogError
   *
   * @description Logs info to the console with a red background.
   * @function
   * @param {string} message
   */
  const logError = message => {
    logOut( message, LOG_TYPES.ERROR );
  };
  
  /**
   * @typedef LogWarning
   *
   * @description Logs a message to the console or browser with a yellow
   * background
   * @function
   * @param {string} message
   */
  const logWarning = message => {
    logOut( message, LOG_TYPES.WARNING );
  };
  
  /**
   * Log out a plain message with no  styling added.
   * @param message
   */
  const log = ( message ) => {
    logOut( message, LOG_TYPES.PLAIN );
  };
  
  /**
   * Log out a object to the browser.
   * @param object
   */
  const logObject = ( object ) => {
    logOut( object, LOG_TYPES.OBJECT );
  };
  
  /**
   * Log
   * @description Takes in the message string and the message type and calls
   * the debug logger creating the correct message object.
   * @function
   * @param {string} message
   * @param {logType} type
   */
  const logOut = ( message, type ) => {
    logOutMessageOrDebug( createMessage( message, type, location ) );
  };
  
  /**
   * @type Logger
   */
  const logger = {};
  logger.logInfo = logInfo;
  logger.logError = logError;
  logger.logObject = logObject;
  logger.logWarning = logWarning;
  logger.log = log;
  return logger;
  
};

/**
 * @typedef {object} Logger
 * @property {LogInfo} logInfo
 * @property{LogError} logError
 * @property{LogError} logObject
 * @property{LogError} logWarning
 * @property{LogError} log
 */