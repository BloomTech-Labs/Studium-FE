import React, {useState} from 'react';
import {LoginScreen, TextBox, TextBox2, Button, Nav, H3, GoogButton, H4, HRline, HRline2} from "./loginstyles"
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import GoogleButton from 'react-google-button'



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
                <Nav>
                <H3>Studium</H3>
                </Nav>
                <GoogButton>
            <GoogleButton
                type="dark"
                onClick={() => { console.log('This button can be clicked') }}
            /></GoogButton>
            <HRline></HRline>
            <H4>Or Email</H4>
            <HRline2></HRline2>
              <form
            onSubmit={handleSubmit}>
                <TextBox
              type="text"
              name="username"
              placeholder= 'Type your username'
              value={login.username}
              onChange={handleChange}
              />
              <TextBox2
              type="password"
              name="password"
              placeholder="Type your password"
              value={login.password}
              onChange={handleChange}
              />
            <Button type="submit">Log In</Button>
            </form>
            </LoginScreen>
    )
}

export default Login;