import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio content', async () => {
  render(<App />);
  const welcomeElement = await screen.findByText(/WELCOME TO MY WORLD/i);
  expect(welcomeElement).toBeInTheDocument();
});
