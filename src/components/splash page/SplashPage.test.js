import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import SplashPage from "./SplashPage";
import ButtonBottom from "./SplashPage";
import PageLayout from "./SplashPage";
// import Form from "./SplashPage";
import renderer from "react-test-renderer";

afterEach(cleanup);

test("Tests for the SplashPage", async () => {
  render(<SplashPage />);

  const h2Tag = screen.getByText(/A place for students to create flashcards, share, and learn/i);
  expect(h2Tag).toBeInTheDocument();

  // const pTags = screen.getByText(/Master any subject Master any subject, one success at a time./i);
  // expect(pTags).toBeInTheDocument();
});

it("renders log in button correctly", () => {
  const { getByTestId } = render(<ButtonBottom />);
  expect(getByTestId("loginButton")).toHaveTextContent("Log In");
});

it("renders sign up button correctly", () => {
  const { getByTestId } = render(<ButtonBottom />);
  expect(getByTestId("signupButton")).toHaveTextContent("Sign Up");
});

// it("get started button submits", () => {
//   const onSubmit = jest.fn();
//   const { getByTestId } = render(<Form onSubmit={onSubmit} />);
//   fireEvent.submit(getByTestId("form"));
//   expect(onSubmit).toHaveBeenCalled();
// });

it("matches snapshot", () => {
  const landingpage = renderer.create(<PageLayout />).toJSON();
  expect(landingpage).toMatchSnapshot();
});
