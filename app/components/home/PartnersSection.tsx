import { Link } from '@remix-run/react';

export function PartnersSection() {
  const partners = [
    { name: 'PayPal', description: 'Payment Partner' },
    { name: 'Stripe', description: 'Payment Partner' },
    { name: 'UPS', description: 'Logistics Partner' },
    { name: 'DHL', description: 'Logistics Partner' },
    { name: 'Amazon', description: 'Platform Partner' },
    { name: 'eBay', description: 'Platform Partner' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-gray-600">
            Trusted Partners
          </p>
          <p className="text-gray-500 mt-2">
            Long-term cooperative relationships with world-renowned enterprises
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="font-semibold text-gray-900">{partner.name}</div>
              <div className="text-xs text-gray-500">{partner.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-orange-500 to-orange-600">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Cross-Border Journey?
          </h2>
          <p className="text-white/80 mb-8">
            Join us and let our professional team help you achieve your import dreams. Consult now and enjoy exclusive discounts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg"
            >
              Get a Free Consultation
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}