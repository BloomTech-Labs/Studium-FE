import React from "react";
import ProtectedRoute from './ProtectedRoute'

import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";


test("renders without crashing", async () => {

    render(
    <Router>
    (<ProtectedRoute />);
    </Router>
    )
});