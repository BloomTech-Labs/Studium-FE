import * as React from "react"
import styled from "styled-components"
import { genPercentAdd } from "antd/lib/upload/utils"


function SvgComponent({background = "transparent", cardTop = "transparent", width = 60, height = 81, card1 ="black", card2 = "pink"}) {
    return (
        
        <svg width={width} height={height} viewBox="0 0 20 27" fill="none">
            <LeftCard>
                <path fill= {cardTop} d="M3.275 3l16.186.204-.275 21.85L3 24.85z" />
                </LeftCard>
                <path
                stroke="#F6F5F3" fill ={card1}
                d="M3.769 3.506l15.186.191-.263 20.85-15.186-.19z"/>     
            
            <path fill={card1} d="M0 3.152L16.196 3l.205 21.865-16.196.152z" />
        
            <div>
                <path
                stroke= "white" fill= {card2}
                d="M.505 3.648l15.196-.142.196 20.865-15.196.142z"/> 
            </div>
            <div>
                <path fill={card1} stroke="#F6F5F3" d="M.5.5h19v26H.5z" />
            </div>
        </svg>
    )
}
const LeftCard = styled.div`
    transform: rotateX(45deg);
    border: 2px solid red;
    transition: all 4s;
`;
const rightCard = styled.div`
    
`;



export default SvgComponent