import React, { useState }  from 'react'
import {OutLine, Nav, H3, FirstName, LastName, UserName, Email, Password, SignUp, FnText, LnText, EmailText, UserText, PassText} from './Registerstyles';
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
       .post('/register', signUpData)
       .then((res) => {
         localStorage.setItem('token', res.data.token);
       })
       .catch((err) => console.log({ err }));
   };
 
   return (
     <OutLine>
            <Nav>
                <H3>Studium</H3>
            </Nav>
 
           <form
                onSubmit={handleSubmit}>
                   <FnText>First Name</FnText>
                     <FirstName
                    type="text"
                    name="first_name"
                  //   placeholder='First Name'
                    value={signUpData.first_name}
                    onChange={handleChange}
                />
                <LnText>Last Name</LnText>
                  <LastName
                    type="text"
                    name="last_name"
                  //   placeholder='Last Name'
                    value={signUpData.last_name}
                    onChange={handleChange}
                />
                <UserText>Username</UserText>
                <UserName
                    type="text"
                    name="username"
                  //   placeholder='Type your username'
                    value={signUpData.username}
                    onChange={handleChange}
                />
                 <EmailText>Email</EmailText>
                  <Email
                    type="email"
                    name="email"
                  //   placeholder='Email'
                    value={signUpData.email}
                    onChange={handleChange}
                />
                <PassText>Password</PassText>
                <Password
                    type="password"
                    name="password"
                  //   placeholder="Type your password"
                    value={signUpData.password}
                    onChange={handleChange}
                />
           <SignUp type="submit">Sign up</SignUp>
           </form>
           </OutLine>
   );
 };

export default Register