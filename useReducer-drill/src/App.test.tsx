import App from './App';
import { describe, test, expect, afterEach, beforeEach } from 'vitest';
import { render, act, cleanup, screen } from '@testing-library/react';

describe(App, () => {
  const { getByTestId, getByText } = screen;

  test('Renders correctly', () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });

  beforeEach(() => {
    render(<App />);
  });

  afterEach(cleanup);

  test('Counts start with a correct initial value', () => {
    const countValue = getByTestId('count display').textContent;
    const count2Value = getByTestId('count2 display').textContent;

    expect([countValue, count2Value]).toEqual(['Count: 0', 'Count2: 0']);
  });

  test('First count is incrementing correctly', () => {
    const countValue = getByTestId('count display');
    expect(countValue.textContent).toEqual('Count: 0');
    const countButton = getByText('Increment Count');
    act(() => countButton.click());
    expect(countValue.textContent).toEqual('Count: 1');
    act(() => countButton.click());
    expect(countValue.textContent).toEqual('Count: 2');
  });

  test('First count is decremented correctly', () => {
    const countValue = getByTestId('count display');
    expect(countValue.textContent).toEqual('Count: 0');
    const countButton = getByText('Decrement Count');
    act(() => countButton.click());
    expect(countValue.textContent).toEqual('Count: -1');
    act(() => countButton.click());
    expect(countValue.textContent).toEqual('Count: -2');
  });

  test('Second count2 is incrementing correctly', () => {
    const count2Value = getByTestId('count2 display');
    expect(count2Value.textContent).toEqual('Count2: 0');
    const count2Button = getByText('Increment Count2');
    act(() => count2Button.click());
    expect(count2Value.textContent).toEqual('Count2: 1');
    act(() => count2Button.click());
    expect(count2Value.textContent).toEqual('Count2: 2');
  });

  test('Second count2 is decremented correctly', () => {
    const count2Value = getByTestId('count2 display');
    expect(count2Value.textContent).toEqual('Count2: 0');
    const count2Button = getByText('Decrement Count2');
    act(() => count2Button.click());
    expect(count2Value.textContent).toEqual('Count2: -1');
    act(() => count2Button.click());
    expect(count2Value.textContent).toEqual('Count2: -2');
  });
});
