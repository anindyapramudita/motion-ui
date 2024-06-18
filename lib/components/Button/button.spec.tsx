import { render } from '@testing-library/react';
import { Button } from '@/index';

describe('Button', () => {
  test('renders heading', async () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
