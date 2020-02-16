import React from 'react';
import styled from 'styled-components';

const CurrentCard = styled.div`
    height: 50%;
    background: theme;
    padding: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Footer = styled.div`
	position: absolute;
	bottom: 0;
	width: 50%;
	height: 40px;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

const Button = styled.button`
	height: 40px;
    border: none;
    font-size: 14px;
`;

export default ({children, onFlip}) => (
	<CurrentCard>
		{children}
		<Footer>
			<Button onClick={onFlip}>justwork!</Button>
		</Footer>
	</CurrentCard>
);