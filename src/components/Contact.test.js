import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Contact from './Contact';

test('shows error when submitting empty form', () => {
  render(<Contact />);
  fireEvent.click(screen.getByText(/Send Message/i));
  expect(screen.getByText(/Please fill in all fields/i)).toBeInTheDocument();
});

test('shows error on invalid email', () => {
  render(<Contact />);
  fireEvent.change(screen.getByPlaceholderText(/Your Name/i), {
    target: { value: 'John Doe' },
  });
  fireEvent.change(screen.getByPlaceholderText(/Your Email/i), {
    target: { value: 'invalid-email' },
  });
  fireEvent.change(screen.getByPlaceholderText(/Your Message/i), {
    target: { value: 'Hello!' },
  });
  fireEvent.click(screen.getByText(/Send Message/i));
  expect(screen.getByText(/Please enter a valid email/i)).toBeInTheDocument();
});

test('submits form with valid data', () => {
  render(<Contact />);
  fireEvent.change(screen.getByPlaceholderText(/Your Name/i), {
    target: { value: 'Jane' },
  });
  fireEvent.change(screen.getByPlaceholderText(/Your Email/i), {
    target: { value: 'jane@example.com' },
  });
  fireEvent.change(screen.getByPlaceholderText(/Your Message/i), {
    target: { value: 'This is a message.' },
  });
  fireEvent.click(screen.getByText(/Send Message/i));
  expect(screen.getByText(/Thank you for your message/i)).toBeInTheDocument();
});
