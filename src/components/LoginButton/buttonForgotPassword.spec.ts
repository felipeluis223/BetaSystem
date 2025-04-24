// src/components/Buttons.test.tsx
import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ForgotPassword from './';


describe('ForgotPassword button', () => {
  it('deve renderizar com o texto "Esqueceu a senha?"', () => {
    render(<ForgotPassword />);
    expect(screen.getByText(/esqueceu a senha\?/i)).toBeInTheDocument();
  });
});
