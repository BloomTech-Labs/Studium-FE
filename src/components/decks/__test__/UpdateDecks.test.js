import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UpdateClasses from "../UpdateDecks";

test("form shows success message on submit with form details", async () => {
  const { getByText, getByPlaceholderText } = render(<UpdateClasses/>);

  // Testing first name field
  // const first_name = getByPlaceholderText(/First Name/i);
  // await userEvent.type(first_name, "Junior");
  // expect(first_name).toHaveValue("Junior");
  // Testing the update button
  await userEvent.click(screen.getByRole('button'));
  // // Testing username field
  // const username = getByPlaceholderText(/Type your username/i);
  // await userEvent.type(username, "123testway");
  // expect(username).toHaveValue("123testway");
  // // Testing email field
  // const email = getByPlaceholderText(/Email/i);
  // await userEvent.type(email, "123testway@studium.com");
  // expect(email).toHaveValue("123testway@studium.com");
  // // Testing password field
  // const password = getByPlaceholderText(/Type your password/i);
  // await userEvent.type(password, "Tampa");
  // expect(password).toHaveValue("Tampa");
  // // Testing state field
  // const SignUp = getByText("SIGN UP");
  // await userEvent.type(SignUp, "SIGN UP");
  // expect(SignUp).toHaveValue("SIGN UP");
});
