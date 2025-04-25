// src/components/Buttons.test.tsx
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import EmailInput from './';


describe('ForgotPassword button', () => {
  it('deve renderizar o input do email: "', () => {
    render(<EmailInput />);
  });
});
