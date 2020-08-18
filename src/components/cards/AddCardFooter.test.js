import React from "react";
import AddCardFooter from './AddCardFooter'
import { renderWithRedux } from "../../../__mocks__/reduxMock";
import { BrowserRouter as Router } from "react-router-dom";


test("renders without crashing", async () => {
    renderWithRedux(
        <Router>
            <AddCardFooter/>
        </Router>
    )
});