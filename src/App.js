import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { Switch, Route } from "react-router";
import LandingPage from "./views/LandingPage";
import { useSelector, useDispatch } from "react-redux";
import StyledButton from "./components/StyledButton";
import { fetchUser } from "./actions";
import Testing from "./views/Testing";

function App( props ){
  
  const user = useSelector( state => state.usersReducer );
  const dispatch = useDispatch();
  
  const handleButtonClick = () => {
    debugger;
    fetchUser( dispatch );
  };
  
  return (
    
    <StyledApp className="App">
      <h1>App</h1>
      <h2>Is: Fetching: { user.fetching ? "true" : "false" }</h2>
      <div
        style={ { width: "40%", display: "flex", margin: "0 auto" } }>
        <StyledButton onClick={ handleButtonClick } type={ "secondary" }
                      icon={ "download" }
                      shape={ "round" }/>
      </div>
      
      
      <Switch>
        <Route exact path={ "/" }
               render={ props => <LandingPage { ...props }/> }/>
        <Route exact path={ "/testing" }
               render={ props => <Testing { ...props }/> }/>
      </Switch>
    </StyledApp> );
}

const StyledApp = styled.div`
color: ${ props => props.theme.mainColor }
`;

export default App;
