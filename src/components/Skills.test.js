import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('renders skills section', () => {
  render(<Skills />);
  expect(screen.getByText(/react/i)).toBeInTheDocument();
});
