import {
  addItemToOrder,
  adjustOrderLine,
  getActiveOrder,
  removeOrderLine,
  setCustomerForOrder,
  setOrderShippingAddress,
  setOrderShippingMethod,
} from '~/providers/orders/order';
import { DataFunctionArgs, json } from '@remix-run/server-runtime';
import {
  CreateAddressInput,
  CreateCustomerInput,
  ErrorCode,
  ErrorResult,
  OrderDetailFragment,
} from '~/generated/graphql';
import { getSessionStorage } from '~/sessions';
import { shippingFormDataIsValid } from '~/utils/validation';

const AUTH_TOKEN_SESSION_KEY = 'authToken';

export type CartLoaderData = Awaited<ReturnType<typeof loader>>;

export async function loader({ request }: DataFunctionArgs) {
  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(request.headers.get('Cookie'));

  const result = await getActiveOrder({ request, authToken: session.get(AUTH_TOKEN_SESSION_KEY) });

  const authToken = result._headers?.get('x-vendure-auth-token');
  if (authToken) {
    session.set(AUTH_TOKEN_SESSION_KEY, authToken);
  }

  return json(
    { activeOrder: result.activeOrder },
    { headers: { 'Set-Cookie': await sessionStorage.commitSession(session) } }
  );
}

export async function action({ request, params }: DataFunctionArgs) {
  const body = await request.formData();
  const formAction = body.get('action');
  console.log('API ACTIVE-ORDER: action=', formAction);
  
  let activeOrder: OrderDetailFragment | undefined = undefined;
  let error: ErrorResult = {
    errorCode: ErrorCode.NoActiveOrderError,
    message: '',
  };
  let authToken: string | null = null;

  switch (formAction) {
    case 'setCheckoutShipping':
      console.log('API: setCheckoutShipping - formData entries:', Array.from(body.entries()).map(([k,v]) => `${k}=${v}`));
      if (shippingFormDataIsValid(body)) {
        const shippingFormData = Object.fromEntries<any>(
          body.entries(),
        ) as CreateAddressInput;
        const result = await setOrderShippingAddress(
          {
            city: shippingFormData.city,
            company: shippingFormData.company,
            countryCode: shippingFormData.countryCode,
            customFields: shippingFormData.customFields,
            fullName: shippingFormData.fullName,
            phoneNumber: shippingFormData.phoneNumber,
            postalCode: shippingFormData.postalCode,
            province: shippingFormData.province,
            streetLine1: shippingFormData.streetLine1,
            streetLine2: shippingFormData.streetLine2,
          },
          { request },
        );
        authToken = result._headers?.get('x-vendre-auth-token');
        console.log('API: setOrderShippingAddress result typename=', result.setOrderShippingAddress.__typename);
        if (result.setOrderShippingAddress.__typename === 'Order') {
          activeOrder = result.setOrderShippingAddress;
          console.log('API: Order updated - shippingAddress=', activeOrder.shippingAddress?.streetLine1);
        } else {
          error = result.setOrderShippingAddress;
          console.log('API: Error=', error);
        }
      } else {
        console.log('API: shippingFormDataIsValid returned false');
      }
      break;
    case 'setOrderCustomer': {
      console.log('API: setOrderCustomer - formData entries:', Array.from(body.entries()).map(([k,v]) => `${k}=${v}`));
      const customerData = Object.fromEntries<any>(
        body.entries(),
      ) as CreateCustomerInput;
      const result = await setCustomerForOrder(
        {
          emailAddress: customerData.emailAddress,
          firstName: customerData.firstName,
          lastName: customerData.lastName,
        },
        { request },
      );
      authToken = result._headers?.get('x-vendure-auth-token');
      console.log('API: setCustomerForOrder result typename=', result.setCustomerForOrder.__typename);
      if (result.setCustomerForOrder.__typename === 'Order') {
        activeOrder = result.setCustomerForOrder;
        console.log('API: Order updated - customer=', activeOrder.customer?.emailAddress);
      } else {
        error = result.setCustomerForOrder;
        console.log('API: Error=', error);
      }
      break;
    }
    case 'setShippingMethod': {
      const shippingMethodId = body.get('shippingMethodId');
      console.log('API: setShippingMethod - shippingMethodId=', shippingMethodId);
      if (typeof shippingMethodId === 'string') {
        const result = await setOrderShippingMethod(shippingMethodId, {
          request,
        });
        authToken = result._headers?.get('x-vendure-auth-token');
        console.log('API: setOrderShippingMethod result typename=', result.setOrderShippingMethod.__typename);
        if (result.setOrderShippingMethod.__typename === 'Order') {
          activeOrder = result.setOrderShippingMethod;
          console.log('API: Order updated - shippingLines=', activeOrder.shippingLines?.length);
        } else {
          error = result.setOrderShippingMethod;
          console.log('API: Error=', error);
        }
      }
      break;
    }
    case 'removeItem': {
      const lineId = body.get('lineId');
      const result = await removeOrderLine(lineId?.toString() ?? '', {
        request,
      });
      authToken = result._headers?.get('x-vendure-auth-token');
      if (result.removeOrderLine.__typename === 'Order') {
        activeOrder = result.removeOrderLine;
      } else {
        error = result.removeOrderLine;
      }
      break;
    }
    case 'adjustItem': {
      const lineId = body.get('lineId');
      const quantity = body.get('quantity');
      if (lineId && quantity != null) {
        const result = await adjustOrderLine(lineId?.toString(), +quantity, {
          request,
        });
        authToken = result._headers?.get('x-vendure-auth-token');
        if (result.adjustOrderLine.__typename === 'Order') {
          activeOrder = result.adjustOrderLine;
        } else {
          error = result.adjustOrderLine;
        }
      }
      break;
    }
    case 'addItemToOrder': {
      const variantId = body.get('variantId')?.toString();
      const quantity = Number(body.get('quantity')?.toString() ?? 1);
      if (!variantId || !(quantity > 0)) {
        throw new Error(
          `Invalid input: variantId ${variantId}, quantity ${quantity}`,
        );
      }
      const result = await addItemToOrder(variantId, quantity, {
        request,
      });
      authToken = result._headers?.get('x-vendure-auth-token');
      if (result.addItemToOrder.__typename === 'Order') {
        activeOrder = result.addItemToOrder;
      } else {
        error = result.addItemToOrder;
      }
      break;
    }
    case 'addPaymentToOrder': {
    }
    default:
    // Don't do anything
  }

  const sessionStorage = await getSessionStorage();
  const session = await sessionStorage.getSession(
    request?.headers.get('Cookie'),
  );
  session.flash('activeOrderError', error);

  if (authToken) {
    session.set(AUTH_TOKEN_SESSION_KEY, authToken);
  }

  const orderResult = activeOrder ? { activeOrder } : await getActiveOrder({ request, authToken });
  const finalOrder = orderResult.activeOrder;

  return json(
    { activeOrder: finalOrder },
    {
      headers: { 'Set-Cookie': await sessionStorage.commitSession(session) },
    },
  );
}
