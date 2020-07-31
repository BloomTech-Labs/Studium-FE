import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ButtonTop from "../common/ButtonTop";

const NavWrapper = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding: 20px 20px 0 20px;
  position: sticky;
  top: 0;
  width: 100%;
  box-shadow: 0px 5px 5px #c4c4c4;
`;

const Logo = styled.a`
  width: 72px;
  height: 26px;
  font-family: "Poppins", sans-serif;
  font-style: bold;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  color: #2e71fd;
`;

function NavBar(props) {
  const history = useHistory();

  const routeToLogin = () => {
    let path = `/login`;
    history.push(path);
  };

  return (
    <NavWrapper>
      <Logo>Studium</Logo>
      {}
      <>
        <ButtonTop type="button" onClick={routeToLogin}>
          Log In
        </ButtonTop>
      </>
    </NavWrapper>
  );
}

export default NavBar;
