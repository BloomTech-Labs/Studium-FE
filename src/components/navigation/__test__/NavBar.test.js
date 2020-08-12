import React from "react";
import { render, screen } from "@testing-library/react";
import NavWrapper from "../NavBar";

test("navbar shows success message", async () => {
  const { getByText, getByPlaceholderText } = render(<NavWrapper/>);

 
});