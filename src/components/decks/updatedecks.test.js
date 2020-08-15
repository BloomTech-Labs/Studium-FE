import React from "react";
import Updatedecks from './Updatedecks'
import { render } from "@testing-library/react";


test("renders without crashing", async () => {

	render(<Updatedecks />);
});