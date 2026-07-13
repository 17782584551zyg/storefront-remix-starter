import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export function HeroBanner() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    '/assets/banner/slide1.jpg',
    '/assets/banner/slide2.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative py-20 text-white overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ))}
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              {t('home.heroTitle')}
            </h1>
            <p className="text-lg mb-8 opacity-90">
              {t('home.heroSubtitle')}
            </p>
            <p className="text-white/80 mb-8 max-w-xl mx-auto md:mx-0">
              {t('home.heroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/services"
                className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('home.findSuppliers')}
              </Link>
            </div>
            <p className="text-sm mt-4 text-white/70 text-center md:text-left">
              {t('home.noExperience')}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-8 mt-12">
              {[
                { number: '4000+', label: t('home.clients') },
                { number: '120+', label: t('home.countries') },
                { number: '500M+', label: t('home.annualRevenue') },
                { number: '200+', label: t('home.teamMembers') },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}