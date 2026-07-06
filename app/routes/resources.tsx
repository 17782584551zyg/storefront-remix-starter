export default function ResourcesPage() {
  const chapters = [
    {
      number: 1,
      title: 'Chapter 1',
      subtitle: 'How Much USD Budget May You Need?',
      duration: '13 mins video, 7 mins read',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Budget%20planning%20for%20importing%20business&image_size=landscape_4_3',
    },
    {
      number: 2,
      title: 'Chapter 2',
      subtitle: 'What Products to Import from China to Make Good Money?',
      duration: '15 mins video, 7 mins read',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Product%20selection%20and%20market%20research&image_size=landscape_4_3',
    },
    {
      number: 3,
      title: 'Chapter 3',
      subtitle: 'How to Do Product Research Before Import from China?',
      duration: '20 mins video, 8 mins read',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Product%20research%20and%20analysis%20workspace&image_size=landscape_4_3',
    },
    {
      number: 4,
      title: 'Chapter 4',
      subtitle: 'How to Find Chinese Suppliers Online?',
      duration: '18 mins video, 8 mins read',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Finding%20suppliers%20on%20online%20platforms&image_size=landscape_4_3',
    },
    {
      number: 5,
      title: 'Chapter 5',
      subtitle: 'How to Find Suppliers by Visiting China?',
      duration: '24 mins video, 7.5 mins read',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Business%20trip%20to%20China%20factories&image_size=landscape_4_3',
    },
    {
      number: 6,
      title: 'Chapter 6',
      subtitle: '8 Aspects to Help Check Chinese Suppliers',
      duration: '18 mins video, 6 mins read',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Supplier%20verification%20and%20quality%20check&image_size=landscape_4_3',
    },
    {
      number: 7,
      title: 'Chapter 7',
      subtitle: 'How to Get Precise Quotes? Which Trade Terms Quoted Best?',
      duration: '17 mins video, 6 mins read',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Price%20quotation%20and%20negotiation&image_size=landscape_4_3',
    },
    {
      number: 8,
      title: 'Chapter 8',
      subtitle: 'How to Choose the Best Supplier? 15 Checklist?',
      duration: '11 mins video, 7 mins read',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Supplier%20comparison%20and%20selection&image_size=landscape_4_3',
    },
    {
      number: 9,
      title: 'Chapter 9',
      subtitle: '6 Details to Confirm with Chinese Supplier Beforehand.',
      duration: '15 mins video, 7 mins read',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Contract%20negotiation%20with%20suppliers&image_size=landscape_4_3',
    },
    {
      number: 10,
      title: 'Chapter 10',
      subtitle: 'How to Find the Best Shipping Solutions?',
      duration: '25 mins video, 12 mins read',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shipping%20and%20logistics%20planning&image_size=landscape_4_3',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Exclusive Tips About Importing from China
          </h1>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Many people want to import goods from China, but always worrying about things like language barriers, complicated international trade process, scams, or bad quality products. In this most practical guide, it's easy for you to learn all knowledge of the whole importing process from choosing profitable products to checking suppliers. To help you understand better, a corresponding video course of each step will be provided.
          </p>
          <div className="animate-bounce">
            <svg className="w-8 h-8 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Episode Guide</h2>
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
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{chapter.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{chapter.subtitle}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary text-sm font-medium">Watch Video</span>
                    <span className="text-gray-500 text-xs">{chapter.duration}</span>
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
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Ebook Resource</h3>
                  <p className="text-sm text-gray-500">Free Resource</p>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  Download Now
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Get Our Monthly Report</h3>
                  <p className="text-sm text-gray-500">Free Report</p>
                </div>
              </div>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Ready to import from China?</h3>
                  <p className="text-sm text-gray-500">Get 1-1 agent</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Ask for 1-1 agent to help you start your importing business now!
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
                >
                  Get a Free Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}