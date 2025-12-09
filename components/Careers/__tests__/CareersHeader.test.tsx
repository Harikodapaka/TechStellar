import CareersHeader from '@/components/Careers/CareersHeader';
import { render, screen } from '@/test-utils/render';

describe('CareersHeader Component', () => {
  it('renders the careers header', () => {
    render(<CareersHeader />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('displays the main title with TechStellar', () => {
    render(<CareersHeader />);
    const heading = screen.queryByText(/join the team/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the view open positions button', () => {
    render(<CareersHeader />);
    const button = screen.getByRole('link', { name: /view open positions/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '#current-openings');
  });

  it('displays recruitment approach section', () => {
    render(<CareersHeader />);
    const recruitment = screen.queryByText(/our recruitment approach/i);
    expect(recruitment).toBeInTheDocument();
  });

  it('displays grow with us section', () => {
    render(<CareersHeader />);
    const growSection = screen.queryByText(/grow with us/i);
    expect(growSection).toBeInTheDocument();
  });
});
