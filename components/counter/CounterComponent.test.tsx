import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CounterComponent from './CounterComponent';
import test, { describe } from 'node:test';

describe('CounterComponent', () => {
  test('renders the component title', () => {
    render(<CounterComponent />);
    const titleElement = screen.getByTestId('title');
    expect(titleElement).toHaveTextContent('Counter Component');
  });

  test('initial count is 0', () => {
    render(<CounterComponent />);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent('Current count: 0');
  });

  test('increments the counter when increment button is clicked', () => {
    render(<CounterComponent />);
    const incrementButton = screen.getByTestId('increment-btn');
    fireEvent.click(incrementButton);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent('Current count: 1');
  });

  test('decrements the counter when decrement button is clicked', () => {
    render(<CounterComponent />);
    const decrementButton = screen.getByTestId('decrement-btn');
    fireEvent.click(decrementButton);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent('Current count: -1');
  });
});
