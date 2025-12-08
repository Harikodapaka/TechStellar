import CareersJobList from '@/components/Careers/CareersJobList';
import type { Job } from '@/components/Careers/CareersJobList';
import { render, screen } from '@/test-utils/render';

describe('CareersJobList Component', () => {
  const mockJobs: Job[] = [
    {
      id: 'test-job-1',
      title: 'Frontend Engineer',
      location: 'Remote',
      type: 'Full-time',
      summary: 'Build UI components',
      responsibilities: ['Build components', 'Write tests'],
      qualifications: ['3+ years React', 'TypeScript'],
      posted: '2025-12-08',
    },
    {
      id: 'test-job-2',
      title: 'Backend Engineer',
      location: 'Toronto',
      type: 'Full-time',
      summary: 'Build APIs',
      responsibilities: ['Design APIs', 'Database optimization'],
      qualifications: ['4+ years backend', 'Node.js'],
      posted: '2025-12-07',
    },
  ];

  it('renders the job list', () => {
    render(<CareersJobList jobs={mockJobs} />);
    expect(screen.getByText(/frontend engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/backend engineer/i)).toBeInTheDocument();
  });

  it('displays job summaries', () => {
    render(<CareersJobList jobs={mockJobs} />);
    expect(screen.getByText(/build ui components/i)).toBeInTheDocument();
    expect(screen.getByText(/build apis/i)).toBeInTheDocument();
  });

  it('displays location badges', () => {
    render(<CareersJobList jobs={mockJobs} />);
    expect(screen.getByText(/remote/i)).toBeInTheDocument();
    expect(screen.getByText(/toronto/i)).toBeInTheDocument();
  });

  it('displays job type badges', () => {
    render(<CareersJobList jobs={mockJobs} />);
    const fullTimeBadges = screen.getAllByText(/full-time/i);
    expect(fullTimeBadges.length).toBeGreaterThan(0);
  });

  it('renders empty list when no jobs provided', () => {
    const { container } = render(<CareersJobList jobs={[]} />);
    expect(container).toBeInTheDocument();
  });

  it('displays apply buttons for each job', () => {
    render(<CareersJobList jobs={mockJobs} />);
    const applyButtons = screen.queryAllByText(/apply/i);
    expect(applyButtons.length).toBeGreaterThan(0);
  });
});
