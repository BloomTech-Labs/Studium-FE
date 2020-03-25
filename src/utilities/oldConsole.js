import {SYNAPS_CONFIG} from "../synapsConfig.js";
import {LOG_TYPES} from "./constants.js";

window.oldConsole = window.console;

class AppLogger{
  /**
   * @constructor
   */
  constructor(){
    this.count = 0;
    this.lastLog = null;
    this.storage = [];
    this.eventTimer = null;
    this.console = window.oldConsole;
    this.printResults = false;
    this.group = null;
    this.groupLogs = SYNAPS_CONFIG.groupLogsTogether;
    this.collapseGroups = SYNAPS_CONFIG.collapseLogGroups;
    this.debugLogLevel = SYNAPS_CONFIG.debugLogLevel;
    this.appToDebug = SYNAPS_CONFIG.appsToDebbug;
    this.loggers = {};
    this.colorString = {
      [LOG_TYPES.VERBOSE]: "padding: 2px 20px; border-radius: 5px;",
      [LOG_TYPES.INFO]: "background: #7AD7F0; color: black; padding: 5px" +
      " 20px; border-radius: 2px;",
      [LOG_TYPES.WARNING]: "background: #fde5b5; color: black; padding: 5px" +
      " 20px; border-radius: 2px;",
      [LOG_TYPES.ERROR]: "background: #f39090; color: black; padding: 5px" +
      " 20px; border-radius: 2px;",
      [LOG_TYPES.OBJECT]: "background: rgb(76, 182, 159); padding: 5px 20px;" +
      " border-radius: 2px;",
    };
    
    this.getAppLogs = () => {
      return this.storage;
    };
    
    this.attemptToLog = async(debugName, logType, message, object) => {
      
      if(SYNAPS_CONFIG.useAppLogger){
        this.storage.push({debugName, logType, message, object});
      }
      
      if(logType >= LOG_TYPES.WARNING){
        this.logNow(debugName, logType, message, object);
        
      }else{
        // We are
        // check if log level is high enough and the if the component is listed
        // in the debug apps.
        if(this.debugLogLevel <= logType){
          if(this.appToDebug.includes("All") ||
            this.appToDebug.includes(debugName)){
            this.logNow(debugName, logType, message, object);
            
          }
        }
        
      }
    };
    
    this.sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    };
    
    /**
     * Gets a new logger for a react component.
     * @param debugName
     * @return {Loger|*}
     */
    this.getLogger = (debugName) => {
      if(this.loggers[debugName]){
        return this.loggers[debugName];
      }else{
        const logger = new Loger(debugName, this.attemptToLog);
        this.loggers[debugName] = logger;
        return logger;
      }
    };
    
    /**
     * Log message to the console.
     * @param debugName
     * @param logType
     * @param message
     */
    this.logMessage = (debugName, logType, message) => {
      let str = "";
      if(!this.groupLogs){
        str += debugName + ": ";
      }
      str += message;
      if(logType === LOG_TYPES.VERBOSE){
      
      }
      this.console.log("%c" + str, this.colorString[logType] +
        ` text-size: ${SYNAPS_CONFIG.debugLogTextSize}`);
    };
    
    /**
     * closes a group in the console.
     * @function
     */
    this.closeGroup = () => {
      if(this.group !== null){
        this.console.groupEnd();
        this.group = null;
      }
    };
    
    /**
     * Opens a new group
     * @param group
     */
    this.openGroup = (group) => {
      if(this.collapseGroups){
        this.console.groupCollapsed("%c" + group,
          this.colorString[LOG_TYPES.WARNING] +
          ` text-size: ${SYNAPS_CONFIG.debugLogTextSize}`,
        );
      }else{
        this.console.group("%c" + group,
          this.colorString[LOG_TYPES.WARNING] +
          ` text-size: ${SYNAPS_CONFIG.debugLogTextSize}`,
        );
      }
      this.group = group;
    };
    
    this.checkGroup = (groupName) => {
      if(this.groupLogs){
        if(this.group !== groupName){
          this.closeGroup();
          this.openGroup(groupName);
        }
      }
    };
    
    this.logObject = (logType, message, object, debugName) => {
      if(message){
        let str = "";
        if(!SYNAPS_CONFIG.groupLogsTogether){
          str += debugName + " --> ";
          this.console.log("%c" + str + message,
            this.colorString[LOG_TYPES.INFO] +
            ` text-size: ${SYNAPS_CONFIG.debugLogTextSize}`,
          );
        }else{
          this.console.groupCollapsed("%c" + str + message,
            this.colorString[LOG_TYPES.INFO] +
            ` text-size: ${SYNAPS_CONFIG.debugLogTextSize}`,
          );
        }
      }
      this.console.dir(object);
      
      if(message){
        this.console.groupEnd();
      }
    };
    
    this.logNow = (debugName, logType, message, object) => {
      this.checkGroup(debugName);
      if(logType === LOG_TYPES.OBJECT){
        this.logObject(logType, message, object, debugName);
      }else{
        this.logMessage(debugName, logType, message);
      }
    };
    
  };
  
}

/**
 * Loger
 * @class
 * @param {string} debugname
 * @param {function} logToConsole
 */
