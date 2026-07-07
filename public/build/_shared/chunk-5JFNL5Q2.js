import {
  sdk
} from "/build/_shared/chunk-DRHEKX2C.js";
import {
  lib_default
} from "/build/_shared/chunk-FX3BUYEM.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-CG66FP4Q.js";

// app/providers/checkout/checkout.ts
init_remix_hmr();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\providers\\checkout\\checkout.ts"
  );
  import.meta.hot.lastModified = "1783321793533.433";
}
function addPaymentToOrder(input, options) {
  return sdk.addPaymentToOrder({ input }, options);
}
lib_default`
  query eligibleShippingMethods {
    eligibleShippingMethods {
      id
      name
      description
      metadata
      price
      priceWithTax
    }
  }
`;
lib_default`
  query eligiblePaymentMethods {
    eligiblePaymentMethods {
      id
      code
      name
      description
      eligibilityMessage
      isEligible
    }
  }
`;
lib_default`
  query nextOrderStates {
    nextOrderStates
  }
`;
lib_default`
  query availableCountries {
    availableCountries {
      id
      name
      code
    }
  }
`;
lib_default`
  mutation addPaymentToOrder($input: PaymentInput!) {
    addPaymentToOrder(input: $input) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
lib_default`
  mutation transitionOrderToState($state: String!) {
    transitionOrderToState(state: $state) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;
lib_default`
  mutation createStripePaymentIntent {
    createStripePaymentIntent
  }
`;
lib_default`
  query generateBraintreeClientToken {
    generateBraintreeClientToken
  }
`;
lib_default`
  mutation settlePayment($input: SettlePaymentInput!) {
    settlePayment(input: $input) {
      ... on Payment {
        id
        state
        transactionId
      }
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;

export {
  addPaymentToOrder
};
//# sourceMappingURL=/build/_shared/chunk-5JFNL5Q2.js.map
