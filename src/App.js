import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {NavBar, Footer, RouteContainer} from './components';
import {SvgBrainPic} from './svgComponents';
import PropTypes from 'prop-types';
import {Alert} from 'antd';
import {useAppHooks} from './customHooks/useAppHooks.js';
import {useAuthStateChange} from './customHooks/useAuthStateChange.js';
import {
  THEMING_VARIABLES, THEMING_VALUES,
} from './customHooks/themingRules.js';
import theming from 'styled-theming';
import {useTheming} from './customHooks/useTheming.js';
import {MEDIA_QUERIES} from './utilities/constants.js';

/**
 * App
 * @category Views
 * @component
 * @example return (<App />);
 */
export default function App(){
  const [alertMessage, setAlert] = useState('');
  const {theme, usersState, pathname, appView, getHooks} = useAppHooks('App');
  const getValue = useTheming('App.js');
  
  useAuthStateChange(getHooks);
  
  useEffect(() => {
    if(usersState.registerError && !alertMessage){
      setAlert('Error logging in. Please try again later.');
      if(usersState.registerError && !alertMessage){
        setAlert('Error logging in. Please try again later.');
      }
    }
  }, [usersState]);
  
  return (
    <StyledApp className="App">
      {theme.BRAIN_SVG !== THEMING_VALUES.HIDDEN &&
      <SvgBrainPic
        maxWidth={'3000px'}
        maxHeight={'3000px'}
        height={getValue(THEMING_VARIABLES.BRAIN_SVG, {
          [THEMING_VALUES.BOTTOM]: '1500px',
          [THEMING_VALUES.TOP]: '1500px',
          [THEMING_VALUES.MOBILE]: '624px',
        })}
        width={getValue(THEMING_VARIABLES.BRAIN_SVG, {
          [THEMING_VALUES.BOTTOM]: '1500px',
          [THEMING_VALUES.TOP]: '1500px',
          [THEMING_VALUES.MOBILE]: '624px',
        })}
        left={'50%'} transform={'translate(-50%, 0)'}
        top={getValue(THEMING_VARIABLES.BRAIN_SVG, {
          [THEMING_VALUES.BOTTOM]: '800px',
          [THEMING_VALUES.TOP]: '146px',
          [THEMING_VALUES.MOBILE]: '624px',
        })}
        fill={getValue(THEMING_VARIABLES.BACKGROUND, {
          [THEMING_VALUES.DARK]: theme.themeState.brainPicDark,
          [THEMING_VALUES.LIGHT]: theme.themeState.brainPicLight,
        })}
      />
      }
      {alertMessage && (
        <Alert
          type={'error'}
          onClose={() => setAlert(false)}
          message={alertMessage}
          closable
          style={{
            position: 'absolute',
            top: '20px',
            zIndex: '15',
          }}
        />
      )}
      <NavBar getHooks={getHooks}/>
      <RouteContainer getHooks={getHooks}/>
      <Footer getHooks={getHooks}/>
    </StyledApp>
  );
}

App.propTypes = {
  theme: PropTypes.object,
  history: PropTypes.object,
};

const backgroundColor = theming(THEMING_VARIABLES.BACKGROUND, {
  [THEMING_VALUES.DARK]: ({theme}) => {
    return theme.themeState.primaryColor;
  },
  [THEMING_VALUES.LIGHT]: ({theme}) => {
    return theme.themeState.navBarLight;
  },
});

const StyledApp = styled.div`
  background: ${backgroundColor};
  box-sizing: border-box;
  position: relative;
  color: ${props => props.theme.color};
  text-align: center;
  flex-direction: column;
  display: flex;
  max-width: 100vw;
  width: 100vw;
  align-items: center;
  max-height: 100vh;
  min-height: 100vh;
  overflow: hidden;

  @media ${MEDIA_QUERIES.tablet} {
  }
`;
