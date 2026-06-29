import { useState } from 'react';
import { Form, useActionData, useNavigation } from '@remix-run/react';
import { EligiblePaymentMethodsQuery } from '~/generated/graphql';
import { useTranslation } from 'react-i18next';

export function PayPalPayments({
  paymentMethod,
  paymentError,
}: {
  paymentMethod: EligiblePaymentMethodsQuery['eligiblePaymentMethods'][number];
  paymentError?: string;
}) {
  const { t } = useTranslation();
  const actionData = useActionData<{ approvalUrl?: string; error?: string }>();
  const navigation = useNavigation();

  if (actionData?.approvalUrl) {
    window.location.href = actionData.approvalUrl;
  }

  const currentError = actionData?.error || paymentError;

  return (
    <div className="flex flex-col items-center">
      {currentError && (
        <div className="rounded-md bg-red-50 p-4 mb-8">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {t('checkout.paymentErrorMessage')}
              </h3>
              <div className="mt-2 text-sm text-red-700">{currentError}</div>
            </div>
          </div>
        </div>
      )}
      <Form method="post">
        <input
          type="hidden"
          name="paymentMethodCode"
          value={paymentMethod.code}
        />
        <input
          type="hidden"
          name="paymentType"
          value="paypal"
        />
        <button
          type="submit"
          disabled={navigation.state === 'loading'}
          className="flex px-8 bg-blue-600 hover:bg-blue-700 items-center justify-center space-x-3 py-4 border border-transparent text-base font-medium rounded-lg shadow-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span className="font-bold text-lg">
            {navigation.state === 'loading' ? t('checkout.processing') : `${t('checkout.payWith')} PayPal`}
          </span>
        </button>
      </Form>
      <p className="text-gray-500 text-xs mt-4">
        {t('checkout.paypalSecure')}
      </p>
    </div>
  );
}