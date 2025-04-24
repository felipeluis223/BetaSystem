import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginButton from '.';

describe('LoginButton', () => {
    it('deve renderizar com o texto "Login"', () => {
      render(<LoginButton />);
      expect(screen.getByText(/login/i)).toBeInTheDocument();
    });
  });
  