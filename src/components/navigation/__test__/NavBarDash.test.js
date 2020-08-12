import React from "react";
import { render, screen } from "@testing-library/react";
import NavbarDash from "../NavBarDash";

test("navbardash shows success message", async () => {
  const { getByText, getByPlaceholderText } = render(<NavbarDash/>);

 
});