export default function DropshippingPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            We Help You Dropship Worldwide
          </h1>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            In addition to shipping your products in bulk, we can also deliver your products individually to your end customers if you make a single order worth $1,000 or more under our <span className="font-semibold">Pro Plan</span> or <span className="font-semibold">Basic Plan</span>.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose TaiSourcing for Dropshipping
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-colors duration-300">
              <h3 className="text-lg font-bold text-orange-600 mb-3">Competitive Product Price</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We specialize in finding and sourcing directly from competitive factories, setting us apart from typical dropshipping agencies that primarily work with wholesalers and only assist clients in purchasing ready-made products.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors duration-300">
              <h3 className="text-lg font-bold text-blue-600 mb-3">Lower Logistics & Fulfillment Costs</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Unlike typical dropshipping companies, we prioritize sourcing as our main profit source and don't have profit expectations on logistics. Dropshipping is simply a convenient logistics solution we provide to our clients.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-colors duration-300">
              <h3 className="text-lg font-bold text-orange-600 mb-3">More Customization Flexibility</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                As an experienced sourcing company, we excel in customizing and manufacturing products. We can assist you in product development, packaging customization, and other tasks that other dropshipping companies may not offer.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-colors duration-300">
              <h3 className="text-lg font-bold text-blue-600 mb-3">In-house IT Solutions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether your store is set up on platforms like Shopify or you have a self-built system, our dedicated IT team can seamlessly integrate your store with our systems and provide comprehensive technical support.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Start Dropshipping
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Dropship with TaiSourcing in 4 Simple Steps
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-16 h-0.5 bg-orange-500" />
              <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <div className="w-16 h-0.5 bg-orange-500" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Submit your inquiry and choose a service plan.</h3>
                  <p className="text-gray-600 text-sm">Tell us about your products and requirements to get started.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">We follow up on production and collect products to our warehouse.</h3>
                  <p className="text-gray-600 text-sm">Quality inspection and professional packaging.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">We integrate your store with our system and fulfill orders for your end customers.</h3>
                  <p className="text-gray-600 text-sm">Automated order sync and fast shipping.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">The system automatically updates logistics tracking and order status.</h3>
                  <p className="text-gray-600 text-sm">Real-time tracking for you and your customers.</p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Woman%20business%20owner%20working%20in%20warehouse%20with%20laptop%20and%20shipping%20boxes%20ecommerce%20fulfillment&image_size=landscape_4_3"
                alt="Dropshipping Process"
                className="w-full aspect-video object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get in Touch to Start Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}