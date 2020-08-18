
import React from "react";
import IndCardView from './IndCardView'
import { renderWithRedux } from "../../../__mocks__/reduxMock";
import { BrowserRouter as Router } from "react-router-dom";


test("renders without crashing", async () => {
    renderWithRedux(
        <Router>
            <IndCardView/>
        </Router>
    )
});