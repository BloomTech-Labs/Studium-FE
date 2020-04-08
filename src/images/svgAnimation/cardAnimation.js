import * as React from "react"
import styled from "styled-components"
import { genPercentAdd } from "antd/lib/upload/utils"

import {LeftCard} from "./leftCard.js"
import {RightCard} from "./rightCard.js"
import {MiddleCard} from "./middleCard.js"

function CardAnimation({open}) {
    return (
        <Container>
            <StyledLeft open = {open}/>
            <StyledMiddle/>
            <StyledRight open = {open}/>
        </Container>


    )
}
const StyledLeft = styled(LeftCard)`
    transition: all 4s;
    position: absolute;
    left: 30%;
    top: 50%;
    transform-origin: 47% 100%;
    transform: ${props => props.open ? "translate(-50%, -50%)" : "translate(-50%, -50%) rotateZ(32deg)"};
`;
const StyledRight = styled(RightCard)`
    transition: all 4s;
    position: absolute;
    left: 70%;
    top: 50%;
    transform-origin: 22% 100%;
    transform: ${props => props.open ? "translate(-50%, -50%)" : "translate(-50%, -50%) rotateZ(-32deg)"};


`;
const StyledMiddle = styled(MiddleCard)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;

`;
const Container = styled.div`
    position: relative;
    border: 2px solid black;
    width: 50px;
    height: 50px;
    `



export default CardAnimation