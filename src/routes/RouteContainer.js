import React from 'react';
import {LoginSignUpRoute, ProtectedRoute} from './index.js';
import {
  CreateDeck, Dashboard, FlashCard, LandingPage, PreviewDeck, SignIn,
  Testing,
} from '../views';
import {Switch, Route} from 'react-router';
import {ContainerDiv} from '../components';
import {THEMING_VALUES} from '../customHooks/themingRules.js';
import {APP_PATHS} from '../utilities/constants.js';
import QuizMode from '../views/QuizMode.js';

/**
 *   RouteContainer
 *
 *  @component
 *  @example
 *  return(
 *    <RouteContainer/>
 *  )
 *
 */
export const RouteContainer = (props) => {
  const {height, theme} = props.getHooks();
  
  const calculateMaxHeight = () => {
    let number = 0;
    if (theme.NAV_STYLE !== THEMING_VALUES.HIDDEN) {
      number += theme.navBarTopHeight;
    }
    if (theme.FOOTER !== THEMING_VALUES.HIDDEN) {
      number += theme.footerHeight;
    }
    return height - number;
  };

  return (
    <ContainerDiv
      className={'route-container'}
      position={'fixed'}
      justifyContent={'flex-start'}
      backgroundColor={'white'}
      top={'0'}
      overFlowY={'scroll'}
      margin={theme.NAV_STYLE === THEMING_VALUES.HIDDEN ? '0 auto' :
        '75px auto'}
      heightMax={calculateMaxHeight() + 'px'}
    >
      <Switch>
        <LoginSignUpRoute path={APP_PATHS.SIGN_UP_PATH}
                          component={SignIn} {...props} />
        <LoginSignUpRoute path={APP_PATHS.SIGN_IN_PATH}
                          component={SignIn} {...props} />
        <ProtectedRoute path={APP_PATHS.DASHBOARD_PATH}
                        component={Dashboard} {...props}/>
        <ProtectedRoute path={APP_PATHS.CREATE_DECK_PATH}
                        component={CreateDeck} {...props}/>
        <ProtectedRoute path={APP_PATHS.PREVIEW_DECK_PATH}
                        component={PreviewDeck} {...props}/>
        <ProtectedRoute path={APP_PATHS.QUIZ_MODE}
                        component={QuizMode} {...props}/>
        <Route path={APP_PATHS.TESTING}
               render={props => <Testing {...props}/>}/>
        <LoginSignUpRoute path={'/'}
                          component={LandingPage} {...props} />
      </Switch>
    </ContainerDiv>
  );
};

RouteContainer.propTypes = {};
