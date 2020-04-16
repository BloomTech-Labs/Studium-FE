import {SYNAPS_CONFIG} from '../synapsConfig.js';
import {LOG_TYPES} from './constants.js';

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
    this.showLogsFromOthers = SYNAPS_CONFIG.showLogsFromOtherPeople;
    this.colorString = {
      [LOG_TYPES.VERBOSE]: 'padding: 2px 20px; border-radius: 5px;',
      [LOG_TYPES.INFO]: 'background: #7AD7F0; color: black; padding: 5px' +
      ' 20px; border-radius: 2px;',
      [LOG_TYPES.WARNING]: 'background: #fde5b5; color: black; padding: 5px' +
      ' 20px; border-radius: 2px;',
      [LOG_TYPES.ERROR]: 'background: #f39090; color: black; padding: 5px' +
      ' 20px; border-radius: 2px;',
      [LOG_TYPES.OBJECT]: 'background: rgb(76, 182, 159); padding: 5px 20px;' +
      ' border-radius: 2px;',
    };
    
    this.getAppLogs = () => {
      return this.storage;
    };
    
    this.logMessageFromOthers = (message, type, optionalParams) => {
      if(this.showLogsFromOthers){
        this.checkGroup('others');
        this.console[type](message, ...optionalParams);
      }
      
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
          if(this.appToDebug.includes('All') ||
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
      let str = '';
      if(!this.groupLogs){
        str += debugName + ': ';
      }
      str += message;
      if(logType === LOG_TYPES.VERBOSE){
      
      }
      this.console.log('%c' + str, this.colorString[logType] +
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
        this.console.groupCollapsed('%c' + group,
          this.colorString[LOG_TYPES.WARNING] +
          ` text-size: ${SYNAPS_CONFIG.debugLogTextSize}`,
        );
      }else{
        this.console.group('%c' + group,
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
        let str = '';
        if(!SYNAPS_CONFIG.groupLogsTogether){
          str += debugName + ' --> ';
          this.console.log('%c' + str + message,
            this.colorString[LOG_TYPES.INFO] +
            ` text-size: ${SYNAPS_CONFIG.debugLogTextSize}`,
          );
        }else{
          this.console.groupCollapsed('%c' + str + message,
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
export const reduxLogger = appLogger.getLogger('Redux Logger');
export const storageBackupDebugger = appLogger.getLogger(
  'Storage Backup Middleware');

window.console = {
  
  log: (message, ...optionalParams) => {
    appLogger.logMessageFromOthers(message, 'log', optionalParams);
  },
  
  info: (message, ...optionalParams) => {
    appLogger.logMessageFromOthers(message, 'info', optionalParams);
  },
  warn: (message, ...optionalParams) => {
    appLogger.logMessageFromOthers(message, 'warn', optionalParams);
  },
  error: (message, ...optionalParams) => {
    
    appLogger.logMessageFromOthers(message, 'error', optionalParams);
    
  },
  debug: (message, ...optionalParams) => {
    appLogger.logMessageFromOthers(message, 'debug', optionalParams);
  },
  
  dir: (value, ...optionalParams) => {
    appLogger.logMessageFromOthers(value, 'dir', optionalParams);
  },
  
  dirxml: (value) => {
    appLogger.logMessageFromOthers(value, 'dirxml');
  },
  
  table: (...tabularData) => {
    appLogger.logMessageFromOthers(tabularData, 'table');
  },
  
  trace: () => {
    appLogger.logMessageFromOthers('', 'trace');
  },
  
  group: (groupTitle, ...optionalParams) => {
    appLogger.logMessageFromOthers(groupTitle, 'group', ...optionalParams);
  },
  
  groupEnd: () => {
    appLogger.logMessageFromOthers('', 'groupEnd');
  },
  
  groupCollapsed: (groupTitle, ...optionalParams) => {
    appLogger.logMessageFromOthers(groupTitle, 'groupCollapsed',
      ...optionalParams,
    );
  },
  
  clear: () => {
    appLogger.logMessageFromOthers('', 'clear');
  },
  
  count: (label) => {
    appLogger.logMessageFromOthers(label, 'count');
  },
  
  countReset: () => {
    appLogger.logMessageFromOthers('', 'countReset');
    
  },
  
  assert: (condition, message, ...data) => {
    // todo: "come back and finish this. "
    appLogger.logMessageFromOthers(message, 'assert', ...data);
    
  },
  
  profileEnd: (reportName) => {
    appLogger.logMessageFromOthers(reportName, 'profileEnd');
  },
  
  profile: (reportName) => {
    appLogger.logMessageFromOthers(reportName, 'profile');
  },
  
  time: (label) => {
    appLogger.logMessageFromOthers(label, 'time');
  },
  
  timeEnd: (label) => {
    appLogger.logMessageFromOthers(label, 'timeEnd');
  },
  
  timeStamp: (label) => {
    appLogger.logMessageFromOthers(label, 'timeStamp');
  },
  
  timeline: (label) => {
    appLogger.logMessageFromOthers(label, 'timeline');
  },
  
  timelineEnd: (label) => {
    appLogger.logMessageFromOthers(label, 'timelineEnd');
  },
  
  markTimeline: (label) => {
  },
  
  exception: () => {
  },
  
  context: () => {
    
  },
  
  memory: () => {
    
  },
  
  reactStack: (e) => {
    appLogger.logMessageFromOthers(e, 'reactStack');
  },
  
  reactStackEnd: (e) => {
    appLogger.logMessageFromOthers(e, 'reactStackEnd');
  },
  
};

export default appLogger;