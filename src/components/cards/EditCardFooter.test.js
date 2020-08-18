import React from "react";
import EditCardFooter from './EditCardFooter'
import { renderWithRedux } from "../../../__mocks__/reduxMock";
import { BrowserRouter as Router } from "react-router-dom";


test("renders without crashing", async () => {
    renderWithRedux(
        <Router>
            <EditCardFooter/>
        </Router>
    )
});