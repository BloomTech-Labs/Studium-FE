import React from 'react';
import { SynapsButton } from '../components/Button/SynapsButton.js';
import { signOut } from '../actions';
import { useAppHooks } from '../customHooks/useAppHooks.js';

/**
 * Logout
 * @category Views
 * @component
 * @example return (<Logout />);
 */
export const LogoutView = props => {
  const { dispatch } = useAppHooks();
  return (
    <div>
      <SynapsButton
        text={ 'logout' }
        onClick={ () => {
          dispatch( signOut() );
        } }
      />
    </div>
  );
};

LogoutView.propTypes = {};

