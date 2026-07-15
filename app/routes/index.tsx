import { HeroBanner } from '../components/home/HeroBanner';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { PartnersSection } from '../components/home/PartnersSection';
import { StatsSection } from '../components/home/StatsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

export default function Index() {
  return (
    <div>
      <HeroBanner />
      <FeaturesSection />
      <ServicesSection />
      <StatsSection />
      <PartnersSection />
      <TestimonialsSection />
    </div>
  );
}
