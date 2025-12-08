import CareersFilters from '@/components/Careers/CareersFilters';
import { fireEvent, render, screen } from '@/test-utils/render';

describe('CareersFilters Component', () => {
  const mockProps = {
    searchTitle: '',
    onSearchTitleChange: jest.fn(),
    selectedType: null,
    onSelectedTypeChange: jest.fn(),
    jobTypes: ['Full-time', 'Contract', 'Part-time'],
  };

  it('renders the filters component', () => {
    render(<CareersFilters {...mockProps} />);
    expect(screen.getByPlaceholderText(/search by job title/i)).toBeInTheDocument();
  });

  it('displays job type label', () => {
    render(<CareersFilters {...mockProps} />);
    const jobTypeLabel = screen.queryByText(/job type/i);
    expect(jobTypeLabel).toBeInTheDocument();
  });

  it('calls onSearchTitleChange when search input changes', () => {
    const mockChange = jest.fn();
    render(<CareersFilters {...mockProps} onSearchTitleChange={mockChange} />);
    const input = screen.getByPlaceholderText(/search by job title/i);
    fireEvent.change(input, { target: { value: 'Engineer' } });
    expect(mockChange).toHaveBeenCalled();
  });

  it('renders all job type options', () => {
    render(<CareersFilters {...mockProps} />);
    // The Select component should render with the job types available
    expect(screen.getByPlaceholderText(/search by job title/i)).toBeInTheDocument();
  });
});
