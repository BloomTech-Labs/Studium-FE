import React, { useState } from 'react';
import { LoginScreen, TextBox, TextBox2, Button, Nav, H3, GoogButton, H4, HRline, HRline2, AnchorButton } from "./loginstyles"
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
import GoogleButton from 'react-google-button'


const Login = props => {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        AxiosWithAuth()
            .post('/login', login)
            .then(
                res => {
                    localStorage.setItem('token', res.data.token);

                })
    };

    return (
        <LoginScreen>
            <Nav>
                <H3>Studium</H3>
            </Nav>
            <GoogButton>
                <AnchorButton href='https://dev-360882.okta.com/oauth2/v1/authorize?idp=0oael0y3cwL5zx7Tn4x6&client_id=0oaekug1e6udJlXUA4x6&response_type=id_token&response_mode=fragment&scope=openid profile email&redirect_uri=https://studium-app.net/dashboard&state=4Oycg4JA0a
&nonce=55QzavEtgu'>
                <GoogleButton
                    type="dark"
                    onClick={() => { console.log('This button can be clicked') }}
                />
                </AnchorButton> {/* This <a> is being used to help redirect our google button to okta*/}
                </GoogButton>
            <HRline></HRline>
            <H4>Or Email</H4>
            <HRline2></HRline2>
            <form
                onSubmit={handleSubmit}>
                <TextBox
                    type="text"
                    name="username"
                    placeholder='Type your username'
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