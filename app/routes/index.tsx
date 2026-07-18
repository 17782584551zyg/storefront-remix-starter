import { HeroBanner } from '../components/home/HeroBanner';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

export default function Index() {
  return (
    <div>
      <HeroBanner />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
