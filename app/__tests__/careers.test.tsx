import { render, screen } from '@/test-utils/render';
import CareersPage from '../careers/page';

describe('Careers Page', () => {
  it('renders the careers page', () => {
    render(<CareersPage />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('displays the careers header section', () => {
    render(<CareersPage />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('renders the current openings section', () => {
    render(<CareersPage />);
    const currentOpenings = screen.queryByText(/current openings/i);
    expect(currentOpenings).toBeInTheDocument();
  });

  it('renders filter inputs', () => {
    render(<CareersPage />);
    const searchInput = screen.getByPlaceholderText(/search by job title/i);
    expect(searchInput).toBeInTheDocument();
  });

  it('renders job type filter dropdown', () => {
    render(<CareersPage />);
    const filterLabels = screen.getAllByText(/job type/i);
    expect(filterLabels.length).toBeGreaterThan(0);
  });
});
