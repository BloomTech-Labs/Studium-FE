import React from "react";
import styled from "styled-components";
import ButtonTop from "../common/ButtonTop";
// import {Button} from "../common/Button";
// import {Button} from "../common";
// import Button from "../common/";

const NavWrapper = styled.header`
  /* outline: 1px solid red; */
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  /* padding-top: 30px; */
  padding: 20px 20px 0 20px;
  position: sticky;
  top: 0;
  width: 100%;
  /* border: 1px solid #c4c4c4; */
  box-shadow: 0px 5px 5px #c4c4c4;
`;

const Logo = styled.a`
  /* outline: 1px solid red; */
  /* position: absolute; */
  width: 72px;
  height: 26px;
  /* left: 20px; */
  /* top: 32px; */
  font-family: "Poppins", sans-serif;
  font-style: bold;
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  color: #2e71fd;
  /* margin-left: 15px; */
`;



export function NavBar() {
  return (
    <NavWrapper>
        <Logo>Studium</Logo>
      {}
      <>
      <ButtonTop type="button">Log In</ButtonTop>
      </>
    </NavWrapper>
  );
}

export default NavBar;
