import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import pageImages from '~/data/page-images.json';
import { BACKEND_URL } from '~/constants';

export const loader: LoaderFunction = async () => {
  return json({ images: pageImages['quality-control'] || {} });
};

export default function QualityControlPage() {
  const { images } = useLoaderData<{ images: Record<string, string> }>();
  
  const getImageUrl = (name: string) => {
    const path = images[name];
    if (path) {
      return `${BACKEND_URL}${path}`;
    }
    return null;
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Quality Control
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Quality inspection is crucial. We take it very seriously to ensure your supply chain is worry-free.
              </p>
              <button className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get a Quote
              </button>
            </div>
            <div className="relative">
              <img
                src={getImageUrl('hero-image') || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Quality%20control%20inspectors%20checking%20products%20in%20factory&image_size=landscape_4_3'}
                alt="Quality Control"
                className="w-full aspect-video object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Inspection Method</div>
                    <div className="font-semibold text-gray-900">AQL 2.5 Standard</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Quality Guarantee
            </h2>
            <p className="text-gray-600">
              When you choose our Pro Plan and use our selected suppliers, we guarantee your product quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Free Replacement</h3>
              </div>
              <p className="text-gray-600">
                If we find defective products during quality inspection at our warehouse, we will help you replace them for free.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">15-Day Warranty</h3>
              </div>
              <p className="text-gray-600">
                If you find product defects within 15 days after receiving the goods and provide relevant evidence, we will arrange replacements or refunds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How We Inspect Your Products
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">General Inspection</h3>
              <p className="text-gray-600 mb-4">
                Whether you choose our Pro Plan or Basic Plan, your goods will be sent to our warehouse for free comprehensive inspection. We follow Level II standards, AQL 2.5 standards, just like other inspection companies.
              </p>
              <p className="text-gray-600 mb-4">
                For defective products, if you use our selected suppliers, we will handle quality issues for free. If you use your own suppliers, we can assist in solving the problem, but there may be charges for logistics and re-inspection fees.
              </p>
              <p className="text-gray-600 mb-6">
                If you need a customized inspection solution or a lower defect rate, contact our agent for details on any additional costs.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Contact Our Agent
              </button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={getImageUrl('general-inspection') || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Workers%20inspecting%20products%20in%20warehouse%20with%20checklist&image_size=landscape_4_3'}
                alt="General Inspection"
                className="w-full aspect-video object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={getImageUrl('full-inspection') || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Quality%20control%20worker%20testing%20product%20with%20tools&image_size=landscape_4_3'}
                alt="Full Inspection"
                className="w-full aspect-video object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Full Inspection</h3>
              <p className="text-gray-600 mb-4">
                To achieve 0% defect rate, we recommend our full inspection service to identify and remove all defective products. Our standard rate is $5 per hour. Contact our agent to discuss your needs and get a customized quote.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">Defect Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">24h</div>
              <div className="text-gray-600">Inspection Report</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">Quality Inspectors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">10K+</div>
              <div className="text-gray-600">Products Inspected Monthly</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Need Custom Quality Control Solutions?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our quality control team will analyze your product requirements and provide the most suitable inspection plan.
          </p>
          <button className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Our QC Team
          </button>
        </div>
      </section>
    </div>
  );
}