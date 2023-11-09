import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import App from './App';

describe(App, () => {
  test(`Renders correctly`, () => {
    const app = render(<App />);
    expect(app).toMatchSnapshot();
  });

  const { getByTestId } = screen;
  beforeEach(() => {
    render(<App />);
  });
  afterEach(cleanup);

  test('Good timer inital value is correct', () => {
    const timerContainer = getByTestId('good-timer');
    expect(timerContainer.textContent).toEqual('Good Timer:0.00');
  });

  test('Good timer is incrementing its value over time', async () => {
    const timerContainer = getByTestId('good-timer');
    const firstValue = Number(
      timerContainer.textContent?.split('Good Timer:')[1]
    );
    await waitFor(() =>
      expect(
        Number(timerContainer.textContent?.split('Good Timer:')[1])
      ).toBeGreaterThan(firstValue)
    );
  });

  test('Bad timer inital value is correct', () => {
    const timerContainer = getByTestId('bad-timer');
    expect(timerContainer.textContent).toEqual('Bad Timer:0.00');
  });

  test('Bad timer is incrementing its value over time', async () => {
    const timerContainer = getByTestId('bad-timer');
    const firstValue = Number(
      timerContainer.textContent?.split('Bad Timer:')[1]
    );
    await waitFor(() =>
      expect(
        Number(timerContainer.textContent?.split('Bad Timer:')[1])
      ).toBeGreaterThan(firstValue)
    );
  });
});
