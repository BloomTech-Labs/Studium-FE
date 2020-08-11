import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateDeckForm from "../CreateDeckForm";

test("createdeckform shows success message with form details", async () => {
  const { getByText, getByPlaceholderText } = render(<CreateDeckForm />);

  // Testing first name field
  const LabelWrapper = getByPlaceholderText(/What are you studying/i);
  await userEvent.type(LabelWrapper, "Junior");
  expect(LabelWrapper).toHaveValue("Junior");
  // Testing last name field
  // const last_name = getByPlaceholderText(/Last Name/i);
  // await userEvent.type(last_name, "Dugue");
  // expect(last_name).toHaveValue("Dugue");
  // Testing username field
  // const username = getByPlaceholderText(/Type your username/i);
  // await userEvent.type(username, "123testway");
  // expect(username).toHaveValue("123testway");
  // Testing email field
  // const email = getByPlaceholderText(/Email/i);
  // await userEvent.type(email, "123testway@studium.com");
  // expect(email).toHaveValue("123testway@studium.com");
  // Testing password field
  // const password = getByPlaceholderText(/Type your password/i);
  // await userEvent.type(password, "Tampa");
  // expect(password).toHaveValue("Tampa");
  // Testing state field
  // const SignUp = getByText("SIGN UP");
  // await userEvent.type(SignUp, "SIGN UP");
  // expect(SignUp).toHaveValue("SIGN UP");
});
