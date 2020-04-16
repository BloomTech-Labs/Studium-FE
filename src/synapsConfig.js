import {DEBUG_LOG_SIZES, LOG_TYPES} from './utilities/constants.js';

export const SYNAPS_CONFIG = {
  
  localStorageBasePath: '/storage/state/',
  useLocalStorageToStorePrevContext: false,
  localStorageContextBasePath: '/storage/context/',
  appsToDebbug: [],
  debugLogTextSize: DEBUG_LOG_SIZES.NORMAL,
  debugLogKeepGrouped: false,
  showLogsFromOtherPeople: true,
  debugLogLevel: LOG_TYPES.VERBOSE,
  debugError: null,
  groupLogsTogether: false,
  collapseLogGroups: false,
  useTrace: false,
};

const empty = [
  'Storage Backup Middleware',
  'Styled Theming',
  'Theme',
  'Nav Bar',
  'App Hooks',
  'Use Hooks Init',
  'Use App View',
  'App View',
  'Use History',
  'Use App View',
  'Use Dimensions',
  'Use Hooks Init',
];