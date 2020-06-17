import React, {useState} from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from './utils/axiosWithAuth';


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
              <form
            onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder= 'Type your username'
              value={login.username}
              onChange={handleChange}
              />

              {/* Need to go through and fix */}
              <input
              type="password"
              name="password"
              placeholder="Type your password"
              value={login.password}
              onChange={handleChange}
              />
              <H>Forgot?</H>
            <button type="submit">Log In</button>
            </form>
    
        
    )
}
export default Login;