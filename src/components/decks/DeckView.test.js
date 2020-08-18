import React from "react";
import DeckView from './DeckView'
import { renderWithRedux } from "../../../__mocks__/reduxMock";
import { BrowserRouter as Router } from "react-router-dom";


test("renders without crashing", async () => {
    renderWithRedux(
        <Router>
            <DeckView/>
        </Router>
    )
});