/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * Quickstart API Reference
 * Zuora Quickstart API is recommended for new customers and integrators, allowing new integrators to swiftly integrate with Zuora. It supports essential business use cases. 

To use the Quickstart API, you must have the following features enabled on your tenant:
 
* [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization) 
* [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement)

To find the latest changes made to the Zuora Quickstart API, check the [Quickstart API Changelog](https://developer.zuora.com/quickstart-api/changelog/2022q4-changelog/). 
We recommend that you subscribe to [Developers Community](https://community.zuora.com/communities/community-home?communitykey=e2a932b4-50c4-4019-a3e8-362e38714df3) to get notifications when a new version is released.


 * OpenAPI spec version: 2024-01-24
 */

/**
 * The type of the payment method. An additional hash is included on the payment method with a name matching this value. It contains additional information specific to the payment method type.
 */
export enum PaymentMethodType {
  paypal_express = 'paypal_express',
  paypal_express_native = 'paypal_express_native',
  paypal_adaptive = 'paypal_adaptive',
  card = 'card',
  cc_ref = 'cc_ref',
  ach_debit = 'ach_debit',
  sepa_debit = 'sepa_debit',
  betalings_debit = 'betalings_debit',
  autogiro_debit = 'autogiro_debit',
  bacs_debit = 'bacs_debit',
  au_becs_debit = 'au_becs_debit',
  nz_becs_debit = 'nz_becs_debit',
  pad_debit = 'pad_debit',
  apple_pay = 'apple_pay',
  wire_transfer = 'wire_transfer',
  check = 'check',
  cash = 'cash',
  other = 'other',
  paypal = 'paypal',
  adyen_google_pay = 'adyen_google_pay',
  adyen_apple_pay = 'adyen_apple_pay'
}
