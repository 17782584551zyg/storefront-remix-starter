export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Trusted Sourcing Partner in China
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                TaiSourcing was founded in Yiwu, China, in 2015 and has grown into a team of more than 200 professionals. Our sole focus is to simplify the sourcing process for businesses looking to import from China.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the years, more than 5,000 small and medium-sized businesses have trusted us for all-in-one sourcing services, from supplier sourcing to door-to-door logistics. Today, 70% of our clients are engaged in e-commerce, and 70% of the products we source are exported to North America and Europe.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20businessman%20giving%20presentation%20in%20office%20meeting%20room&image_size=landscape_16_9"
                  alt="Company Video"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300 shadow-lg">
                    <svg className="w-8 h-8 text-orange-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-black/70 text-white px-4 py-2 rounded-lg">
                <span>5:22</span>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 6l-12 8 12 8V6zM6 6l12 8-12 8V6z" />
                  </svg>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4C7.5 4 4 7.5 4 12s3.5 8 8 8 8-3.5 8-8-3.5-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm1-10h-2v6l5.2 3.2.8-1.3-4-2.4V8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="flex-shrink-0">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Company%20brochure%20booklet%20with%20orange%20design%20cover&image_size=portrait_4_3"
                alt="Company Brochure"
                className="w-32 h-40 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Download Our Company Brochure</h3>
              <p className="text-gray-600 mb-6">
                Get a quick overview of our sourcing services, workflow, factory resources, and real client cases—all in one brochure.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Download
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              What Makes Us Unique
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Competitive Prices</h3>
              <p className="text-gray-600 leading-relaxed">
                We always encourage our clients to compare our quotes with those they receive from other suppliers before selecting our service plans. Over 90% of them choose our Pro Plan because we consistently offer the most competitive prices.
              </p>
            </div>

            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed">
                We place a strong emphasis on product quality. We conduct thorough inspections of products before we ship them out. And we are the only sourcing company that provides 1-by-1 product inspections to minimize the defect rate to 0.
              </p>
            </div>

            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">In-house Production Department</h3>
              <p className="text-gray-600 leading-relaxed">
                Although we are a sourcing company, we have our own production department capable of handling tasks that many factories are unable or unwilling to do. These tasks include product repackaging, bundling, eCommerce preparation, dropshipping, and fulfillment services.
              </p>
            </div>

            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Professional Sourcing Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our company has over 100 employees, each with years of experience in China sourcing across a wide range of products. In contrast, most other sourcing agents have smaller teams of fewer than 10 people with expertise limited to specific categories.
              </p>
            </div>

            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Special Support for Growing Businesses</h3>
              <p className="text-gray-600 leading-relaxed">
                For large-scale or rapidly expanding companies, we offer a range of tailored additional services. This includes assigning a team of up to 20 people, offering credit payment options, and more.
              </p>
            </div>

            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Global Logistics Network</h3>
              <p className="text-gray-600 leading-relaxed">
                We have established partnerships with major logistics providers worldwide, enabling us to offer competitive shipping rates and reliable delivery to over 200 countries and regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
            Find Us on Social Media
          </h2>
          <p className="text-gray-600 mb-8">
            We are consistently active on social media, sharing knowledge about sourcing, international trading, e-commerce, and more.
          </p>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300">
              <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300">
              <svg className="w-7 h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300">
              <svg className="w-7 h-7 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300">
              <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.322-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.407-.032zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z" />
              </svg>
            </a>
            <a href="#" className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300">
              <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Join thousands of businesses that trust TaiSourcing for their China sourcing needs.
          </p>
          <button className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}