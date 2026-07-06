export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Project
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-primary rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-primary mb-6">Find New Suppliers</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you are looking for new suppliers, we can help you find the best match and offer you a competitive price along with a cost-effective manufacturing solution. Compare our offer with any of your existing suppliers to see the value we can provide.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you are looking for new suppliers, we can help you find the best match and offer you a competitive price along with a cost-effective manufacturing solution. Compare our offer with any of your existing suppliers to see the value we can provide.
              </p>
              <p className="text-primary font-medium mb-6">
                Check out our <span className="underline">Pro Service Plan</span> for more details.
              </p>
              <div className="flex flex-col gap-3">
                <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300">
                  I need this plan
                </button>
                <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300">
                  I need this plan
                </button>
              </div>
            </div>

            <div className="border-2 border-blue-500 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-blue-600 mb-6">Manage My Suppliers</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                If you prefer to use your own suppliers, we can collaborate with them and manage the entire purchasing process from production to quality inspection and door-to-door logistics. Our support will significantly enhance your sourcing efficiency.
              </p>
              <p className="text-blue-600 font-medium mb-6">
                Discover more details about our <span className="underline">Basic Service Plan</span>.
              </p>
              <div className="flex flex-col gap-3">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  I need this plan
                </button>
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  I need this plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Submit Your Sourcing Request
            </h2>
            <p className="text-gray-600 mb-4">
              Fill out this form with your detailed needs and our customer support team will contact you shortly. We will assign a professional agent to follow up on your project and provide personalized assistance.
            </p>
            <p className="text-gray-600 mb-4">
              To follow up on your response, submit your inquiries using the form. If you encounter any issues with submission, you can also email us directly at info@JingQSourcing.com.
            </p>
            <p className="text-gray-600">
              To get the fastest response, submit your inquiries using the form. If you encounter any issues with submission, you can also email us directly at info@JingQSourcing.com.
            </p>
            <div className="w-24 h-1 bg-gray-300 mx-auto mt-6 rounded-full" />
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="email"
                  placeholder="Email*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Select your country*</option>
                  <option value="US">United States</option>
                  <option value="CN">China</option>
                  <option value="DE">Germany</option>
                  <option value="UK">United Kingdom</option>
                  <option value="JP">Japan</option>
                </select>
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                  <option value="">Select your country*</option>
                  <option value="US">United States</option>
                  <option value="CN">China</option>
                  <option value="DE">Germany</option>
                  <option value="UK">United Kingdom</option>
                  <option value="JP">Japan</option>
                </select>
              </div>
            </div>

            <div>
              <textarea
                placeholder="Describe your sourcing needs..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}