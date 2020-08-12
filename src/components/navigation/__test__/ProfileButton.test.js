import React from "react";
import { render, screen } from "@testing-library/react";
import ProfilButton from "../ProfileButton";

test("profilebutton shows success message", async () => {
  const { getByText, getByPlaceholderText } = render(<ProfilButton/>);

 
});