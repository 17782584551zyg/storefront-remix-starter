import { json, LoaderFunction } from '@remix-run/node';
import { useLoaderData, Link } from '@remix-run/react';
import pageImages from '~/data/page-images.json';
import { useTranslation } from '~/hooks/useTranslation';

export const loader: LoaderFunction = async () => {
  return json({ images: pageImages['quality-control'] || {} });
};

export default function QualityControlPage() {
  const { t } = useTranslation();
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
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {t('qualityControl.qualityControl')}
              </h1>
              <p className="text-white/90 text-lg mb-8">
                {t('qualityControl.qualityInspectionCrucial')}
              </p>
              <Link
                to="/services"
                className="inline-flex px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('qualityControl.getAQuote')}
              </Link>
            </div>
            <div className="relative">
              <img
                src={
                  getImageUrl('hero-image') ||
                  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Quality%20control%20inspectors%20checking%20products%20in%20factory&image_size=landscape_4_3'
                }
                alt={t('qualityControl.qualityControl')}
                className="w-full aspect-video object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">
                      {t('qualityControl.inspectionMethod')}
                    </div>
                    <div className="font-semibold text-gray-900">
                      {t('qualityControl.aqlStandard')}
                    </div>
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
              {t('qualityControl.ourQualityGuarantee')}
            </h2>
            <p className="text-gray-600">
              {t('qualityControl.qualityGuaranteeDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t('qualityControl.freeReplacement')}
                </h3>
              </div>
              <p className="text-gray-600">
                {t('qualityControl.freeReplacementDesc')}
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-orange-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {t('qualityControl.warranty')}
                </h3>
              </div>
              <p className="text-gray-600">
                {t('qualityControl.warrantyDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('qualityControl.howWeInspect')}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('qualityControl.generalInspection')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('qualityControl.generalInspectionDesc1')}
              </p>
              <p className="text-gray-600 mb-4">
                {t('qualityControl.generalInspectionDesc2')}
              </p>
              <p className="text-gray-600 mb-6">
                {t('qualityControl.generalInspectionDesc3')}
              </p>
              <Link
                to="/services"
                className="inline-flex px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {t('qualityControl.contactOurAgent')}
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={
                  getImageUrl('general-inspection') ||
                  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Workers%20inspecting%20products%20in%20warehouse%20with%20checklist&image_size=landscape_4_3'
                }
                alt={t('qualityControl.generalInspection')}
                className="w-full aspect-video object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={
                  getImageUrl('full-inspection') ||
                  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Quality%20control%20worker%20testing%20product%20with%20tools&image_size=landscape_4_3'
                }
                alt="Full Inspection"
                className="w-full aspect-video object-cover rounded-xl shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t('qualityControl.fullInspection')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('qualityControl.fullInspectionDesc')}
              </p>
              <Link
                to="/services"
                className="inline-flex px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                {t('qualityControl.getStartedNow')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
              <div className="text-gray-600">
                {t('qualityControl.defectDetectionRate')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">24h</div>
              <div className="text-gray-600">
                {t('qualityControl.inspectionReport')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">50+</div>
              <div className="text-gray-600">
                {t('qualityControl.qualityInspectors')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">
                10K+
              </div>
              <div className="text-gray-600">
                {t('qualityControl.productsInspectedMonthly')}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('qualityControl.needCustomSolutions')}
          </h2>
          <p className="text-white/90 text-lg mb-8">
            {t('qualityControl.needCustomSolutionsDesc')}
          </p>
          <button className="px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl">
            {t('qualityControl.contactQcTeam')}
          </button>
        </div>
      </section>
    </div>
  );
}
