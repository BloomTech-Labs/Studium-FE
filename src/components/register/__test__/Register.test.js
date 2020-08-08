import React from "react";
import { render, fireEvent, getByPlaceholderText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "../Register";
// import OutLine from "../Register";

// test("register page", () => {
//   const { getAllByText, debug } = render(<Register />);
//   const h6 = getAllByText('By clicking sign up');
//   expect(h6).toBeInTheDocument();
//   // debug();
// });

test("form shows success message on submit with form details", async () => {
  const { getByText, getAllByText, getByTestId, debug, getByPlaceholderText } = render(
    <Register />
  );

  // Testing first name field
  const first_name = getByPlaceholderText(/First Name/i);
  await userEvent.type(first_name, "Junior");
  expect(first_name).toHaveValue("Junior");
  // Testing last name field
  const last_name = getByPlaceholderText(/Last Name/i);
  await userEvent.type(last_name, "Dugue");
  expect(last_name).toHaveValue("Dugue");
  // Testing username field
  // const username = getByText(/address/i);
  // await userEvent.type(username, "123 test way");
  // expect(username).toHaveValue("123 test way");
  // Testing password field
  // const password = getByText(/city/i);
  // await userEvent.type(password, "Tampa");
  // expect(password).toHaveValue("Tampa");
  // Testing state field
  const SignUp = getByText("SIGN UP");
  await userEvent.type(SignUp, "SIGN UP");
  expect(SignUp).toHaveValue("SIGN UP");
});
