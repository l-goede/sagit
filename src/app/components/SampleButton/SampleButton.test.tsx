import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './SampleButton';

test('renders Start Button', () => {
  render(<Button>Start</Button>);
  expect(screen.getByRole('button').innerHTML).toBe('Start');
});
