/**
 * @typedef {number} LogType
 *
 */

/**
 * @typedef {object} LOG_TYPES
 * @param {logType} INFO
 * @param {logType} WARNING
 * @param {logType} ERROR
 * @param {logType} OBJECT
 */
export const LOG_TYPES = {
  VERBOSE: 1,
  INFO: 2,
  WARNING: 4,
  ERROR: 5,
  OBJECT: 6,
  PLAIN: 3,
};

/**
 * @typedef {string} DEBUG_LOG_SIZE
 *
 *
 */

/**
 * @typedef {object} DEBUG_LOG_SIZES
 * @param {DEBUG_LOG_SIZE} LARGE
 * @param {DEBUG_LOG_SIZE} MEDIUM
 * @param {DEBUG_LOG_SIZE} NORMAL
 * @param {DEBUG_LOG_SIZE} SMALL
 */
export const DEBUG_LOG_SIZES = {
  LARGE: "large",
  MEDIUM: "medium",
  NORMAL: "normal",
  SMALL: "small",
};

