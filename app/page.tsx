import { HaveIdeaSection } from '@/components/HaveIdeaSection/HaveIdeaSection';
import { IntroSection } from '@/components/IntroSection/IntroSection';
import { ServicesSection } from '@/components/ServicesSection/ServicesSection';

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <ServicesSection />
      <HaveIdeaSection />
    </>
  );
}
