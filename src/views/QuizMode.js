import React from 'react'
import styled from 'styled-components'
import {TitleText} from '../components/Text/TitleText.js'

export default function QuizMode({deck}) {
    return (
        <Quizmode>
            <TitleText text = {deck.deck_name} color = {"#2A685B"}>
            
            

            </TitleText>
        </Quizmode>
    )
}

const Quizmode = styled.div `
    width = 100%;
    height = 100%;
    background-color: white;
`