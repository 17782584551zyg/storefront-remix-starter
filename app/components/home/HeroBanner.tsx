import { Link } from '@remix-run/react';

export function HeroBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              One-Stop Cross-Border E-commerce Solutions
            </h1>
            <p className="text-lg mb-8 opacity-90">
              We help you easily import from China
            </p>
            <p className="text-white/80 mb-8 max-w-xl mx-auto md:mx-0">
              Focused on cross-border e-commerce, providing full-chain service support to help Chinese brands go global. From product sourcing, logistics to payment, one-stop solution for your import challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/services"
                className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Find new suppliers
              </Link>
            </div>
            <p className="text-sm mt-4 text-white/70 text-center md:text-left">
              No experience needed, our expert agents will handle it all for you.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-8 mt-12">
              {[
                { number: '4000+', label: 'Clients' },
                { number: '120+', label: 'Countries' },
                { number: '500M+', label: 'Annual Revenue' },
                { number: '200+', label: 'Team Members' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20ecommerce%20warehouse%20with%20shipping%20boxes%20and%20technology&image_size=landscape_4_3"
              alt="E-commerce Solutions"
              className="w-full max-w-lg mx-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}