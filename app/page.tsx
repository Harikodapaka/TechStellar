import { AboutUs } from '@/components/AboutUs/AboutUs';
import { HaveIdeaSection } from '@/components/HaveIdeaSection/HaveIdeaSection';
import { IntroSection } from '@/components/IntroSection/IntroSection';
import { ServicesSection } from '@/components/ServicesSection/ServicesSection';

export default function HomePage() {
  return (
    <>
      <IntroSection />
      <ServicesSection />
      <AboutUs />
      <HaveIdeaSection />
    </>
  );
}
