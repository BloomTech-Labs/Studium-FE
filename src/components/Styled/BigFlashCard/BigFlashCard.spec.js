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
  toHaveTextContent,wait
} from '../../../utilities/test-utils';
import BigFlashCard from './BigFlashCard';
import {renderer, act, create} from 'react-test-renderer';
import { render } from '@testing-library/react';


/**
 * Test the big flash card
 */

describe('Big Flash Card', () => {
    test('position front', () => {
    const { container, getByText } = render(<BigFlashCard flashCard = {{question: "question", answer: "answer"}}/>)
    expect(getByText('question')).toBeInTheDocument()
  })
    test('position back', () => {
    const { container, getByTestId, queryByText, debug} = render(<BigFlashCard flashCard = {{question: "question", answer: "answer"}}/>)
    const card = getByTestId('StyledCardContainer')
    fireEvent.click(card)
    expect(queryByText('answer')).toBeInTheDocument()
    //debug(queryByText('answer'))
  })
});