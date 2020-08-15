  
import React from "react";
import AxiosWithAuth from './axiosWithAuth'
import { render } from "@testing-library/react";


test("renders the axios without crashing...", async () => {
	render(<AxiosWithAuth />);
});