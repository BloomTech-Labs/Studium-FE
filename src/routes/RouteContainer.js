import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LoginSignUpRoute, ProtectedRoute } from './index.js';
import {
  CreateDeck, Dashboard, FlashCard, LandingPage, PreviewDeck, SignIn, SignUp,
  Testing,
} from '../views';
import { Switch, Route } from 'react-router';
import { ContainerDiv } from '../components';
import { useAppHooks, sizes } from '../customHooks/useAppHooks.js';

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
export const RouteContainer = ( props ) => {
  const { theme } = useAppHooks();
  return (
    <ContainerDiv
      className={ 'app-container' }
      position={ 'fixed' }
      backgroundColor={ 'white' }
      top={ '0' }
      overFlowY={ 'hidden' }
      margin={ theme.screenWidth < sizes.tablet ? '75px auto 50px auto' :
        '75px auto 0 auto' }
      heightMax={ ( theme.screenHeight - 125 ) + 'px' }
    >
      <Switch>
        <LoginSignUpRoute path={ '/signup' }
                          component={ SignUp } { ...props } />
        <LoginSignUpRoute path={ '/signIn' }
                          component={ SignIn } { ...props } />
        <ProtectedRoute path={ '/dashboard' } component={ Dashboard }/>
        <ProtectedRoute path={ '/create/deck' } component={ CreateDeck }/>
        <ProtectedRoute path={ '/preview' } component={ PreviewDeck }/>
        <ProtectedRoute path={ '/game' } component={ FlashCard }/>
        <Route path={ '/test' } component={ Testing }/>
        
        <LoginSignUpRoute path={ '/' }
                          component={ LandingPage } { ...props } />
      </Switch>
    </ContainerDiv>
  );
};

RouteContainer.propTypes = {};
