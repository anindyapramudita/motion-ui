import { render } from '@testing-library/react';
import { Button } from '@/index';

describe('Button Component', () => {
  test('renders with default props', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const buttonElement = getByText('Click Me');

    expect(buttonElement).toBeInTheDocument();
  });

  test('renders loading icon if isLoading is true', () => {
    const { getByTestId } = render(<Button isLoading>Click Me</Button>);
    const loadingIconElement = getByTestId('loading-icon');

    expect(loadingIconElement).toBeInTheDocument();
  });
});
