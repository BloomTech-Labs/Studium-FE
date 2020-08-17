import React from "react";
import StudyView from "./StudyView"
import { renderWithRedux } from "../../../__mocks__/reduxMock";
import { BrowserRouter as Router } from "react-router-dom";


test("renders without crashing", async () => {
    renderWithRedux(
        <Router>
            <StudyView/>
        </Router>
    )
});