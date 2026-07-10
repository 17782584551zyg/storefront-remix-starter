import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import pageImages from '~/data/page-images.json';

export const loader: LoaderFunction = async () => {
  return json({ images: pageImages['shipping-solutions'] || {} });
};

export default function ShippingSolutionsPage() {
  const { images } = useLoaderData<{ images: Record<string, string> }>();
  
  const getImageUrl = (name: string) => {
    const path = images[name];
    if (path) {
      return path;
    }
    return null;
  };
  
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Fast & Secure Global Shipping
              </h1>
              <p className="text-white/90 text-lg mb-8">
                Providing flexible shipping solutions for businesses of any size.
              </p>
              <Link to="/services" className="inline-flex px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </Link>
            </div>
            <div className="relative">
              <img
                src={getImageUrl('hero-image') || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Container%20shipping%20port%20with%20cargo%20containers%20and%20trucks&image_size=landscape_4_3'}
                alt="Global Shipping"
                className="w-full aspect-video object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Delivery Time</div>
                    <div className="text-xl font-bold text-orange-500">3-5 Days</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-green-600 font-medium">On Time</span>
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
              International Express
            </h2>
            <p className="text-gray-600">
              For goods under 500kg, our international express service can deliver directly to your door in 3-5 days in most countries and regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={getImageUrl('international-express') || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Shipping%20boxes%20with%20DHL%20UPS%20FedEx%20logistics%20company%20logos&image_size=landscape_4_3'}
                alt="International Express"
                className="w-full aspect-video object-cover rounded-xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium">
                DHL, UPS, FedEx, DPD
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">Enjoy our discounted express rates based on shipment weight for lower shipping costs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dangerous Goods Shipping</h3>
                  <p className="text-gray-600">Our network safely transports all types of goods including batteries, liquids, and powders.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Insurance Coverage</h3>
                  <p className="text-gray-600">In case of damage, we work closely with carriers and suppliers to ensure compensation for shipping costs and product value.</p>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/services" className="inline-flex px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">Get a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Port to Port Shipping
            </h2>
            <p className="text-gray-600">
              If you prefer to use your own freight forwarder for local logistics, we can deliver your goods to any designated sea, air, or railway port.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl p-8 shadow-sm">
              <div>
                <img
                  src={getImageUrl('sea-freight') || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cargo%20ship%20carrying%20containers%20on%20the%20ocean&image_size=landscape_4_3'}
                  alt="Sea Freight"
                  className="w-full aspect-video object-cover rounded-xl"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Sea Freight</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  This is the most economical shipping method. From China to destination ports, it only takes 15-40 days. We will advise your shipment to choose LCL or FCL.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    FCL (Full Container Load)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    LCL (Less than Container Load)
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    15-40 days transit time
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl p-8 shadow-sm">
              <div>
                <img
                  src={getImageUrl('air-freight') || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Cargo%20airplane%20loading%20containers%20at%20airport&image_size=landscape_4_3'}
                  alt="Air Freight"
                  className="w-full aspect-video object-cover rounded-xl"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Air Freight</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  This is the fastest shipping method. From China to destination airports, it only takes 2-5 days. For goods over 500kg, this option is more cost-effective than international express.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    2-5 days transit time
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cost-effective for bulk cargo
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Direct flights available
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-xl p-8 shadow-sm">
              <div>
                <img
                  src={getImageUrl('railway-freight') || 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Railway%20freight%20train%20carrying%20containers%20through%20countryside&image_size=landscape_4_3'}
                  alt="Railway Freight"
                  className="w-full aspect-video object-cover rounded-xl"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Railway Freight</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We provide China-Europe Railway Express FCL/LCL transport services. Railway freight takes half the time of sea freight and costs less than air freight.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    China-Europe Railway Express
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Half the time of sea freight
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Lower cost than air freight
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Need Custom Shipping Solutions?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our logistics experts will analyze your shipping needs and provide the most cost-effective solution.
          </p>
          <Link to="/services" className="inline-flex px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl">Contact Our Logistics Team</Link>
        </div>
      </section>
    </div>
  );
}