class Loger{
  constructor(debugName, logToConsole){
    
    this.debugName = debugName;
    this.consoleLog = logToConsole;
    this.LOG_TYPES = LOG_TYPES;
    
    this.log = (logType, message, object = null) => {
      this.consoleLog(this.debugName, logType, message, object);
    };
    
    this.logInfo = (message) => {
      this.log(LOG_TYPES.INFO, message);
    };
    
    this.logVerbose = (message) => {
      this.log(this.LOG_TYPES.VERBOSE, message);
    };
    
    this.logError = (message) => {
      this.log(this.LOG_TYPES.ERROR, message);
    };
    
    this.logWarning = (message) => {
      this.log(this.LOG_TYPES.WARNING, message);
    };
    
    this.logObject = (object) => {
      this.log(this.LOG_TYPES.OBJECT, null, object);
    };
    
    /**
     * Logs out a message followed by a object.
     * @param object
     * @param message
     */
    this.logObjectWithMessage = (object, message) => {
      this.log(this.LOG_TYPES.OBJECT, message, object);
    };
  }
  
}

const appLogger = new AppLogger();
export const reduxLogger = appLogger.getLogger("Redux Logger");
export const storageBackupDebugger = appLogger.getLogger(
  "Storage Backup Middleware");

const logOtherReports = SYNAPS_CONFIG.showLogsFromOtherPeople;

window.console = {
  
  log: (message, ...optionalParams) => {
    
    if(logOtherReports){
      appLogger.closeGroup();
      appLogger.console.log(message, ...optionalParams);
      SYNAPS_CONFIG.useTrace && appLogger.console.trace();
      
    }
    
  },
  info: (message, ...optionalParams) => {
    if(logOtherReports){
      appLogger.closeGroup();
      appLogger.console.info(message, ...optionalParams);
    }
    
  },
  warn: (message, ...optionalParams) => {
    if(logOtherReports){
      appLogger.closeGroup();
      appLogger.console.warn(message, ...optionalParams);
    }
    
  },
  error: (message, ...optionalParams) => {
    if(logOtherReports){
      appLogger.closeGroup();
      appLogger.console.error(message, ...optionalParams);
    }
    
  },
  debug: (message, ...optionalParams) => {
    if(logOtherReports){
      appLogger.closeGroup();
      appLogger.console.debug(message, ...optionalParams);
    }
  },
  
  dir: (value, ...optionalParams) => {
    appLogger.closeGroup();
    appLogger.console.dir(value, ...optionalParams);
  },
  
  dirxml: (value) => {
    appLogger.closeGroup();
    appLogger.console.dirxml(value);
  },
  
  table: (...tabularData) => {
    appLogger.closeGroup();
    appLogger.console.table(...tabularData);
  },
  
  trace: () => {
    appLogger.closeGroup();
    appLogger.console.trace();
  },
  
  group: (groupTitle, ...optionalParams) => {
    appLogger.closeGroup();
    appLogger.console.group(groupTitle, ...optionalParams);
  },
  
  groupEnd: () => {
    appLogger.closeGroup();
    appLogger.console.groupEnd();
  },
  
  groupCollapsed: (groupTitle, ...optionalParams) => {
    appLogger.console.groupCollapsed(groupTitle, ...optionalParams);
  },
  
  clear: () => {
    appLogger.closeGroup();
    appLogger.console.clear();
  },
  
  count: (label) => {
    appLogger.closeGroup();
    appLogger.console.count(label);
  },
  
  countReset: () => {
    appLogger.closeGroup();
    appLogger.console.countReset();
    
  },
  
  assert: (condition, message, ...data) => {
    appLogger.closeGroup();
    appLogger.console.assert(condition, message, ...data);
    
  },
  
  profileEnd: (reportName) => {
    appLogger.closeGroup();
    appLogger.console.profileEnd(reportName);
  },
  
  profile: (reportName) => {
    appLogger.closeGroup();
    appLogger.console.profile(reportName);
  },
  
  time: (label) => {
    appLogger.closeGroup();
    appLogger.console.time(label);
  },
  
  timeEnd: (label) => {
    appLogger.closeGroup();
    appLogger.console.timeEnd(label);
  },
  
  timeStamp: (label) => {
    appLogger.closeGroup();
    appLogger.console.timeStamp(label);
  },
  
  timeline: (label) => {
    appLogger.closeGroup();
    appLogger.console.timeline(label);
  },
  
  timelineEnd: (label) => {
    appLogger.closeGroup();
    appLogger.console.timelineEnd(label);
  },
  
  markTimeline: (label) => {
    appLogger.closeGroup();
    appLogger.console.markTimeline(label);
  },
  
  exception: () => {
    appLogger.closeGroup();
    appLogger.console.exception();
  },
  
  context: () => {
    appLogger.closeGroup();
    appLogger.console.context();
    
  },
  
  memory: () => {
    appLogger.closeGroup();
    appLogger.console.memory();
    
  },
  
  reactStack: (e) => {
    appLogger.closeGroup();
    appLogger.console.reactStack(e);
  },
  
  reactStackEnd: (e) => {
    appLogger.closeGroup();
    appLogger.console.reactStackEnd(e);
  },
  
};

export default appLogger;