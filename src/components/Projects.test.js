import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders all project titles', () => {
  render(<Projects />);
  expect(screen.getByText(/Book Management System/i)).toBeInTheDocument();
  expect(screen.getByText(/Bus Reservation System/i)).toBeInTheDocument();
  expect(screen.getByText(/Online Portfolio/i)).toBeInTheDocument();
});
