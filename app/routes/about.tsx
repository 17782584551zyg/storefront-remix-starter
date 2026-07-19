import { Link } from '@remix-run/react';
import { useTranslation } from '~/hooks/useTranslation';

export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed">
              {t('about.companyIntro')}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t('about.companyStats')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-4">
              {t('about.whatMakesUsUnique')}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('about.competitivePrices')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.competitivePricesDesc')}
              </p>
            </div>

            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('about.qualityAssurance')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.qualityAssuranceDesc')}
              </p>
            </div>

            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('about.inHouseProduction')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.inHouseProductionDesc')}
              </p>
            </div>

            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('about.professionalTeam')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.professionalTeamDesc')}
              </p>
            </div>

            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('about.specialSupport')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.specialSupportDesc')}
              </p>
            </div>

            <div className="border-t-4 border-orange-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('about.globalLogistics')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.globalLogisticsDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t('about.manufacturerProfile')}
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full" />
          </div>

          <div className="space-y-16">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
                {t('about.manufacturerIntro')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/d5/p2024050617501352100__preview.jpeg?preset=full"
                  alt={t('about.companyExterior')}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/7d/p2024050617501209061__preview.jpeg?preset=full"
                  alt={t('about.productionWorkshop')}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {t('about.factoryShowcase')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
                {t('about.factoryShowcaseDesc')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/48/20240506180050d60b5__preview.webp?preset=full"
                  alt={t('about.factoryShowcase1')}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/7d/p2024050617501209061__preview.jpeg?preset=full"
                  alt={t('about.factoryShowcase2')}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {t('about.productIntroduction')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
                {t('about.productIntroductionDesc')}
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/fc/p202405061750127139d__preview.jpeg?preset=full"
                  alt={t('about.product1')}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/4a/p20240506175011daf73__preview.jpeg?preset=full"
                  alt={t('about.product2')}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/0b/p202405061750101c8f6__preview.jpeg?preset=full"
                  alt={t('about.product3')}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/12/p202405061750123da29__preview.jpeg?preset=full"
                  alt={t('about.product4')}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/77/p202405061750177f0d5__preview.jpeg?preset=full"
                  alt={t('about.product5')}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/ad/p202405061750180ba20__preview.jpeg?preset=full"
                  alt={t('about.product6')}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/af/p2024050617501172ca6__preview.jpeg?preset=full"
                  alt={t('about.product7')}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/9d/p2024050617501688a07__preview.jpeg?preset=full"
                  alt={t('about.product8')}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {t('about.productionEquipment')}
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('about.castingEquipment')}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t('about.castingEquipmentDesc')}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('about.forgingEquipment')}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t('about.forgingEquipmentDesc')}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('about.hotForgingEquipment')}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t('about.hotForgingEquipmentDesc')}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('about.productMaterials')}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t('about.productMaterialsDesc')}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('about.testingEquipment')}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t('about.testingEquipmentDesc')}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('about.equipmentFixedParts')}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {t('about.equipmentFixedPartsDesc')}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/df/p2024050714144245e7b__preview.webp?preset=full"
                  alt={t('about.productionEquipment1')}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/b7/p2024050714144290a66__preview.webp?preset=full"
                  alt={t('about.productionEquipment2')}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/16/p20240507141441ae061__preview.webp?preset=full"
                  alt={t('about.productionEquipment3')}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/4c/p20240507141441bbd19__preview.webp?preset=full"
                  alt={t('about.productionEquipment4')}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/ef/p20240507141442c22a4__preview.webp?preset=full"
                  alt={t('about.productionEquipment5')}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/ae/p202405071414434c98f__preview.webp?preset=full"
                  alt={t('about.productionEquipment6')}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://my-vendure-backend-production.up.railway.app/assets/preview/67/p202405071414416594f__preview.webp?preset=full"
                  alt={t('about.productionEquipment7')}
                  className="w-full h-48 object-cover rounded-lg md:col-span-3"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
            {t('about.findUsSocial')}
          </h2>
          <p className="text-gray-600 mb-8">{t('about.findUsSocialDesc')}</p>

          <div className="flex justify-center gap-6">
            <a
              href="#"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300"
            >
              <svg
                className="w-7 h-7 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300"
            >
              <svg
                className="w-7 h-7 text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300"
            >
              <svg
                className="w-7 h-7 text-red-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300"
            >
              <svg
                className="w-7 h-7 text-green-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.322-1.233a.582.582 0 01-.023-.156.49.49 0 01.201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.269-.03-.407-.032zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-orange-50 transition-all duration-300"
            >
              <svg
                className="w-7 h-7 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {t('about.readyStart')}
          </h2>
          <p className="text-white/90 text-lg mb-8">
            {t('about.readyStartDesc')}
          </p>
          <Link
            to="/services"
            className="inline-flex px-8 py-4 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('about.getStarted')}
          </Link>
        </div>
      </section>
    </div>
  );
}
