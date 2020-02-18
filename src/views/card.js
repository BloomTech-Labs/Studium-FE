import React from 'react';
import StyledCard from '../components/Styled/Styledcard';
import StyledButton from '../components/Styled/StyledButton';
import styled from 'styled-components';


export default function Card() {
	return (
	  <StyledCard>
		<div styles={{width: '100%'}}>
		style={{padding: '8em 10em 8em',}}
		  shape={'square'}
		  size={'small'}
		  type={'grey'}
		/>
		</div>
		{ <StyledButton
		  style={{width: '8%',margin:'10px'}}
		  text={'Next'}
		  shape={'square'}
		  size={'small'}
		  type={'primary'}
		/> }
		{ <StyledButton
		  style={{width: '8%',margin:'10px'}}
		  text={'delete'}
		  shape={'round'}
		  size={'small'}
		  type={'primary'}
		/> }
		{ <StyledButton
		  style={{width: '8%',margin:'10px'}}
		  text={'back'}
		  shape={'square'}
		  size={'small'}
		  type={'primary'}
		/> }
	  </StyledCard>
	);
  }
  
  
//   const StyledCard = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	height: 120vh;
// 	`;
