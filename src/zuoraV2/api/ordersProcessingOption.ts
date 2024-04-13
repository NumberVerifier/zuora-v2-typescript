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
import type { OrdersProcessingOptionCollectionMethod } from './ordersProcessingOptionCollectionMethod';

/**
 * Processing options for the invoice or payment.
 */
export interface OrdersProcessingOption {
  /** Specifies whether to just create an invoice, or to create an invoice and collect payment. */
  collection_method?: OrdersProcessingOptionCollectionMethod;
  /** The date printed on billing documents. */
  document_date?: Date;
  draft_invoice?: boolean;
  /** Identifier of the payment gateway Zuora will use to authorize the payments that are made with this payment method. */
  payment_gateway_id?: string;
  /** Payment method Id used to pay billing documents. */
  payment_method_id?: string;
  refund_reason_code?: string;
  /** The target date for the order to be picked up by bill run for billing. */
  target_date?: Date;
}
