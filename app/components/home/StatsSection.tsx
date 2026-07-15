import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function StatsSection() {
  const { t } = useTranslation();

  const stats = [
    {
      value: 4000,
      suffix: '',
      label: t('home.statsClients'),
      description: t('home.statsClientsDesc'),
    },
    {
      value: 120,
      suffix: '+',
      label: t('home.statsCountries'),
      description: t('home.statsCountriesDesc'),
    },
    {
      value: 300,
      suffix: 'W+',
      label: t('home.statsRevenue'),
      description: t('home.statsRevenueDesc'),
    },
    {
      value: 100,
      suffix: '+',
      label: t('home.statsTeam'),
      description: t('home.statsTeamDesc'),
    },
  ];

  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            stats.forEach((stat, index) => {
              const duration = 2000;
              const steps = 60;
              const increment = stat.value / steps;
              let current = 0;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  clearInterval(timer);
                  const newCounts = [...counts];
                  newCounts[index] = stat.value;
                  setCounts(newCounts);
                } else {
                  const newCounts = [...counts];
                  newCounts[index] = Math.floor(current);
                  setCounts(newCounts);
                }
              }, duration / steps);
            });
          }
        });
      },
      { threshold: 0.3 },
    );

    const section = document.getElementById('stats-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated, counts]);

  return (
    <section
      id="stats-section"
      className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('home.numbersSpeak')}
          </h2>
          <p className="text-white/80">{t('home.ourAchievements')}</p>
          <p className="text-white/60 mt-2">{t('home.dataTrust')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-white/60">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
