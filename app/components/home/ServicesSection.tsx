import { Link } from '@remix-run/react';
import { useTranslation } from '~/hooks/useTranslation';

export function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      title: t('home.oneStopSolutions'),
      description: t('home.oneStopSolutionsDesc'),
      features: [
        'Store Registration',
        'Product Listing',
        'Operations Optimization',
        'Data Analysis',
      ],
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Ecommerce%20dashboard%20with%20analytics%20charts&image_size=square',
      link: '/services',
    },
    {
      title: t('home.warehousingLogistics'),
      description: t('home.warehousingLogisticsDesc'),
      features: [
        'Global Warehousing',
        'Intelligent Distribution',
        'Fast Delivery',
        'Real-time Tracking',
      ],
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20logistics%20warehouse%20with%20robots&image_size=square',
      link: '/solutions/shipping',
    },
    {
      title: t('home.paymentSolutions'),
      description: t('home.paymentSolutionsDesc'),
      features: [
        'Multi-Platform Payment',
        'Multi-Currency Support',
        'Security Guarantee',
        'Fast Settlement',
      ],
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Secure%20payment%20transaction%20interface&image_size=square',
      link: '/payment-information',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t('home.servicesTitle')}
          </h2>
          <p className="text-gray-600">{t('home.servicesSubtitle')}</p>
          <p className="text-gray-500 mt-2">
            Full-chain cross-border e-commerce services, meeting all your needs
            from store opening to operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
