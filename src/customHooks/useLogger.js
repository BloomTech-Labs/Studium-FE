import React, { useEffect, useState } from "react";
import {
  createMessage, logOutMessageOrDebug,
} from "../utilities/debugLogger.js";

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
      log( "You should think about passing in the location of the logs being" +
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
    log( message, "info" );
  };
  
  /**
   * @typedef LogError
   *
   * @description Logs info to the console with a red background.
   * @function
   * @param {string} message
   */
  const logError = message => {
    log( message, "error" );
  };
  
  /**
   * Log
   * @description Takes in the message string and the message type and calls
   * the debug logger creating the correct message object.
   * @function
   * @param {string} message
   * @param {('info' | "error")} type
   */
  const log = ( message, type ) => {
    logOutMessageOrDebug( createMessage( message, type, location ) );
  };
  
  /**
   * @type Logger
   */
  const logger = {};
  logger.logInfo = logInfo;
  logger.logError = logError;
  
  return logger;
  
};

/**
 * @typedef {object} Logger
 * @property {LogInfo} logInfo
 * @property{LogError} logError
 */