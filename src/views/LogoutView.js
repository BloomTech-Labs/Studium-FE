import React from 'react';
import { useDispatch } from 'react-redux';
import { SynapsButton} from '../components/Button/SynapsButton.js';
import { signOut } from '../actions';

/**
 * Logout View
 *
 * @function
 * @name LogoutView
 * @returns React.Component
 */
export const LogoutView = props => {
  const dispatch = useDispatch();
  return (
    <div>
      <SynapsButton
        text={'logout'}
        onClick={() => {
          dispatch(signOut());
        }}
      />
    </div>
  );
};

LogoutView.propTypes = {};

