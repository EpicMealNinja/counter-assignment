// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';
import { fireEvent } from '@testing-library/react';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/count/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const plusButton = screen.getByText('+');
  fireEvent.click(plusButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const minusButton = screen.getByText('-');
  fireEvent.click(minusButton);
  const count = screen.getByTestId('count');
  expect(count).toHaveTextContent('-1');
});
