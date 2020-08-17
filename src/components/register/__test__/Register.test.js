import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "../Register";
import { renderWithRedux } from "../../../../__mocks__/reduxMock";

test("form shows success message on submit with form details", async () => {
  const { getByText, getByPlaceholderText } = renderWithRedux(<Register />);

  // Testing first name field
  const first_name = getByPlaceholderText(/First Name/i);
  await userEvent.type(first_name, "Junior");
  expect(first_name).toHaveValue("Junior");
  // Testing last name field
  const last_name = getByPlaceholderText(/Last Name/i);
  await userEvent.type(last_name, "Dugue");
  expect(last_name).toHaveValue("Dugue");
  // Testing username field
  const username = getByPlaceholderText(/Type your username/i);
  await userEvent.type(username, "123testway");
  expect(username).toHaveValue("123testway");
  // Testing email field
  const email = getByPlaceholderText(/Email/i);
  await userEvent.type(email, "123testway@studium.com");
  expect(email).toHaveValue("123testway@studium.com");
  // Testing password field
  const password = getByPlaceholderText(/Type your password/i);
  await userEvent.type(password, "Tampa");
  expect(password).toHaveValue("Tampa");
  // Testing state field
  const SignUp = getByText("SIGN UP");
  await userEvent.type(SignUp, "SIGN UP");
  expect(SignUp).toHaveValue("SIGN UP");
});
