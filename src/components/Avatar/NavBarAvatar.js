import React, {useState} from "react";
import {Avatar} from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";
import {Popover} from "antd";
import {useAppHooks} from "../../customHooks/useAppHooks.js";
import {signOut} from "../../actions";
import {APP_PATHS} from "../../utilities/constants.js";

/**
 * Nav Bar Avatar
 * @component
 * @example
 * return (
 *  <NavBarAvatar />
 *  )
 */
export const NavBarAvatar = ({avatarUrl, ...props}) => {
  
  const [open, setOpen] = useState(false);
  
  const {dispatch, changePath} = useAppHooks("Nav Bar");
  
  const handleClick = (path) => {
    setOpen(false);
    if(path === "logout"){
      dispatch(signOut());
    }else if(path === "signin"){
      changePath(APP_PATHS.SIGN_IN_PATH);
    }
  };
  
  const getContent = () => {
    return (
      <div>
        <p onClick={() => handleClick("logout")}>Logout</p>
        <p onClick={() => handleClick("signin")}>SignIn</p>
      </div>
    );
  };
  
  return (
    <Popover placement="bottomRight" title={"Hi"} content={getContent()}
             visible={open}
             trigger="click">
      {avatarUrl ? <StyledAntAvatar src={avatarUrl} {...props} size={40}
                                    onClick={() => setOpen(!open)}
      /> : <StyledAntAvatar {...props} size={40} onClick={() => setOpen(!open)}
      />}
    </Popover>
  
  );
};

const StyledAntAvatar = styled(Avatar)`
  && {
    position: absolute;
    background-color: #585858;
    filter: contrast(0.5);
    top: 35px;
    right: 8%;
    transform: translate(0, -50%);
  }
`;

NavBarAvatar.propTypes = {
  avatarUrl: PropTypes.string,
};
