import { DataFunctionArgs, redirect } from '@remix-run/server-runtime';
import { getOrderByCode } from '~/providers/orders/order';
import { settlePayment, transitionOrderToState } from '~/providers/checkout/checkout';

export async function loader({ request }: DataFunctionArgs) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  const payerId = url.searchParams.get('PayerID');
  const orderCode = url.searchParams.get('orderCode');
  
  if (!token || !orderCode) {
    return redirect('/checkout/payment');
  }
  
  const order = await getOrderByCode(orderCode, { request });
  
  if (!order) {
    return redirect('/');
  }
  
  const lastPayment = order.payments?.[order.payments.length - 1];
  
  if (lastPayment && lastPayment.state === 'Authorized') {
    try {
      const settleResult = await settlePayment(
        { paymentId: lastPayment.id },
        { request },
      );
      
      if (settleResult.settlePayment.__typename === 'Payment' && settleResult.settlePayment.state === 'Settled') {
        await transitionOrderToState('PaymentSettled', { request });
        return redirect(`/checkout/confirmation/${order.code}`);
      }
    } catch (e) {
      console.error('PayPal settle payment error:', e);
    }
  }
  
  return redirect('/checkout/payment');
}