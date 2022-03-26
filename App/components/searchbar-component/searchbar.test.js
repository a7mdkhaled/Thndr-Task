import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import SearchBar from './searchbar.component';

test('Testing Search!', () => {
  const mockFn = jest.fn();
  const { getByTestId } = render(<SearchBar onTextChange={mockFn} />);
  const Input = getByTestId('search');
  fireEvent.changeText(Input, 'Apple');
  expect(mockFn).toBeCalledWith('Apple');
});
