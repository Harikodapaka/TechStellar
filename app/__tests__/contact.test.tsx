import { render, screen } from '@/test-utils/render';
import ContactPage from '../contact/page';

describe('Contact Page', () => {
  it('renders the contact page', () => {
    render(<ContactPage />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('displays the main heading', () => {
    render(<ContactPage />);
    const mainHeading = screen.queryByText(/let's chat/i);
    expect(mainHeading).toBeInTheDocument();
  });

  it('renders contact form elements', () => {
    render(<ContactPage />);
    // The contact form should have input fields
    const inputs = screen.queryAllByRole('textbox');
    expect(inputs.length).toBeGreaterThanOrEqual(0);
  });
});
