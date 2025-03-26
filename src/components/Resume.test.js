import { render, screen } from '@testing-library/react';
import Resume from './Resume';

test('renders resume section', () => {
  render(<Resume />);
  expect(screen.getByText(/download resume/i)).toBeInTheDocument();
});
