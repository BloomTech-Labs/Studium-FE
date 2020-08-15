import React from "react";
import Logout from './Logout'
import { render } from "@testing-library/react";


test("renders without crashing", async () => {

	render(<Logout />);
});