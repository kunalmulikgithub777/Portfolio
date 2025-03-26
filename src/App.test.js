import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar with logo', () => {
  render(<App />);
  expect(screen.getByText(/my portfolio/i)).toBeInTheDocument();
});
