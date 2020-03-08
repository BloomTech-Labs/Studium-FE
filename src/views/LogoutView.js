import React from 'react';
import { useDispatch } from 'react-redux';
import { SynapsButton } from '../components/Button/SynapsButton.js';
import { signOut } from '../actions';

/**
 * Logout
 * @category Views
 * @component
 * @example return (<Logout />);
 */
export const LogoutView = props => {
  const dispatch = useDispatch();
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

