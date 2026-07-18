import { useState } from 'react';
import { graphqlClient } from '~/lib/graphql-client';
import { useTranslation } from '~/hooks/useTranslation';

export default function ServicesPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await graphqlClient.request(
        `
        mutation CreateContactForm($input: CreateContactFormInput!) {
          createContactForm(input: $input) {
            id
            firstName
            email
            createdAt
          }
        }
      `,
        {
          input: {
            ...formData,
            source: 'services',
          },
        },
      );
      setSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        message: '',
      });
    } catch (error) {
      console.error('Failed to submit form:', error);
      alert(t('services.submitError'));
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-orange-500 via-orange-400 to-amber-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('services.startYourProject')}
          </h1>
          <div className="w-24 h-1 bg-white/50 mx-auto rounded-full" />
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-orange-500 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white h-full">
              <h3 className="text-xl font-bold text-orange-600 mb-4">
                {t('services.findNewSuppliers')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('services.findNewSuppliersDesc')}
              </p>
              <p className="text-orange-600 font-medium mb-6">
                {t('services.proServicePlan')}
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">
                {t('services.needThisPlan')}
              </button>
            </div>

            <div className="border-2 border-blue-500 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300 bg-white h-full">
              <h3 className="text-xl font-bold text-blue-600 mb-4">
                {t('services.manageMySuppliers')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('services.manageMySuppliersDesc')}
              </p>
              <p className="text-blue-600 font-medium mb-6">
                {t('services.basicServicePlan')}
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
                {t('services.needThisPlan')}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('services.submitSourcingRequest')}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t('services.submitSourcingRequestDesc')}
            </p>
            <p className="text-gray-500 mt-4 text-sm">
              {t('services.submitSourcingRequestEmail')}
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-6 rounded-full" />
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-2">
                {t('services.thankYou')}
              </h3>
              <p className="text-green-600">{t('services.requestSubmitted')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder={t('services.firstName')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder={t('services.lastName')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('services.email')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('services.phoneNumber')}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">{t('services.selectCountry')}</option>
                    <option value="US">{t('services.unitedStates')}</option>
                    <option value="CN">{t('services.china')}</option>
                    <option value="DE">{t('services.germany')}</option>
                    <option value="UK">{t('services.unitedKingdom')}</option>
                    <option value="JP">{t('services.japan')}</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company || ''}
                    onChange={handleChange}
                    placeholder={t('services.companyName')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('services.describeSourcingNeeds')}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting
                  ? t('services.submitting')
                  : t('services.submitRequest')}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
