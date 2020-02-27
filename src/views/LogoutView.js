import React from 'react';
import { useDispatch } from 'react-redux';
import StyledButton from '../components/Styled/StyledButton';
import { signout } from '../actions';

/*eslint no-unused-vars:0*/
const LogoutView = props => {
  const dispatch = useDispatch();
  return (
    <div>
      <StyledButton
        text={'logout'}
        onClick={() => {
          signout(dispatch);
        }}
      />
    </div>
  );
};

LogoutView.propTypes = {};

export default LogoutView;
