import Careers from '@/components/Careers/Careers';
import { render, screen } from '@/test-utils/render';

describe('Careers Component', () => {
  it('renders the careers component', () => {
    render(<Careers />);
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('displays the team heading', () => {
    render(<Careers />);
    const heading = screen.queryByText(/join the team/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders current openings heading', () => {
    render(<Careers />);
    const currentOpenings = screen.queryByText(/current openings/i);
    expect(currentOpenings).toBeInTheDocument();
  });

  it('renders search and filter controls', () => {
    render(<Careers />);
    const searchInput = screen.getByPlaceholderText(/search by job title/i);
    const jobTypeLabel = screen.queryByText(/job type/i);
    expect(searchInput).toBeInTheDocument();
    expect(jobTypeLabel).toBeInTheDocument();
  });
});
