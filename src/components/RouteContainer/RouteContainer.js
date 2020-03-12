import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { LoginSignUpRoute, ProtectedRoute } from '../../routes';
import {
  CreateDeck, Dashboard, FlashCard, LandingPage, PreviewDeck, SignIn, SignUp,
  Testing,
} from '../../views';
import { Switch } from 'react-router';
import { ContainerDiv } from '..';
import { useAppHooks } from '../../customHooks/useAppHooks.js';

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
      top={ '0' }
      margin={ '75px 0 50px 0' }
      heightMax={ theme.screenHeight + 'px' }
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
        <ProtectedRoute path={ '/test' } component={ Testing }/>
        
        <LoginSignUpRoute path={ '/' }
                          component={ LandingPage } { ...props } />
      </Switch>
    </ContainerDiv>
  );
};

RouteContainer.propTypes = {};
