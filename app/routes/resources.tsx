import { useTranslation } from '~/hooks/useTranslation';

export default function ResourcesPage() {
  const { t } = useTranslation();

  const chapters = [
    {
      number: 1,
      title: t('resources.chapter1'),
      subtitle: t('resources.chapter1Sub'),
      duration: '13 mins video, 7 mins read',
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Budget%20planning%20for%20importing%20business&image_size=landscape_4_3',
    },
    {
      number: 2,
      title: t('resources.chapter2'),
      subtitle: t('resources.chapter2Sub'),
      duration: '15 mins video, 7 mins read',
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Product%20selection%20and%20market%20research&image_size=landscape_4_3',
    },
    {
      number: 3,
      title: t('resources.chapter3'),
      subtitle: t('resources.chapter3Sub'),
      duration: '20 mins video, 8 mins read',
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Product%20research%20and%20analysis%20workspace&image_size=landscape_4_3',
    },
    {
      number: 4,
      title: t('resources.chapter4'),
      subtitle: t('resources.chapter4Sub'),
      duration: '18 mins video, 8 mins read',
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Finding%20suppliers%20on%20online%20platforms&image_size=landscape_4_3',
    },
    {
      number: 5,
      title: t('resources.chapter5'),
      subtitle: t('resources.chapter5Sub'),
      duration: '24 mins video, 7.5 mins read',
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20trip%20to%20China%20factories&image_size=landscape_4_3',
    },
    {
      number: 6,
      title: t('resources.chapter6'),
      subtitle: t('resources.chapter6Sub'),
      duration: '18 mins video, 6 mins read',
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Supplier%20verification%20and%20quality%20check&image_size=landscape_4_3',
    },
    {
      number: 7,
      title: t('resources.chapter7'),
      subtitle: t('resources.chapter7Sub'),
      duration: '17 mins video, 6 mins read',
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Price%20quotation%20and%20negotiation&image_size=landscape_4_3',
    },
    {
      number: 8,
      title: t('resources.chapter8'),
      subtitle: t('resources.chapter8Sub'),
      duration: '11 mins video, 7 mins read',
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Supplier%20comparison%20and%20selection&image_size=landscape_4_3',
    },
    {
      number: 9,
      title: t('resources.chapter9'),
      subtitle: t('resources.chapter9Sub'),
      duration: '15 mins video, 7 mins read',
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Contract%20negotiation%20with%20suppliers&image_size=landscape_4_3',
    },
    {
      number: 10,
      title: t('resources.chapter10'),
      subtitle: t('resources.chapter10Sub'),
      duration: '25 mins video, 12 mins read',
      image:
        'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shipping%20and%20logistics%20planning&image_size=landscape_4_3',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('resources.title')}
          </h1>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            {t('resources.description')}
          </p>
          <div className="animate-bounce">
            <svg
              className="w-8 h-8 text-white mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('resources.episodeGuide')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                <div className="relative">
                  <img
                    src={chapter.image}
                    alt={chapter.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {chapter.number}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {chapter.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {chapter.subtitle}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary text-sm font-medium">
                      {t('resources.watchVideo')}
                    </span>
                    <span className="text-gray-500 text-xs">
                      {chapter.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {t('resources.ebookResource')}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t('resources.freeResource')}
                  </p>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t('resources.firstName')}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder={t('resources.lastName')}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  type="email"
                  placeholder={t('resources.yourEmail')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  {t('resources.downloadNow')}
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {t('resources.monthlyReport')}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t('resources.freeReport')}
                  </p>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={t('resources.firstName')}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder={t('resources.lastName')}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  type="email"
                  placeholder={t('resources.yourEmail')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  {t('resources.subscribeNow')}
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">
                    {t('resources.readyImport')}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t('resources.getAgent')}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{t('resources.askAgent')}</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t('resources.firstName')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder={t('resources.yourEmail')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  {t('resources.getQuote')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
