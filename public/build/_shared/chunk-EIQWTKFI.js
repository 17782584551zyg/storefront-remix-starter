import{a as t}from"/build/_shared/chunk-6MW4WS3D.js";import{b as e}from"/build/_shared/chunk-ZXVIEAYD.js";function s(n,r){return t.addPaymentToOrder({input:n},r)}e`
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
`;e`
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
`;e`
  query nextOrderStates {
    nextOrderStates
  }
`;e`
  query availableCountries {
    availableCountries {
      id
      name
      code
    }
  }
`;e`
  mutation addPaymentToOrder($input: PaymentInput!) {
    addPaymentToOrder(input: $input) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;e`
  mutation transitionOrderToState($state: String!) {
    transitionOrderToState(state: $state) {
      ...OrderDetail
      ... on ErrorResult {
        errorCode
        message
      }
    }
  }
`;e`
  mutation createStripePaymentIntent {
    createStripePaymentIntent
  }
`;e`
  query generateBraintreeClientToken {
    generateBraintreeClientToken
  }
`;e`
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
`;export{s as a};
