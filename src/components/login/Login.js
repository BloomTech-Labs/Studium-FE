import React, {useState} from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from '../../utils/axiosWithAuth';


const Login = props => {
    const [login, setLogin] = useState({
        username: '',
        password:''
    })

const handleChange = e => {
    setLogin({
        ...login,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
       .post('/auth/login', login) 
    .then(
        res =>{
            localStorage.setItem('token', res.data.token);

        }
    )
}
    return(
        <LoginScreen>
            
              <form
            onSubmit={handleSubmit}>
            <TextBox
              type="text"
              name="username"
              placeholder= 'Type your username'
              value={login.username}
              onChange={handleChange}
              />

              {/* Need to go through and fix */}
              <TextBox2
              type="password"
              name="password"
              placeholder="Type your password"
              value={login.password}
              onChange={handleChange}
              />
              <H>Forgot?</H>
            <Button type="submit">Log In</Button>
            </form>
    
         </LoginScreen>
    )
}

export default Login;