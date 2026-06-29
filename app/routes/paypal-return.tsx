import { DataFunctionArgs, redirect } from '@remix-run/server-runtime';
import { getOrderByCode } from '~/providers/orders/order';

export async function loader({ request }: DataFunctionArgs) {
  const url = new URL(request.url);
  const orderCode = url.searchParams.get('orderCode');

  if (!orderCode) {
    return redirect('/');
  }

  try {
    const order = await getOrderByCode(orderCode, { request });

    if (order && order.state === 'PaymentSettled') {
      return redirect(`/checkout/confirmation/${orderCode}`);
    }
  } catch (e) {
    console.error('[PayPal Return] Error:', e);
  }

  return redirect('/checkout/payment');
}

export default function PayPalReturn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
      <p className="text-gray-600">Processing your payment...</p>
    </div>
  );
}