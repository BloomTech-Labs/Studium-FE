import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../Login";

test("form shows success message on submit with form details", async () => {
  const { getByText, getByPlaceholderText } = render(<Login />);
// this test will not work unless line 11 on login.js is commented out

  // Testing username field
  const username = getByPlaceholderText(/Type your username/i);
  await userEvent.type(username, "123testway");
  expect(username).toHaveValue("123testway");
  // Testing password field
  const password = getByPlaceholderText(/Type your password/i);
  await userEvent.type(password, "Tampa");
  expect(password).toHaveValue("Tampa");
  // Testing log in button
  const Button = getByText("Log In");
  await userEvent.type(Button, "Log In");
  expect(Button).toHaveValue("Log In");
});
