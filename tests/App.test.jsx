import { render, screen } from '@testing-library/react';

import App from '../src/App';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    // check if App components renders headline
    expect(screen.getByTestId("heading")).toHaveTextContent("Sirojiddin Aripov")
  });
});