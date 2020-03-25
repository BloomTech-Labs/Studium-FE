import React, {useState} from "react";

/**
 * @typedef {(APP_PATHS.SIGN_IN_PATH | APP_PATHS.SIGN_UP_PATH |
 *   APP_PATHS.DASHBOARD_PATH | APP_PATHS.CREATE_DECK_PATH |
 *   APP_PATHS.PREVIEW_DECK_PATH | APP_PATHS.LANDING_PAGE )} APP_PATH
 */

/**
 * usePaths custom hook.
 * @typedef {function} UsePaths
 */
export const usePaths = () => {
  const [appPaths, setPaths] = useState([]);
  
  const addPaths = (paths) => {
    setPaths(paths);
  };
  
  return {addPaths, appPaths};
  
};