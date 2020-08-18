import React from "react";
import EditDeck from './EditDeck'
import { renderWithRedux } from "../../../__mocks__/reduxMock";
import { BrowserRouter as Router } from "react-router-dom";


test("renders without crashing", async () => {
    renderWithRedux(
        <Router>
            <EditDeck/>
        </Router>
    )
});