  
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SplashPage from "./SplashPage";

test('Tests for the SplashPage', async() => {
   render(<SplashPage />);

   const h2Tag = screen.getByText(/A place for students to create flashcards, share, and learn/i);
   expect(h2Tag).toBeInTheDocument();

    // const email = screen.getByLabelText(/email/i);
    // fireEvent.change(email, { target: { value: 'jr@junior.com' } });
  
    // const startedButton = screen.getByRole('button');
    // fireEvent.click(startedButton);    
  })

