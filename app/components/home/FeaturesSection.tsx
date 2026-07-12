import { useTranslation } from 'react-i18next';

export function FeaturesSection() {
  const { t } = useTranslation();
  const features = [
    {
      icon: 'warehouse',
      title: t("home.globalWarehousing"),
      description: t("home.globalWarehousingDesc"),
    },
    {
      icon: 'search',
      title: t("home.professionalSourcing"),
      description: t("home.professionalSourcingDesc"),
    },
    {
      icon: 'truck',
      title: t("home.fullChainLogistics"),
      description: t("home.fullChainLogisticsDesc"),
    },
    {
      icon: 'credit-card',
      title: t("home.multiCurrencyPayment"),
      description: t("home.multiCurrencyPaymentDesc"),
    },
  ];

  const iconPaths: Record<string, string> = {
    warehouse: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v4h4v3l4-7h-4V7z',
    truck: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
    'credit-card': 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z',
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('home.coreAdvantages')}
          </h2>
          <p className="text-gray-600">
            {t('home.whyChooseUs')}
          </p>
          <p className="text-gray-500 mt-2">
            {t('home.chooseUsDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[feature.icon]} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
