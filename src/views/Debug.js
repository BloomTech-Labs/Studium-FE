import React, {useEffect, useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {SYNAPS_CONFIG} from "../synapsConfig.js";
import appLogger from "../utilities/oldConsole.js";

/**
 *   Debug
 *
 *  @component
 *
 */
const Debug = (props) => {
  
  const [themeRules, setThemeRules] = useState({});
  const [logs, setAppLogs] = useState([]);
  
  useEffect(() => {
    let timer = window.setInterval(getData, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);
  
  const getData = () => {
    let rules = localStorage.getItem(
      SYNAPS_CONFIG.localStorageBasePath + "/themeRules");
    if(rules !== JSON.stringify(themeRules)){
      setThemeRules(JSON.parse(rules));
    }
    let logs = appLogger.getAppLogs();
    setAppLogs(logs);
    
  };
  
  const getLogs = () => {
    return logs;
  };
  
  return (
    <Container>
      <ThemRulesContainer>
        <h2>Theme Rules</h2>
        {Object.keys(themeRules).map(key => {
          return <h3>{key} --> {themeRules[key]}</h3>;
        })}
      </ThemRulesContainer>
      <AppLogsContainer>
        <h2>App Logs</h2>
        {getLogs().map(log => {
        
        })}
      </AppLogsContainer>
    </Container>
  );
};

const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 100%;
height: 100%;
`;

const ThemRulesContainer = styled.div`
h2 {
color: white;
font-size: 24px;
}
h3 {
color: white;
font-size: 20px;
}`;

const AppLogsContainer = styled.div`
h2 {
color: white;
font-size: 24px;
}
h3 {
color: white;
font-size: 20px;
}
`;

Debug.propTypes = {};

export default Debug;