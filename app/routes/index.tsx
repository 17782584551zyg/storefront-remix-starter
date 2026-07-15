import { HeroBanner } from '../components/home/HeroBanner';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { PartnersSection } from '../components/home/PartnersSection';
import { StatsSection } from '../components/home/StatsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { useLoaderData } from '@remix-run/react';

export default function Index() {
  const { activeChannel } = useLoaderData<{
    activeChannel: { customFields: { bannerImages?: Array<{ id: string; preview: string }> } };
  }>();
  
  const bannerImages = activeChannel?.customFields?.bannerImages || [];
  
  return (
    <div>
      <HeroBanner bannerImages={bannerImages} />
      <FeaturesSection />
      <ServicesSection />
      <StatsSection />
      <PartnersSection />
      <TestimonialsSection />
    </div>
  );
}
