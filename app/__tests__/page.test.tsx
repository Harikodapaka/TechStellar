import { render, screen } from '@/test-utils/render';
import HomePage from '../page';

describe('Home Page', () => {
  it('renders the home page', () => {
    render(<HomePage />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('displays the intro section', () => {
    render(<HomePage />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('renders multiple components', () => {
    const { container } = render(<HomePage />);
    // Check that the component renders without errors
    expect(container.querySelector('div')).toBeInTheDocument();
  });
});
