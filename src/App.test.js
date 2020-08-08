import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, screen } from "@testing-library/react";
// import "jest-dom/extend-expect";
import { App, Route } from "./App";

// test('renders our app component', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/className/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders Routes correctly", () => {
  const { getByTestId } = render(<Route />);
  expect(getByTestId("route")).toHaveTextContent("");
});

test('Tests for the SplashPage', async() => {
  render(<App />);

  const h2Tag = screen.getByText(/A place for students to create flashcards, share, and learn/i);
  expect(h2Tag).toBeInTheDocument();

   // const email = screen.getByLabelText(/email/i);
   // fireEvent.change(email, { target: { value: 'jr@junior.com' } });
 
   // const startedButton = screen.getByRole('button');
   // fireEvent.click(startedButton);    
 })
 test("form header renders", () => {
  const { getByText} = render(<CheckoutForm />);
  const h2 = getByText(/Studium/i);
  expect(h2).toBeInTheDocument();

});