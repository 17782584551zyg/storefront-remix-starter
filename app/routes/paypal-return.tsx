import { DataFunctionArgs, redirect } from '@remix-run/server-runtime';
import { getActiveOrder } from '~/providers/orders/order';
import { settlePayment, transitionOrderToState } from '~/providers/checkout/checkout';
import { getSessionStorage } from '~/sessions';

export async function loader({ request }: DataFunctionArgs) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  const payerId = url.searchParams.get('PayerID');
  
  if (!token) {
    return redirect('/checkout/payment');
  }
  
  const session = await getSessionStorage().then((sessionStorage) =>
    sessionStorage.getSession(request?.headers.get('Cookie')),
  );
  
  const orderResult = await getActiveOrder({ request });
  const activeOrder = orderResult.activeOrder;
  
  if (!activeOrder || !activeOrder.active) {
    return redirect('/');
  }
  
  const lastPayment = activeOrder.payments?.[activeOrder.payments.length - 1];
  
  if (lastPayment && lastPayment.state === 'Authorized') {
    try {
      const settleResult = await settlePayment(
        { paymentId: lastPayment.id },
        { request },
      );
      
      if (settleResult.settlePayment.__typename === 'Payment' && settleResult.settlePayment.state === 'Settled') {
        await transitionOrderToState('PaymentSettled', { request });
        return redirect(`/checkout/confirmation/${activeOrder.code}`);
      }
    } catch (e) {
      console.error('PayPal settle payment error:', e);
    }
  }
  
  return redirect('/checkout/payment');
}