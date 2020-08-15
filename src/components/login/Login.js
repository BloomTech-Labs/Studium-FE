import React, { useState } from "react"
import { 
  LoginScreen, 
  TextBox, 
  TextBox2, 
  Button, 
  Nav, 
  H3, 
  H4, 
  HRline, 
  HRline2, 
  AnchorButton, 
  Form, 
  HRStyle, 
  UserText, 
  PassText 
} from "./loginstyles"
import { useDispatch } from 'react-redux'
import { getUser } from "../../redux/actions"
import GoogleButton from "react-google-button/dist/react-google-button"
import AxiosWithAuth from "../../utils/axiosWithAuth"

const Login = (props) => {
  const dispatch = useDispatch()

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    AxiosWithAuth()
      .post("/auth/login", login)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        if (res.data.user) {
          dispatch(getUser());
          setLogin(res.data.user);
          props.history.push(`/dashboard`);
        } else {
          props.history.push("/register");
        }
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <LoginScreen>
      <Nav>
        <H3>Studium</H3>
      </Nav>

      <AnchorButton
        href="https://dev-360882.okta.com/oauth2/v1/authorize?idp=0oael0y3cwL5zx7Tn4x6&client_id=0oaekug1e6udJlXUA4x6&response_type=id_token&response_mode=fragment&scope=openid profile email&redirect_uri=https://studium-app.net/dashboard&state=4Oycg4JA0a
                &nonce=55QzavEtgu"
      >
        <GoogleButton
          type="dark"
          onClick={() => {}}/>
      </AnchorButton>
      <HRStyle>
        <HRline></HRline>
        <H4>OR LOG IN</H4>
        <HRline2></HRline2>
      </HRStyle>

      <Form onSubmit={handleSubmit}>
        <UserText>USERNAME</UserText>
        <TextBox type="text" name="username" placeholder="Type your username" value={login.username} onChange={handleChange} />
        <PassText>PASSWORD</PassText>
        <TextBox2 type="password" name="password" placeholder="Type your password" value={login.password} onChange={handleChange} />
        <Button type="submit" style={{ color: "#FFFFFF" }}>
          Log In
        </Button>
      </Form>
    </LoginScreen>
  );
};

export default Login;
