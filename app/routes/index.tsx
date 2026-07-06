import { HeroBanner } from '~/components/home/HeroBanner';
import { FeaturesSection } from '~/components/home/FeaturesSection';
import { StatsSection } from '~/components/home/StatsSection';
import { ServicesSection } from '~/components/home/ServicesSection';
import { TestimonialsSection } from '~/components/home/TestimonialsSection';
import { PartnersSection, CtaSection } from '~/components/home/PartnersSection';

export default function Index() {
  return (
    <>
      <HeroBanner />
      <FeaturesSection />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
    </>
  );
}