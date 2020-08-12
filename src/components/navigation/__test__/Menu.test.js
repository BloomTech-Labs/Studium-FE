import React from "react";
import { render, screen } from "@testing-library/react";
import Menu from "../Menu";
// import div from "../Menu";

test("menu component shows success message", async () => {
  const { getByAltText } = render(<Menu />);

  // Testing alt texts for the images
  screen.getByAltText("home", { name: /Home/i });
  screen.getByAltText("user", { name: /Account/i });
  screen.getByAltText("logout", { name: /Logout/i });

  // it("renders alt tag for home img", () => {
  // const { getByAltText } = render(<div />);
  // expect(getByTestId("loginButton")).toHaveTextContent("Log In");
  // screen.getByAltText("home");
  // });
});
