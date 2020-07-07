import React from 'react';
import styled from 'styled-components';
// import {Header} from './Header';

const Content = styled.main`
    max-width: 800px;
    margin: 0 auto 0 auto;
    box-sizing: border-box;
    font-family: '';

    h1, h2, h3, h4, h5, h6{
        font-family: '';
    }
    .getStarted{
        display: flex;
        width: 90%;
        margin: 0 auto;        
    }

    .h2Tags{
        text-align: center;
        font-size: 2em;
        line-height: 24px;
        font-family: 'Monstserrat';
        color: #010101;
    }

    .pTags{
        text-align: center;
        font-size: 1.4em;
    }


    .centeredOr{
        margin: 0 auto;
    }
    @media(min-width: 370px){

}
`;

export function PageLayout({children}){
    return (
        <>
            {/* <Header /> */}
            <Content>
                {children}
            </Content>
        </>
    )
}