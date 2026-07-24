import { FeaturesSection } from '../components/home/FeaturesSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

export default function Index() {
  return (
    <div>
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
}
