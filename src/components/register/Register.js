import React, { useState }  from 'react'
import {OutLine, Nav, H3, FirstName, LastName, UserName, Email, Password, SignUp, FnText, LnText, EmailText, UserText, PassText, AnchorButton, H4, HRline, HRline2, HRStyle} from './Registerstyles';
import GoogleButton from 'react-google-button'
import AxiosWithAuth from '../../utils/axiosWithAuth.js'
const Register = (props) => {
   const [signUpData, setSignUpData] = useState({
      first_name: '',
      last_name:'',
       username: '',
       email: '',
       password: ''
   });
 //try to get this object showing up as I'm updating.
   const handleChange = e => {
     setSignUpData({
       ...signUpData,
       [e.target.name]: e.target.value,
     });
   };
 


   const handleSubmit = (e) => {
     e.preventDefault();
     AxiosWithAuth()
       .post('/auth/register', signUpData)
       .then((res) => {
         localStorage.setItem('token', res.data.token);
         console.log(res)
         if (res.data.newUser){ props.history.push(`/dashboard/${res.data.newUser}`);
        }
         else {props.history.push('/register')}
        })
       .catch((err) => console.log({ err }));
   };
 
   return (
     <OutLine>
            <Nav>
                <H3>Studium</H3>
            </Nav>
             <AnchorButton href='https://dev-360882.okta.com/oauth2/v1/authorize?idp=0oael0y3cwL5zx7Tn4x6&client_id=0oaekug1e6udJlXUA4x6&response_type=id_token&response_mode=fragment&scope=openid profile email&redirect_uri=https://studium-app.net/dashboard&state=4Oycg4JA0a
                &nonce=55QzavEtgu'>
                    <GoogleButton
                        type="dark"
                        onClick={() => { console.log('This button can be clicked') }}
                    />
                </AnchorButton>

                <HRStyle>
            <HRline></HRline>
            <H4>OR EMAIL</H4>
            <HRline2></HRline2>
            </HRStyle>
                
 
           <form
                onSubmit={handleSubmit}>
                   <FnText>FIRST NAME</FnText>
                     <FirstName
                    type="text"
                    name="first_name"
                  //   placeholder='First Name'
                    value={signUpData.first_name}
                    onChange={handleChange}
                />
                <LnText>LAST NAME</LnText>
                  <LastName
                    type="text"
                    name="last_name"
                  //   placeholder='Last Name'
                    value={signUpData.last_name}
                    onChange={handleChange}
                />
                <UserText>USERNAME</UserText>
                <UserName
                    type="text"
                    name="username"
                  //   placeholder='Type your username'
                    value={signUpData.username}
                    onChange={handleChange}
                />
                 <EmailText>EMAIL</EmailText>
                  <Email
                    type="email"
                    name="email"
                  //   placeholder='Email'
                    value={signUpData.email}
                    onChange={handleChange}
                />
                <PassText>PASSWORD</PassText>
                <Password
                    type="password"
                    name="password"
                  //   placeholder="Type your password"
                    value={signUpData.password}
                    onChange={handleChange}
                />
           <SignUp type="submit" style= {{color: '#FFFFFF'}}>SIGN UP</SignUp>
           </form>
           <h6>By clicking sign up, you accept Studium’s Terms of Service and Privacy Policy </h6>
           </OutLine>
   );
 };

export default Register