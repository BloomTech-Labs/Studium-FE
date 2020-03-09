import React from 'react';
import {
  customRender,
  getNodesByType,
  getByTestId,
  fireEvent,
  store,
  getByRole,
  logOutMessageOrDebug,
  getByText,
  toHaveTextContent, wait,
} from '../../../utilities/test-utils';
import BigFlashCard from './BigFlashCard';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

/**
 * Test the big flash card
 */

// test('BigFlashCard render correctly', () => {
//   const tree = renderer.create(<BigFlashCard flashCard={{question: "This is"
// + " a question", answer: "This is the answer."}} />).toJSON();
// expect(tree).toMatchSnapshot(); });

describe( 'Big Flash Card', () => {
  
  test( 'BigFlashCard render correctly', () => {
    const tree = renderer.create( <BigFlashCard flashCard={ {
      question: 'This is' +
        ' a question',
    } }/> ).toJSON();
    expect( tree ).toMatchSnapshot();
  } );
  
  test( 'position front', () => {
    const { container, getByText } = render( <BigFlashCard
      flashCard={ { question: 'question', answer: 'answer' } }/> );
    expect( getByText( 'question' ) ).toBeInTheDocument();
  } );
  test( 'position back', () => {
    const { container, getByTestId, queryByText, debug } = render( <BigFlashCard
      flashCard={ { question: 'question', answer: 'answer' } }/> );
    const card = getByTestId( 'StyledCardContainer' );
    fireEvent.click( card );
    expect( queryByText( 'answer' ) ).toBeInTheDocument();
    //debug(queryByText('answer'))
  } );
  
} );