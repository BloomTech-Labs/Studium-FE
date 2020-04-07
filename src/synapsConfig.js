import {DEBUG_LOG_SIZES, LOG_TYPES} from "./utilities/constants.js";

export const SYNAPS_CONFIG = {
  homepage: "https://production-lambda-synaps-fe.herokuapp.com/",
  
  // Web analytics settings
  analytics: {
    google: {trackingID: "UA-XXXXX-Y"},
  },
  
  // Deployment settings
  deployment: {
    repository: "https://github.com/kriasoft/react-app.git",
    branch: "gh-pages",
  },
  localStorageBasePath: "/storage/state/",
  useLocalStorageToStorePrevContext: false,
  localStorageContextBasePath: "/storage/context/",
  appsToDebbug: [
    "All",
  ],
  debugLogTextSize: DEBUG_LOG_SIZES.NORMAL,
  debugLogKeepGrouped: false,
  showLogsFromOtherPeople: true,
  debugLogLevel: LOG_TYPES.VERBOSE,
  debugError: null,
  groupLogsTogether: true,
  collapseLogGroups: false,
  useAppLogger: true,
  useTrace: true,
};

const empty = [
  "Storage Backup Middleware",
  "Styled Theming",
  "Theme",
  "Nav Bar",
  "App Hooks",
  "Use Hooks Init",
  "Use App View",
  "App View",
  "Use History",
  "Use App View",
  "Use Dimensions",
  "Use Hooks Init",
];