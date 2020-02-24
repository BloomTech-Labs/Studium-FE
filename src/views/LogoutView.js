import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import StyledButton from '../components/Styled/StyledButton';
import { signout } from '../actions';

const LogoutView = props => {
  const dispatch = useDispatch();
  return ( <div>
    <StyledButton text={ 'logout' } onClick={ () => {
      
      signout( dispatch );
    } }/>
  </div> );
};

LogoutView.propTypes = {};

export default LogoutView;