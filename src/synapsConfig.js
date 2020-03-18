import { DEBUG_LOG_SIZES } from "./utilities/constants.js";

export const SYNAPS_CONFIG = {
  
  homepage: "https://production-lambda-synaps-fe.herokuapp.com/",
  
  // Web analytics settings
  analytics: {
    google: { trackingID: "UA-XXXXX-Y" },
  },
  
  // Deployment settings
  deployment: {
    repository: "https://github.com/kriasoft/react-app.git",
    branch: "gh-pages",
  },
  localStorageBasePath: "/storage/state/",
  useLocalStorageToStorePrevContext: true,
  localStorageContextBasePath: "/storage/context/",
  appsToDebbug: [
    "Redux Logger", "Storage Backup Middleware", "Styled Theming", "Theme",
    "Nav Bar", "App Hooks",
    "Use Hooks Init", "App View", "Use App View", "Use Dimensions",
    "App Provider", "Use Hooks Init",
  ],
  debugLogTextSize: DEBUG_LOG_SIZES.NORMAL,
  debugError: null,
};

