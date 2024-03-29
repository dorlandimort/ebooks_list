import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders audiobooks header', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Audiolibros/i);
  expect(headerElement).toBeInTheDocument();
});
