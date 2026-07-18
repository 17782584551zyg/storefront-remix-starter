import { useTranslation } from '~/hooks/useTranslation';

export default function PaymentInformationPage() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('payment.paymentMethods')}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            {t('payment.paymentInfoDesc')}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {t('payment.paypal')}
            </h2>
            <p className="text-gray-600 mb-6">{t('payment.paypalDesc1')}</p>
            <p className="text-gray-600 mb-8">{t('payment.paypalDesc2')}</p>

            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p className="text-gray-700">
                <strong>{t('payment.ourPaypalAccount')}:</strong>{' '}
                17782584551@163.com
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {t('payment.alibabaTradeAssurance')}
            </h2>
            <p className="text-gray-600 mb-4">{t('payment.alibabaDesc1')}</p>
            <p className="text-gray-600 mb-6">{t('payment.alibabaDesc2')}</p>
            <p className="text-gray-600 mb-4">{t('payment.alibabaDesc3')}</p>
            <p className="text-gray-600">{t('payment.alibabaDesc4')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
