import { DataFunctionArgs, redirect } from '@remix-run/server-runtime';
import { getOrderByCode } from '~/providers/orders/order';
import { settlePayment, transitionOrderToState } from '~/providers/checkout/checkout';

export async function loader({ request }: DataFunctionArgs) {
  const url = new URL(request.url);
  const token = url.searchParams.get('token');
  const payerId = url.searchParams.get('PayerID');
  const orderCode = url.searchParams.get('orderCode');
  
  console.log('[PayPal Return] Loader received:', { token, payerId, orderCode });
  
  if (!token || !orderCode) {
    console.error('[PayPal Return] Missing token or orderCode');
    return redirect('/checkout/payment');
  }
  
  try {
    const order = await getOrderByCode(orderCode, { request });
    
    if (!order) {
      console.error('[PayPal Return] Order not found:', orderCode);
      return redirect('/');
    }
    
    console.log('[PayPal Return] Found order:', order.code, 'state:', order.state);
    
    const lastPayment = order.payments?.[order.payments.length - 1];
    
    if (!lastPayment) {
      console.error('[PayPal Return] Payment not found for order:', order.code);
      return redirect('/checkout/payment');
    }
    
    console.log('[PayPal Return] Payment state:', lastPayment.state, 'id:', lastPayment.id);
    
    if (lastPayment.state === 'Settled') {
      console.log('[PayPal Return] Payment already settled, redirecting to confirmation');
      return redirect(`/checkout/confirmation/${order.code}`);
    }
    
    if (lastPayment.state === 'Authorized') {
      console.log('[PayPal Return] Settling payment:', lastPayment.id);
      
      const settleResult = await settlePayment(
        { paymentId: lastPayment.id },
        { request },
      );
      
      console.log('[PayPal Return] Settle result full:', JSON.stringify(settleResult, null, 2));
      
      if (settleResult.settlePayment) {
        const paymentResult = settleResult.settlePayment;
        
        if (paymentResult.__typename === 'Payment') {
          console.log('[PayPal Return] Payment settled successfully, state:', paymentResult.state);
          
          if (paymentResult.state === 'Settled') {
            console.log('[PayPal Return] Transitioning order to PaymentSettled');
            
            const transitionResult = await transitionOrderToState('PaymentSettled', { request });
            
            console.log('[PayPal Return] Transition result:', JSON.stringify(transitionResult, null, 2));
            
            if (transitionResult.transitionOrderToState) {
              const orderResult = transitionResult.transitionOrderToState;
              
              if (orderResult.__typename === 'Order') {
                console.log('[PayPal Return] Order state transitioned successfully, redirecting to confirmation');
                return redirect(`/checkout/confirmation/${order.code}`);
              } else {
                console.error('[PayPal Return] Order state transition failed:', orderResult);
              }
            } else {
              console.error('[PayPal Return] transitionOrderToState returned undefined');
            }
          } else {
            console.error('[PayPal Return] Payment not settled after settlement attempt, state:', paymentResult.state);
          }
        } else {
          console.error('[PayPal Return] Settlement failed with error:', paymentResult);
        }
      } else {
        console.error('[PayPal Return] settlePayment returned undefined result');
      }
    } else {
      console.error('[PayPal Return] Payment is not Authorized, current state:', lastPayment.state);
    }
  } catch (e) {
    console.error('[PayPal Return] Unexpected error:', e);
    console.error('[PayPal Return] Error stack:', (e as Error).stack);
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