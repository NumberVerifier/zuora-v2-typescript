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
import type { RefundPaymentMethodAutogiroDebitMandate } from './refundPaymentMethodAutogiroDebitMandate';

/**
 * If the `type` of the payment method is `autogiro_debit`, this hash contains details about the Autogiro bank account.
 */
export type RefundPaymentMethodAutogiroDebit = {
  /** The bank account number of the account holder. */
  account_number: string;
  /** Identifier of the bank branch associated with this bank account. */
  branch_code: string;
  /** The identity number used for Autogiro (Direct Debit SE). */
  identity_number: string;
  /** The mandate information for the Credit Card, Credit Card Reference Transaction, ACH, or Bank Transfer payment method. */
  mandate?: RefundPaymentMethodAutogiroDebitMandate;
};
